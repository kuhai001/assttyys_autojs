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
	},
	{ // 姑姑皮肤碎片弹窗
		desc: [1280, 720,
			[
				[center, 660, 245, 0xfffefb],
				[center, 644, 290, 0xf7f7f7],
				[center, 673, 273, 0x222022],
				[center, 611, 265, 0x26272c],
				[center, 641, 323, 0x222430],
				[center, 614, 227, 0xe7e3ef]]
		],
		oper: [
			[center, 1280, 720, 832, 459, 1111, 620, 500],
		]
	},
	{
		//  轻衫染获得奖励
		desc: [1280, 720,
			[
				[center, 323, 234, 0x634223],
				[center, 949, 239, 0x4f361e],
				[center, 917, 461, 0x987449],
				[center, 366, 458, 0x977449],
				[center, 523, 234, 0xdcc884]
			]
		],
		oper: [
			[center, 1280, 720, 1054, 533, 1160, 662, 1000],
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
	},
	{
		// 火照归途
		desc: [1280, 720,
			[
				[center, 472, 611, 0x418ece],
				[center, 442, 611, 0xbedbf5],
				[center, 466, 598, 0x5294d1],
				[center, 550, 612, 0x702b0d],
				[center, 719, 603, 0x3c0306],
				[center, 763, 591, 0x6c2908]
			]
		],
		oper: [
			[center, 1280, 720, 426, 604, 731, 658, 1000],
		],
	},
	{
		// 魔法小樱升级碎片
		desc: [1280, 720,
			[
				[left, 72, 651, 0xba9566],
				[center, 611, 279, 0xd5b98a],
				[center, 643, 301, 0xe29a6a],
				[center, 670, 303, 0xfdfc93]
			]
		],
		oper: [
			[center, 1280, 720, 426, 604, 731, 658, 1000],
		],
	}
	]
}