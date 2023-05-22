import { IFuncOrigin, IFuncOperatorOrigin, IFuncOperator } from '@/interface/IFunc';
import { Script } from '@/system/script';
const normal = -1; //定义常量
const left = 0;
const center = 1;
const right = 2;

export class Func050 implements IFuncOrigin {
	id = 50;
	name = '开启BUFF';
	config = [{
		desc: '开启后切换方案',
		config: [{
			name: 'scheme_switch_enabled',
			desc: '是否启用',
			type: 'switch',
			default: true,
		}, {
			name: 'next_scheme',
			desc: '下一个方案',
			type: 'scheme',
			default: '个人探索',
		}]
	}, {
		desc: '选择开启BUFF的类型',
		config: [{
			name: 'buff_type',
			desc: '开启BUFF类型',
			type: 'list',
			data: ['觉醒', '御魂', '金币', '经验'],
			default: '经验'
		}]
	}];
	operator: IFuncOperatorOrigin[] = [{
		desc: [1280, 720,
			[
				[center, 352, 526, 0x9c977e],
				[center, 933, 526, 0x747865],
				[center, 848, 528, 0xb89e7c],
				[center, 497, 522, 0x9e9d8c],
				[center, 363, 120, 0xd4c4bb],
				[center, 913, 121, 0xd8c7bf],
				[center, 878, 124, 0xdfd4cb]
			]
		],
		oper: [
			[center, 1280, 720, 0, 0, 855 - 782, 431 - 415, 2000],
			[center, 1280, 720, 937, 272, 1160, 531, 500],
			[center, 1280, 720, 431, 413, 743, 437, -1], // 翻页开始区域
			[center, 1280, 720, 434, 354, 749, 378, -1], // 翻页结束区域
		]
	}];
	operatorFunc(thisScript: Script, thisOperator: IFuncOperator[]): boolean {
		if (thisScript.oper({
			name: 'BUFF界面',
			operator: [{
				desc: thisOperator[0].desc
			}]
		})) {
			const thisconf = thisScript.scheme.config['50'];
			let point = thisScript.findMultiColor(`关闭的BUFF_${thisconf.buff_type}`) || null
			if (point) {
				thisScript.helperBridge.regionClick([
					[point.x, point.y, point.x + thisOperator[0].oper[0][2], point.y + thisOperator[0].oper[0][3], 600]
				], thisScript.scheme.commonConfig.afterClickDelayRandom);
				return true;
			} else {
				// 没有找到的话就翻页
				if (!thisScript.global.buff_enable_page_flag) {
					thisScript.global.buff_enable_page_flag = true;
					thisScript.helperBridge.regionBezierSwipe(thisOperator[0].oper[2], thisOperator[0].oper[3], [1200, 1600], 200);
					return true;
				}

				// 再没找到就切换方案或结束
				thisScript.helperBridge.regionClick([thisOperator[0].oper[1]], thisScript.scheme.commonConfig.afterClickDelayRandom);
				if (thisconf && thisconf.scheme_switch_enabled) {
					thisScript.setCurrentScheme(thisconf.next_scheme as string);
					thisScript.myToast(`切换方案为[${thisconf.next_scheme}]`);
					thisScript.rerun();
				} else {
					thisScript.doOspPush(thisScript, { text: `[${thisScript.schemeHistory.map(item => item.schemeName).join('、')}]已停止，请查看。`, before() { thisScript.myToast('脚本即将停止，正在上传数据'); } });
					thisScript.stop();
				}
				return true;
			}
		}
	}
}