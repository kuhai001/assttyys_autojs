import { IFuncOrigin, IFuncOperatorOrigin } from '@/interface/IFunc';

// const normal = -1; //定义常量
const left = 0;
const center = 1;
// const right = 2;

export class Func024 implements IFuncOrigin {
	id = 24;
	name = '获得奖励确认';
	operator: IFuncOperatorOrigin[] = [{ // 奖励只有1排
		desc: [1280, 720,
			[
				[center, 424, 328, 0xbfa88f],
				[center, 408, 237, 0x382a1c],
				[center, 869, 327, 0xb79e86],
				[center, 926, 386, 0x825e34],
				[center, 371, 395, 0x8b673e]
			]
		],
		oper: [
			[left, 1280, 720, 69, 171, 170, 452, 500]
		]
	}, { // 奖励有2排
		desc: [1280, 720,
			[
				[center, 401, 210, 0x39291d],
				[center, 828, 208, 0x3c2a20],
				[center, 917, 418, 0x8e6a41],
				[center, 370, 430, 0x8d6940],
				[center, 619, 254, 0xcbb59e]]
		],
		oper: [
			[left, 1280, 720, 69, 171, 170, 452, 500]
		]
	}, { // 奖励一排且只有5个的时候
		desc: [1280, 720,
			[
				[center, 379, 241, 0x38291d],
				[center, 897, 242, 0x382a1d],
				[center, 959, 237, 0x5e3d22],
				[center, 922, 426, 0x88653c],
				[center, 364, 419, 0x8d693f],
				[center, 671, 239, 0xeadca5],
				[center, 863, 435, 0xbaa289],
			]
		],
		oper: [
			[center, 1280, 720, 1042, 176, 1187, 585, 500],
		]
	}, { // 雪御前boss
		desc: [1280, 720,
			[
				[center, 1220, 38, 0xe8d3d0],
				[center, 1212, 31, 0xe9d4d1],
				[center, 1229, 33, 0xe7d3ce],
				[center, 1221, 26, 0xa66090],
				[center, 1222, 54, 0xad5796],
			]
		],
		oper: [
			[center, 1280, 720, 1215, 32, 1230, 50, 1000],
		]
	},
	{
		// 宠物奖励确认
		desc: [1280, 720,
			[
				[center, 329, 188, 0x674524],
				[center, 360, 265, 0xb5a7a1],
				[center, 393, 481, 0xa25030],
				[center, 923, 506, 0x87643b],
				[center, 946, 270, 0xad9f9c]
			]
		],
		oper: [
			[center, 1280, 720, 1054, 533, 1160, 662, 1000],
		],
	}
	]
}
