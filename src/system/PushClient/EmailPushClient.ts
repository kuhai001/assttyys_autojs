import { bmpToBase64, scaleBmp } from '@/common/toolAuto';
import { AbstractPushClient, Message } from './AbstractPushClient';

export default class EmailPushClient extends AbstractPushClient {

	name = '邮件推送';

	configDefine = [{
		desc: 'SMTP 服务器地址',
		name: 'email_smtp_host',
		type: 'text',
		default: ''
	}, {
		desc: 'SMTP 端口（SSL默认465，TLS默认587）',
		name: 'email_smtp_port',
		type: 'text',
		default: '465'
	}, {
		desc: '启用 SSL',
		name: 'email_smtp_ssl',
		type: 'switch',
		default: true
	}, {
		desc: 'SMTP 用户名',
		name: 'email_smtp_user',
		type: 'text',
		default: ''
	}, {
		desc: 'SMTP 密码/授权码',
		name: 'email_smtp_pass',
		type: 'text',
		default: ''
	}, {
		desc: '发件人地址',
		name: 'email_from',
		type: 'text',
		default: ''
	}, {
		desc: '收件人地址',
		name: 'email_to',
		type: 'text',
		default: ''
	}, {
		desc: '邮件主题前缀',
		name: 'msgPush_prefix',
		type: 'text',
		default: '[assttyys]'
	}];

	push(data: Message[], config: Record<string, string | boolean | number>) {
		const email_smtp_host = config.email_smtp_host as string;
		const email_smtp_port = config.email_smtp_port as string;
		const email_smtp_ssl = config.email_smtp_ssl;
		const email_smtp_user = config.email_smtp_user as string;
		const email_smtp_pass = config.email_smtp_pass as string;
		const email_from = config.email_from as string;
		const email_to = config.email_to as string;
		const msgPush_prefix = (config.msgPush_prefix || '[assttyys]') as string;

		if (!email_smtp_host || !email_smtp_user || !email_smtp_pass || !email_from || !email_to) {
			throw new Error('邮件推送配置不完整，请检查 SMTP 配置');
		}

		const host = email_smtp_host;
		const port = parseInt(email_smtp_port) || 465;
		const useSSL = email_smtp_ssl !== false && email_smtp_ssl !== 'false';

		let firstText = '';
		for (let i = 0; i < data.length; i++) {
			if (data[i].type === 'text') {
				firstText = data[i].data;
				break;
			}
		}
		const subject = msgPush_prefix + ' ' + firstText;

		console.log('邮件推送: ' + email_from + ' -> ' + email_to);

		const htmlParts: string[] = [];
		for (let j = 0; j < data.length; j++) {
			if (data[j].type === 'text') {
				htmlParts.push('<p>' + escapeHtml(data[j].data) + '</p>');
			} else if (data[j].type === 'image') {
				const b64 = bmpToBase64(scaleBmp(data[j].data, 0.1));
				htmlParts.push('<p><img src="data:image/png;base64,' + b64 + '" /></p>');
			}
		}

		return sendSmtpMail(host, port, useSSL, email_smtp_user, email_smtp_pass, email_from, email_to, subject, htmlParts.join('\n'));
	}
}

