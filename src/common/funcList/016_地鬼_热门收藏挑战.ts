import { Script } from '@/system/script';
import { IFuncOrigin, IFuncOperatorOrigin, IFuncOperator } from '@/interface/IFunc';
// const normal = -1; //定义常量
const left = 0;		// 锚点为左侧（坐标按左对齐计算）
const center = 1;	// 锚点为居中（坐标按中心对齐计算）
const right = 2;	// 锚点为右侧（坐标按右对齐计算）

export class Func016 implements IFuncOrigin {
	id = 16;	// 功能编号
	name = '地鬼_热门收藏挑战';	// 功能名称
	desc = '在地域鬼王界面时，自动选热门或收藏进行挑战';	// 功能描述
	config = [{	// 功能配置项
		desc: '结束后切换方案',	// 配置分组描述：打完所有鬼王后切换方案
		config: [{
			name: 'next_scheme',	// 配置名：下一个方案
			desc: '先切换至返回庭院，再由返回庭院切换至配置的目标方案',	// 配置说明
			type: 'scheme',	// 配置类型：方案选择器
			default: '__停止脚本__',	// 默认值：停止脚本
		}]
	}, {
		desc: '切换模式',	// 配置分组描述：选择挑战模式
		config: [{
			name: 'hot_star_type',	// 配置名：热门/收藏
			desc: '选择热门还是收藏',	// 配置说明
			type: 'list',	// 配置类型：下拉列表
			data: ['热门', '收藏'],	// 可选值
			default: '热门',	// 默认选择热门
		}]
	}];
	// operator 数组中的每一项代表一个界面状态：
	//   desc: 用于识别当前界面的取色描述 [屏幕宽, 屏幕高, [[锚点, x, y, 颜色值], ...]]
	//   oper: 该界面下的点击/滑动操作 [锚点, 屏幕宽, 屏幕高, x1, y1, x2, y2, 操作前等待时间ms]
	operator: IFuncOperatorOrigin[] = [{
		// 0 地鬼首页
		desc: [1280, 720,	// 屏幕分辨率
			[
				[left, 69, 670, 0xaf544c],	// 底部某处的红色特征点
				[right, 1157, 49, 0xfbf5e5],	// 右上角区域特征点
				[right, 1137, 39, 0xce737b],	// 右上角区域特征点
				[right, 1206, 42, 0xc55149],	// 右上角区域特征点
				[right, 1197, 532, 0xf4f4f4],	// 右侧中部特征点
				[left, 44, 36, 0xf7eaad],	// 左上角特征点
			]
		],
		oper: [
			[right, 1280, 720, 1116, 34, 1148, 62, 1000], // 0 筛选按钮区域
			[right, 1280, 720, 1187, 228, 1240, 345, 500], // 1 热门标签区域
			[right, 1280, 720, 1093, 235, 1136, 282, 500], // 2 第1个鬼王（点击挑战入口）
			[right, 1280, 720, 1096, 395, 1139, 447, 500], // 3 第2个鬼王
			[right, 1280, 720, 1094, 547, 1140, 592, 500], // 4 第3个鬼王
			[left, 1280, 720, 0, 0, 13, 19, 0], // 5 难度把手的起点大小区域（左上角滑块）
			[left, 1280, 720, 47, 234, 120, 344, 0], // 6 难度把手滑动停止区域（普通难度位置）
			[left, 1280, 720, 1104, 505, 1207, 583, 0], // 7 挑战按钮区域
			[right, 1280, 720, 1186, 582, 1237, 702, 500], // 8 收藏标签区域
		]
	}, {
		// 1 地鬼挑战页面（挑战弹窗）
		desc: [1280, 720,	// 屏幕分辨率
			[
				[left, 137, 216, 0xddd6ce],	// 左侧浅色特征点
				[left, 181, 631, 0xd7cdc6],	// 左下特征点
				[right, 1209, 43, 0xe8d4cf],	// 右上特征点
				[right, 1204, 530, 0xded3bd],	// 右侧特征点
				[right, 1087, 624, 0xebe5ce],	// 右下特征点
				[right, 1206, 500, 0x954d34],	// 右侧深色特征点
			]
		],
		oper: [
			[center, 1280, 720, 1195, 30, 1226, 59, 500]	//	关闭地鬼挑战弹窗按钮（右上角关闭按钮）
		]
	}, {
		// 2 地鬼列表页（检测 3 个鬼王是否已打过）
		desc: [1280, 720,	// 屏幕分辨率
			[
				[left, 202, 388, 0x161211], // 第0个（第一个鬼王）未打：该坐标是深色，说明没被盖住
				[left, 308, 386, 0x161211], // 第1个（第二个鬼王）未打
				[left, 427, 387, 0x161211], // 第2个（第三个鬼王）未打 // 该坐标后续可能还会有问题，需要兼容未开启、还有式神头像可能没有盖住这个点的情况
			]
		],
		oper: [
			[left, 1280, 720, 38, 409, 88, 430, 800], // 今日挑战按钮区域
			[left, 1280, 720, 51, 36, 95, 85, 1200], // 左上角的返回按钮
		]
	}, {
		// 3 探索地图界面
		desc: '探索地图界面',	// 该界面只用于点击，不做颜色识别
		oper: [
			[center, 1280, 720, 644, 646, 686, 681, 1000],	// 点击地鬼入口
		]
	}, {
		// 4 地鬼挑战页面_极（极难模式弹窗）
		desc: [1280, 720,	// 屏幕分辨率
			[
				[center, 447, 138, 0x994a4e],	// 极字特征点
				[center, 475, 94, 0xd9d1c9],	// 顶部浅色特征点
				[right, 1155, 581, 0xefd2a2],	// 右下金色特征点
				[left, 191, 612, 0xdcd5cd],	// 左下浅色特征点
				[right, 1209, 44, 0xe8d4cf],	// 右上浅色特征点
				[center, 363, 86, 0xd6cdc5],	// 上部浅色特征点
				[left, 298, 117, 0x3b425e],	// 左上深蓝特征点
			]
		],
		oper: [
			[center, 1280, 720, 279, 121, 308, 153, 1000], //	极难模式切回普通难度的按钮
		]
	}, {
		// 5 地鬼筛选界面
		desc: [	// 屏幕分辨率
			1280, 720,
			[
				[left, 59, 56, 0x795935],	// 左上棕色特征点
				[right, 1243, 40, 0x803b37],	// 右上深红特征点
				[right, 1157, 48, 0xb2aea2],	// 右上灰白特征点
				[right, 1071, 123, 0xd69a87],	// 右侧粉色特征点
				[right, 913, 147, 0xf4c875],	// 右侧黄色特征点
			]
		],
		oper: [
			[center, 1280, 720, 158, 118, 821, 626, 1000],	// 点击筛选面板中央（关闭筛选/确认区域）
		]
	}];
	// 主逻辑函数：判断当前所在界面并执行对应的挑战操作
	operatorFunc(thisScript: Script, thisOperator: IFuncOperator[]): boolean {
		// 情况1：当前在探索地图界面，直接点击地鬼入口进入
		if (thisScript.oper({
			id: 16,
			name: '探索界面',
			operator: [thisOperator[3]]
		})) {
			return true;
		}

		// 情况2：当前在地鬼挑战弹窗，点击关闭按钮关掉弹窗
		if (thisScript.oper({
			id: 16,
			name: '地鬼_挑战_关闭',
			operator: [thisOperator[1]]
		})) {
			return true;
		}

		// 情况3：当前在地鬼筛选界面，点击面板中央将其关闭
		if (thisScript.oper({
			id: 16,
			name: '地鬼_筛选界面_关闭',
			operator: [thisOperator[5]]
		})) {
			return true;
		}

		// 情况4：当前在地鬼首页，执行主要的挑战逻辑
		if (thisScript.oper({
			id: 16,
			name: '地鬼_热门挑战',
			operator: [{
				desc: thisOperator[0].desc,	// 复用首页的取色描述来识别地鬼首页
				oper: [thisOperator[2].oper[0]]	// 点击"今日挑战"
			}]
		}, 2000)) { // 加了个两秒的重检测时间，防止退出来后立即判断失败
			thisScript.keepScreen();	// 锁定当前屏幕画面（截图留作后续取色，加快识别速度）
			thisScript.global.dgCurNum = -1;	// 记录当前要打的鬼王序号，默认-1表示都不符合
			// 依次检测第0、1、2个鬼王是否未打过（取色点仍为深色说明未打）
			for (let i = 0; i < thisOperator[2].desc.length; i++) {
				if (thisScript.oper({
					id: 16,
					name: `地鬼_检测第${i}个未打`,
					operator: [{
						desc: [thisOperator[2].desc[i] as [number, number, number, number]]
					}]
				})) {
					thisScript.global.dgCurNum = i;	// 记录第一个未打的鬼王序号
					break;
				}
			}

			// 三个鬼王都打过了
			if (thisScript.global.dgCurNum === -1) {
				thisScript.regionClick([thisOperator[2].oper[1]]);	// 点击左上角返回按钮
				// 设置下一个方案名，供"返回庭院"方案切换使用
				thisScript.superGlobal.next_scheme_name = thisScript?.scheme?.config['16']?.next_scheme as string;
				thisScript.rerun('返回庭院');	// 重新运行"返回庭院"方案
				return;	// 结束本次逻辑
			}
			// 根据未打的鬼王序号选择对应的点击区域（2/3/4分别对应第1/2/3个）
			const clickOper = thisOperator[0].oper[2 + thisScript.global.dgCurNum];
			let hot_star_oper = thisOperator[0].oper[1];	// 默认点击"热门"标签
			if (thisScript?.scheme?.config['16']?.hot_star_type === '收藏') {
				hot_star_oper = thisOperator[0].oper[8];	// 配置为收藏时改点"收藏"标签
			}
			// regionClick：按顺序依次点击传入的各个区域，每点一次随机停顿以模拟真人操作。
			// 这里通过"点击筛选按钮 -> 点击热门/收藏标签 -> 点击对应鬼王"三步操作进入挑战界面。
			thisScript.regionClick([
				thisOperator[0].oper[0],	// 第 0 号界面（地鬼首页）的"筛选"按钮区域
				hot_star_oper,	// "热门"或"收藏"标签区域（由配置 hot_star_type 决定，默认热门）
				clickOper,	// 当前要挑战的鬼王区域（根据未打的鬼王序号自动从 oper[2]/[3]/[4] 中选取）
			]);
			// sleep(1500);

			// 如果进入了"极难"挑战弹窗，点击按钮切换回普通难度
			if (thisScript.compareColorLoop(thisOperator[4].desc, 3000)) {
				thisScript.regionClick(thisOperator[4].oper);
			}

			// 如果进入了挑战确认弹窗
			if (thisScript.compareColorLoop(thisOperator[1].desc, 3000)) {
				sleep(1500);	// 等待弹窗动画
				thisScript.keepScreen(true);	// 锁定当前屏幕
				// 查找"难度把手"（难度滑块）位置，将极难难度通过滑块滑动调整到普通难度
				const point = thisScript.findMultiColor('地鬼_难度把手');
				if (point) {
					const beginRegion = [	// 以把手为中心构造滑动起始区域
						point.x,
						point.y,
						point.x + thisOperator[0].oper[5][2],
						point.y + thisOperator[0].oper[5][3],
					];
					// 从把手位置滑动到普通难度停止区域，实现难度切换
					thisScript.regionSwipe(beginRegion, thisOperator[0].oper[6], [100, 300], 200);
				}
				thisScript.regionClick([thisOperator[0].oper[7]]);	// 点击"挑战"按钮
				thisScript.myToast(`地鬼_热门挑战_第${thisScript.global.dgCurNum + 1}次`);	// 弹提示当前挑战次数
				sleep(1500);	// 等待进入战斗
				return true;
			}
			return true;
		}
	}
}
