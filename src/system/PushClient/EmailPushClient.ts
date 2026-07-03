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
		const {
			email_smtp_host,
			email_smtp_port,
			email_smtp_ssl,
			email_smtp_user,
			email_smtp_pass,
			email_from,
			email_to,
			msgPush_prefix,
		} = config;

		if (!email_smtp_host || !email_smtp_user || !email_smtp_pass || !email_from || !email_to) {
			throw new Error('邮件推送配置不完整，请检查 SMTP 配置');
		}

		const host = email_smtp_host as string;
		const port = parseInt(email_smtp_port as string) || 465;
		const useSSL = email_smtp_ssl !== false && email_smtp_ssl !== 'false';
		const user = email_smtp_user as string;
		const pass = email_smtp_pass as string;
		const from = email_from as string;
		const to = email_to as string;
		const prefix = (msgPush_prefix || '[assttyys]') as string;

		const firstText = data.find(item => item.type === 'text')?.data || '';
		const subject = `${prefix} ${firstText}`;

		const htmlParts: string[] = [];
		data.forEach(item => {
			if (item.type === 'text') {
				htmlParts.push(`<p>${escapeHtml(item.data)}</p>`);
			} else if (item.type === 'image') {
				const b64 = bmpToBase64(scaleBmp(item.data, 0.1));
				htmlParts.push(`<p><img src="data:image/png;base64,${b64}" /></p>`);
			}
		});

		return sendSmtpMail({
			host,
			port,
			useSSL,
			user,
			pass,
			from,
			to,
			subject,
			htmlBody: htmlParts.join('\n'),
		});
	}
}

function escapeHtml(str: string): string {
	return str
		.replace(/&/g, '&amp;')
		.replace(/</g, '&lt;')
		.replace(/>/g, '&gt;')
		.replace(/"/g, '&quot;');
}

function sendSmtpMail(options: {
	host: string,
	port: number,
	useSSL: boolean,
	user: string,
	pass: string,
	from: string,
	to: string,
	subject: string,
	htmlBody: string,
}): any {
	const { host, port, useSSL, user, pass, from, to, subject, htmlBody } = options;

	const rawMessage = buildRawMessage(from, to, subject, htmlBody, host);

	let socket: any = null;
	try {
		if (useSSL) {
			// @ts-expect-error Java interop
			const sslContext = javax.net.ssl.SSLContext.getInstance('TLS');
			sslContext.init(null, null, null);
			const factory = sslContext.getSocketFactory();
			socket = factory.createSocket(host, port);
		} else {
			socket = new java.net.Socket(host, port);
		}
		socket.setSoTimeout(15000);

		const reader = new java.io.BufferedReader(new java.io.InputStreamReader(socket.getInputStream(), 'UTF-8'));
		const writer = new java.io.BufferedWriter(new java.io.OutputStreamWriter(socket.getOutputStream(), 'UTF-8'));

		const readLine = (): string => {
			const line = reader.readLine();
			console.log(`SMTP << ${line}`);
			return line;
		};

		const sendLine = (line: string): void => {
			console.log(`SMTP >> ${line.substring(0, 80)}`);
			writer.write(line + '\r\n');
			writer.flush();
		};

		// 读取服务器欢迎信息
		readLine();

		// EHLO
		sendLine(`EHLO localhost`);
		readEhloResponse(reader);

		// AUTH LOGIN
		sendLine('AUTH LOGIN');
		let resp = readLine();
		if (!resp || resp.charAt(0) !== '3') {
			throw new Error(`SMTP AUTH LOGIN 不被支持: ${resp}`);
		}

		// 发送 Base64 编码的用户名
		// @ts-expect-error Java interop
		const b64user = android.util.Base64.encodeToString(user.getBytes('UTF-8'), android.util.Base64.NO_WRAP);
		sendLine(b64user);
		resp = readLine();
		if (!resp || resp.charAt(0) !== '3') {
			throw new Error(`SMTP 用户名认证失败: ${resp}`);
		}

		// 发送 Base64 编码的密码
		// @ts-expect-error Java interop
		const b64pass = android.util.Base64.encodeToString(pass.getBytes('UTF-8'), android.util.Base64.NO_WRAP);
		sendLine(b64pass);
		resp = readLine();
		if (!resp || resp.charAt(0) !== '2') {
			throw new Error(`SMTP 密码认证失败: ${resp}`);
		}

		// MAIL FROM
		sendLine(`MAIL FROM:<${from}>`);
		resp = readLine();
		if (!resp || resp.charAt(0) !== '2') {
			throw new Error(`MAIL FROM 失败: ${resp}`);
		}

		// RCPT TO
		sendLine(`RCPT TO:<${to}>`);
		resp = readLine();
		if (!resp || resp.charAt(0) !== '2') {
			throw new Error(`RCPT TO 失败: ${resp}`);
		}

		// DATA
		sendLine('DATA');
		resp = readLine();
		if (!resp || resp.charAt(0) !== '3') {
			throw new Error(`DATA 命令失败: ${resp}`);
		}

		// 发送邮件内容
		writer.write(rawMessage);
		writer.flush();
		resp = readLine();
		console.log(`SMTP << ${resp}`);

		// QUIT
		sendLine('QUIT');

		return resp;
	} finally {
		if (socket && !socket.isClosed()) {
			try { socket.close(); } catch (e) { /* ignore */ }
		}
	}
}

function readEhloResponse(reader: any): void {
	try {
		let line = reader.readLine();
		console.log(`SMTP << ${line}`);
		while (line && line.length >= 4 && line.charAt(3) === '-') {
			line = reader.readLine();
			console.log(`SMTP << ${line}`);
		}
	} catch (e) {
		console.error('读取 EHLO 响应失败');
	}
}

function buildRawMessage(from: string, to: string, subject: string, htmlBody: string, host: string): string {
	const messageId = `<${Date.now()}.${Math.random().toString(36).substr(2)}@${host}>`;
	const dateStr = new Date().toUTCString();

	return [
		`From: ${from}`,
		`To: ${to}`,
		`Subject: ${subject}`,
		`Message-ID: ${messageId}`,
		`Date: ${dateStr}`,
		'MIME-Version: 1.0',
		'Content-Type: text/html; charset="UTF-8"',
		'Content-Transfer-Encoding: 7bit',
		'',
		htmlBody,
		'\r\n.',
	].join('\r\n');
}