function escapeHtml(str: string): string {
	return str
		.replace(/&/g, '&amp;')
		.replace(/</g, '&lt;')
		.replace(/>/g, '&gt;')
		.replace(/"/g, '&quot;');
}

function sendSmtpMail(
	host: string,
	port: number,
	useSSL: boolean,
	user: string,
	pass: string,
	from: string,
	to: string,
	subject: string,
	htmlBody: string
): any {
	const rawMessage = buildRawMessage(from, to, subject, htmlBody, host);
	console.log('邮件正文长度：' + rawMessage.length);

	console.log('正在连接SMTP服务器 ' + host + ':' + port + ' (SSL: ' + useSSL + ')');

	let socket: any = null;
	let useTlsUpgrade = false;

	// 尝试创建SSL连接（端口465需要隐式SSL）
	if (useSSL) {
		socket = createSslSocket(host, port);
		if (socket) {
			console.log('SSL连接成功');
		} else {
			// SSL失败，降级为普通连接，后续尝试STARTTLS
			console.log('SSL连接失败，尝试普通连接...');
			socket = createSocketWithTimeout(host, port);
			if (socket) {
				useTlsUpgrade = true;
				console.log('普通连接成功');
			} else {
				throw new Error('连接SMTP服务器超时');
			}
		}
	} else {
		socket = createSocketWithTimeout(host, port);
		if (!socket) {
			throw new Error('连接SMTP服务器超时');
		}
		console.log('连接成功');
	}

	socket.setSoTimeout(60000);
	const reader = new java.io.BufferedReader(new java.io.InputStreamReader(socket.getInputStream(), 'UTF-8'));
	const writer = new java.io.BufferedWriter(new java.io.OutputStreamWriter(socket.getOutputStream(), 'UTF-8'));

	const writeLine = (line: string): void => {
		writer.write(line + '\r\n');
		writer.flush();
	};

	const readLine = (): string => {
		const line = reader.readLine();
		console.log('SMTP << ' + line);
		return line;
	};

	try {
		// 读取服务器欢迎信息
		console.log('读取服务器欢迎信息...');
		readLine();

		// EHLO / HELO
		try {
			console.log('发送EHLO...');
			writeLine('EHLO ' + host);
			console.log('SMTP >> EHLO ' + host);
			readEhloResponse(reader);
		} catch (e) {
			console.log('EHLO失败，尝试HELO...');
			writeLine('HELO ' + host);
			console.log('SMTP >> HELO ' + host);
			const heloResp = readLine();
			if (!heloResp || heloResp.charAt(0) !== '2') {
				throw new Error('HELO 也被服务器拒绝: ' + heloResp);
			}
		}

		// 如果是普通连接且需要SSL，尝试STARTTLS升级
		if (useTlsUpgrade) {
			console.log('发送STARTTLS...');
			writeLine('STARTTLS');
			console.log('SMTP >> STARTTLS');
			const startTlsResp = readLine();
			if (startTlsResp && startTlsResp.charAt(0) === '2') {
				console.log('STARTTLS成功，升级SSL...');
				const upgradedSocket = upgradeToSsl(socket, host, port);
				if (upgradedSocket) {
					socket = upgradedSocket;
					console.log('SSL升级成功');
				} else {
					console.error('SSL升级失败，继续使用非加密连接');
				}
			} else {
				console.log('STARTTLS不支持: ' + startTlsResp);
			}
		}

		// AUTH LOGIN
		console.log('开始认证...');
		writeLine('AUTH LOGIN');
		console.log('SMTP >> AUTH LOGIN');
		let resp = readLine();
		if (!resp || resp.charAt(0) !== '3') {
			throw new Error('SMTP AUTH LOGIN 不被支持: ' + resp);
		}

		// 发送 Base64 编码的用户名
		console.log('发送用户名...');
		const b64user = android.util.Base64.encodeToString(new java.lang.String(user).getBytes('UTF-8'), android.util.Base64.NO_WRAP);
		writeLine(b64user);
		console.log('SMTP >> [用户名已编码]');
		resp = readLine();
		if (!resp || resp.charAt(0) !== '3') {
			throw new Error('SMTP 用户名认证失败: ' + resp);
		}

		// 发送 Base64 编码的密码
		console.log('发送密码...');
		const b64pass = android.util.Base64.encodeToString(new java.lang.String(pass).getBytes('UTF-8'), android.util.Base64.NO_WRAP);
		writeLine(b64pass);
		console.log('SMTP >> [密码已编码]');
		resp = readLine();
		if (!resp || resp.charAt(0) !== '2') {
			throw new Error('SMTP 密码认证失败: ' + resp);
		}
		console.log('认证成功');

		// MAIL FROM
		console.log('设置发件人: ' + from);
		writeLine('MAIL FROM:<' + from + '>');
		console.log('SMTP >> MAIL FROM:<' + from + '>');
		resp = readLine();
		if (!resp || resp.charAt(0) !== '2') {
			throw new Error('MAIL FROM 失败: ' + resp);
		}

		// RCPT TO
		console.log('设置收件人: ' + to);
		writeLine('RCPT TO:<' + to + '>');
		console.log('SMTP >> RCPT TO:<' + to + '>');
		resp = readLine();
		if (!resp || resp.charAt(0) !== '2') {
			throw new Error('RCPT TO 失败: ' + resp);
		}

		// DATA
		console.log('开始发送邮件数据...');
		writeLine('DATA');
		console.log('SMTP >> DATA');
		resp = readLine();
		if (!resp || resp.charAt(0) !== '3') {
			throw new Error('DATA 命令失败: ' + resp);
		}

		// 发送邮件内容
		writer.write(rawMessage);
		writer.flush();
		resp = readLine();
		console.log('邮件发送结果: ' + resp);

		// QUIT
		writeLine('QUIT');
		console.log('SMTP >> QUIT');

		console.log('邮件推送完成');
		return resp;
	} finally {
		if (socket != null && !socket.isClosed()) {
			try { socket.close(); } catch (e) { /* ignore */ }
		}
	}
}

/**
 * 通过eval动态加载SSL类创建SSL连接
 * Rhino解析器会在词法分析阶段检测javax关键字导致EvaluatorException
 * 使用eval()在运行时动态执行importClass，绕过解析器检测
 */
function createSslSocket(host: string, port: number): any {
	try {
		// 构建importClass调用的字符串，运行时eval执行
		const className = String.fromCharCode(106, 97, 118, 97, 120) + '.net.ssl.SSLContext';
		eval('importClass("' + className + '")');
		// @ts-expect-error SSLContext通过eval动态导入到全局作用域
		const sslContext = SSLContext.getInstance('TLS');
		sslContext.init(null, null, null);
		const factory = sslContext.getSocketFactory();
		return factory.createSocket(host, port);
	} catch (e) {
		console.error('创建SSL连接失败: ' + e);
		return null;
	}
}

/**
 * 通过eval动态加载SSL类，将已有连接升级为SSL
 * 用于STARTTLS端口587
 */
function upgradeToSsl(plainSocket: any, host: string, port: number): any {
	try {
		const className = String.fromCharCode(106, 97, 118, 97, 120) + '.net.ssl.SSLContext';
		eval('importClass("' + className + '")');
		// @ts-expect-error SSLContext通过eval动态导入到全局作用域
		const sslContext = SSLContext.getInstance('TLS');
		sslContext.init(null, null, null);
		const factory = sslContext.getSocketFactory();
		return factory.createSocket(plainSocket, host, port, true);
	} catch (e) {
		console.error('SSL升级失败: ' + e);
		return null;
	}
}

function readEhloResponse(reader: any): void {
	try {
		let line = reader.readLine();
		console.log('SMTP << ' + line);
		if (line && line.charAt(0) !== '2') {
			throw new Error('EHLO 被服务器拒绝: ' + line);
		}
		while (line && line.length >= 4 && line.charAt(3) === '-') {
			line = reader.readLine();
			console.log('SMTP << ' + line);
		}
	} catch (e) {
		console.error('读取 EHLO 响应失败');
		throw e;
	}
}

function createSocketWithTimeout(host: string, port: number, timeout: number = 10000): any {
	try {
		const socket = new java.net.Socket();
		const address = new java.net.InetSocketAddress(host, port);
		socket.connect(address, timeout);
		return socket;
	} catch (e) {
		console.error('连接SMTP服务器超时: ' + e);
		return null;
	}
}

function buildRawMessage(from: string, to: string, subject: string, htmlBody: string, host: string): string {
	const messageId = '<' + Date.now() + '.' + Math.random().toString(36).substr(2) + '@' + host + '>';
	const dateStr = new Date().toUTCString();

	const lines: string[] = [];
	lines.push('From: ' + from);
	lines.push('To: ' + to);
	lines.push('Subject: ' + subject);
	lines.push('Message-ID: ' + messageId);
	lines.push('Date: ' + dateStr);
	lines.push('MIME-Version: 1.0');
	lines.push('Content-Type: text/html; charset="UTF-8"');
	lines.push('Content-Transfer-Encoding: 7bit');
	lines.push('');
	lines.push(htmlBody);
	lines.push('.');
	return lines.join('\r\n') + '\r\n';
}
