import funcList from './funcListIndex';
import commonConfigArr from './commonConfig';
import { IScheme } from '@/interface/IScheme';
import { merge } from './tool';

const SchemeList: IScheme[] = [
	{
		id: 1,
		schemeName: '通用准备退出',
		star: true,
		list: [0, 1, 2, 3],
	},
	{
		id: 2,
		schemeName: '组队乘客',
		star: true,
		list: [0, 1, 2, 3, 4],
	},
	{
		id: 3,
		schemeName: '组队司机',
		star: true,
		list: [0, 1, 2, 3, 5],
	},
	{
		id: 4,
		schemeName: '个人御魂',
		star: false,
		list: [0, 1, 2, 3, 6],
	},
	{
		id: 5,
		schemeName: '个人突破',
		list: [0, 1, 2, 3, 7, 10, 8, 9, 11],
		config: {
			'8': {
				count: '2',
				afterCountOper: '停止脚本',
				type: '个人突破',
			},
			'10': {
				type: '个人突破',
			},
		},
	},
	{
		id: 5,
		schemeName: '个人突破_降级',
		star: true,
		list: [0, 1, 2, 3, 8, 9, 10, 11],
		config: {
			'0': {
				jspd_enabled_1: true,
				jspd_times_1: 27,
			},
			'1': {
				exitBeforeReady: true,
			},
			'8': {
				count: '2',
				afterCountOper: '停止脚本',
				type: '个人突破',
			},
			'9': {
				priority: '0->1->2->3->4->5',
			},
			'10': {
				type: '个人突破',
			},
		},
	},
	{
		id: 5,
		schemeName: '个突_9退4_进攻',
		groupNames: ['个突9退4'],
		star: true,
		list: [509, 510, 511, 51, 0, 1, 2, 3, 8, 9, 10],
		config: {
			'0': {
				after_operation: '切换方案',
				next_scheme: '个突_9退4_退出',
			},
			'3': { type: '关闭' },
			'8': {
				count: '2',
				afterCountOper: '切换方案',
				type: '个人突破',
				next_scheme: '寮突破'
			},
			'9': {
				after_operation: '切换方案',
			},
			'10': { type: '个人突破' },
			'51': {
				greenType: '自定义坐标',
				'preSearch': true
			},
		},
		commonConfig: {
			// 通用参数
			multiColorSimilar: 97,
		},
	},
	{
		id: 5,
		schemeName: '个突_9退4_退出',
		groupNames: ['个突9退4'],
		list: [0, 1, 2, 3, 8, 9, 10],
		config: {
			'0': {
				jspd_enabled_2: true,
				jspd_times_2: '4',
				after_operation: '切换方案',
				next_scheme: '__返回上个方案__',
			},
			'1': { exitBeforeReady: true },
			'2': { rechallenge: true },
			'8': {
				count: '2',
				afterCountOper: '九退四_切换方案',
				next_scheme: '__返回上个方案__',
				type: '个人突破',
			},
			'10': { type: '个人突破' },
		},
		commonConfig: {
			// 通用参数
			multiColorSimilar: 97,
		},
	},
	{
		id: 6,
		schemeName: '寮突破',
		star: true,
		list: [0, 1, 2, 3, 8, 9, 10, 12, 29],
		config: {
			'8': {
				count: '2',
				afterCountOper: '关闭界面',
				type: '寮突破',
			},
			'10': {
				type: '寮突破',
			},
		},
	},
	{
		id: 7,
		schemeName: '个人探索',
		star: true,
		list: [0, 1, 2, 3, 13, 14, 29],
		config: {
			'0': {
				next_scheme: '关闭BUFF',
			},
		},
	},
	{
		id: 8,
		schemeName: '组队探索_队长',
		star: false,
		list: [0, 1, 2, 3, 5, 14],
	},
	{
		id: 8,
		schemeName: '组队探索_打手',
		star: false,
		list: [0, 1, 2, 3, 4, 25],
	},
	{
		id: 9,
		schemeName: '地鬼日常',
		star: true,
		list: [1, 2, 16, 29],
	},
	{
		id: 10,
		schemeName: '逢魔日常',
		star: true,
		list: [1, 2, 3, 23, 24, 26, 508, 8, 504],
		config: {
			'508': {
				switch_ji_enabled: false,
			},
		},
	},
	{
		id: 11,
		schemeName: '百鬼夜行',
		list: [3, 17],
	},
	{
		id: 12,
		schemeName: '抽厕纸',
		list: [3, 22],
	},
	{
		id: 13,
		groupNames: ['切换方案样例'],
		schemeName: '例_个人探索30次_转个人突破',
		star: true,
		list: [0, 1, 2, 3, 13, 14],
		config: {
			'0': {
				jspd_enabled_2: true,
				jspd_times_2: 30,
				after_operation: '切换方案',
				next_scheme: '例_个人突破_结束后转寮突破',
			},
		},
	},
	{
		id: 14,
		groupNames: ['切换方案样例'],
		schemeName: '例_个人突破_结束后转寮突破',
		star: true,
		list: [0, 1, 2, 3, 7, 10, 8, 9, 11, 25],
		config: {
			'8': {
				count: '2',
				afterCountOper: '切换方案',
				type: '个人突破',
				next_scheme: '寮突破',
			},
			'10': {
				type: '个人突破',
			},
		},
	},
	{
		id: 15,
		schemeName: '组队_自动匹配流程',
		star: true,
		list: [0, 1, 2, 3, 5, 27],
	},
	{
		id: 16,
		schemeName: '继续育成',
		list: [3, 28],
	},
	{
		id: 17,
		schemeName: '斗技',
		list: [0, 1, 2, 3, 30, 307],
	},
	{
		id: 18,
		schemeName: '结界卡_继续合成',
		list: [0, 3, 31],
	},
	{
		id: 19,
		schemeName: '道馆',
		list: [0, 1, 2, 3, 32],
		star: true,
	},
	{
		id: 22,
		schemeName: '秘闻',
		list: [0, 51, 1, 2, 3, 34, 308],
		star: true,
		config: {
			'0': {
				jspd_enabled_1: true,
				jspd_times_1: 15,
			},
			'51': {
				greenType: '自定义文本',
				greenText: '绿标专用',
				preSearch: true,
			},
		},
	},
	{
		id: 23,
		schemeName: '悬赏',
		star: true,
		list: [0, 1, 2, 3, 18, 29],
	},
	{
		id: 24,
		schemeName: '金币妖怪',
		list: [0, 50, 1, 2, 3, 35, 37, 38],
		config: {
			'37': {
				target: '金币妖怪',
				createMode: '创建队伍',
				next_scheme: '关闭BUFF',
			},
			'50': {
				ready_once_buff: true,
				buff_type: '金币',
			}
		},
	},
	{
		id: 25,
		schemeName: '宴会',
		star: true,
		list: [0, 3, 1000, 1001],
		config: {
			'1001': {
				change_shikigami_index: '1',
			},
		},
	},
	{
		id: 26,
		schemeName: '关闭BUFF',
		list: [502, 1, 2, 3, 501, 29, 40],
	},
	{
		id: 27,
		schemeName: '开启BUFF_打探索',
		list: [501, 50],
	},
	{
		id: 29,
		schemeName: '返回庭院',
		list: [3, 503],
		config: {
			'503': {
				after_operation: '停止脚本',
				next_scheme: '通用准备退出',
				afterCountOper: '停止脚本',
			},
		},
	},
	{
		id: 30,
		schemeName: '式神寄养',
		star: true,
		groupNames: ['式神寄养'],
		list: [0, 3, 999, 998, 997, 994, 995],
		config: {
			'0': {
				jspd_times_longtime_nodo: 20,
			},
			'3': {
				type: '关闭',
			},
			'994': {
				count: '6',
				afterCountOper: '停止脚本',
				next_scheme: '通用准备退出',
			},
			'995': {
				maxTimeForwait: '10',
				afterCountOper: '停止脚本',
				isAutoFosterCare: true,
				next_scheme: '__停止脚本__',
			},
			'997': {
				priority: '太鼓6->太鼓5->太鼓4->太鼓3->斗鱼6->斗鱼5->斗鱼4',
			},
		},
	},
	{
		id: 31,
		schemeName: '定时任务-启动游戏-式神寄养',
		star: true,
		groupNames: ['式神寄养'],
		list: [1, 2, 3, 503, 993],
		config: {
			'993': {
				area: '',
				is_shutdown_the_game_before: true,
				next_scheme: '式神寄养',
			},
			'503': {
				afterCountOper: '不进行任何操作',
			},
			'998': {
				change_enchantment_switch: false,
				change_enchantment_type: '太鼓',
			},
		},
	},
	{
		id: 32,
		schemeName: '式神指定寄养',
		star: true,
		groupNames: ['定时任务'],
		list: [3, 999, 998, 996, 994, 995],
		config: {
			'3': {
				type: '关闭',
			},
			'994': {
				count: '3',
				afterCountOper: '停止脚本',
				next_scheme: '通用准备退出',
			},
			'995': {
				next_scheme: '返回庭院',
				afterCountOper: '停止脚本',
				isAutoFosterCare: true,
				maxTimeForwait: '10',
			},
			'996': {
				friendName: '老王',
			},
		},
	},
	{
		id: 33,
		schemeName: '狩猎战',
		list: [0, 1, 2, 3, 507],
	},
	{
		id: 34,
		schemeName: '庭院进入寮每日活动(自动)',
		list: [3, 505, 506, 516],
		config: {
			'506': {
				auto_switch_enabled: true,
				gateOfHades_switch: false,
			},
			'516': {
				count: '10',
				afterCountOper: '停止脚本',
				next_scheme: '通用准备退出',
			},
		},
	},
	{
		id: 36,
		schemeName: '定时任务-启动游戏-每日寮活动',
		star: true,
		groupNames: ['定时任务'],
		list: [1, 2, 3, 503, 993],
		config: {
			'993': {
				area: '',
				is_shutdown_the_game_before: true,
				next_scheme: '庭院进入寮每日活动(自动)',
			},
			'503': {
				afterCountOper: '不进行任何操作',
			},
		},
	},
	{
		id: 39,
		schemeName: '夜行荒河',
		list: [2, 3, 220, 221],
	},
	{
		id: 40,
		schemeName: '定时任务-启动游戏-每日逢魔',
		star: true,
		groupNames: ['定时任务'],
		list: [1, 2, 3, 503, 993],
		config: {
			'993': {
				area: '',
				is_shutdown_the_game_before: true,
				next_scheme: '逢魔日常',
			},
			'503': {
				afterCountOper: '不进行任何操作',
			},
		},
	},
	{
		id: 41,
		schemeName: '实例-更换式神预设御魂',
		groupNames: ['切换方案样例'],
		list: [509, 510, 511],
		config: {
			'510': {
				groupName: '默认分组',
				defaultName: '队伍1',
			},
			'511': {
				count: '3',
				afterCountOper: '退出式神录',
			},
		},
	},
	{
		id: 42,
		schemeName: '阴门挑战',
		list: [0, 1, 2, 3, 5, 513],
	},
	{
		id: 43,
		schemeName: '首领退治',
		list: [0, 1, 2, 3, 512],
	},
	{
		id: 44,
		schemeName: '狭间暗域',
		list: [0, 1, 3, 514, 515],
	},
	{
		id: 45,
		schemeName: '喂猫喂狗',
		list: [3, 517],
	},
	{
		id: 46,
		schemeName: '定时任务-启动游戏-喂猫喂狗',
		star: false,
		groupNames: ['定时任务'],
		list: [1, 2, 3, 503, 993],
		config: {
			'993': {
				area: '',
				is_shutdown_the_game_before: true,
				next_scheme: '喂猫喂狗',
			},
			'503': {
				afterCountOper: '不进行任何操作',
			},
		},
	},
	{
		id: 48,
		groupNames: ['御魂奉纳'],
		schemeName: '奉纳御魂_开始奉纳',
		list: [0, 2, 302],
	},
	{
		id: 49,
		groupNames: ['绘卷进度检测'],
		schemeName: '绘卷进度_检测并提醒',
		list: [0, 304],
		star: true,
	},
	{
		id: 51,
		schemeName: '定时任务-启动游戏-寮突',
		star: true,
		groupNames: ['定时任务'],
		list: [1, 2, 3, 503, 993],
		config: {
			'993': {
				area: '',
				is_shutdown_the_game_before: true,
				next_scheme: '寮突破',
			},
			'503': {
				afterCountOper: '不进行任何操作',
			},
		},
	},
	{
		id: 52,
		schemeName: '定时任务-启动游戏-地鬼',
		star: true,
		groupNames: ['定时任务'],
		list: [1, 2, 3, 503, 993],
		config: {
			'993': {
				area: '',
				is_shutdown_the_game_before: true,
				next_scheme: '地鬼日常',
			},
			'503': {
				afterCountOper: '不进行任何操作',
			},
		},
	},
	{
		id: 53,
		schemeName: '庭院进入寮每日活动(包含阴门)',
		list: [3, 505, 506, 516],
		config: {
			'506': {
				auto_switch_enabled: false,
				gateOfHades_switch: true,
			},
			'516': {
				count: '10',
				afterCountOper: '停止脚本',
				next_scheme: '通用准备退出',
			},
		},
	},
	{
		id: 54,
		schemeName: '庭院进入寮每日活动(不包含阴门)',
		list: [3, 505, 506, 516],
		config: {
			'506': {
				auto_switch_enabled: false,
				gateOfHades_switch: false,
			},
			'516': {
				count: '10',
				afterCountOper: '停止脚本',
				next_scheme: '通用准备退出',
			},
		},
	},
	{
		id: 55,
		schemeName: '定时任务-启动游戏-庭院进入寮每日活动(包含阴门)',
		star: true,
		groupNames: ['定时任务'],
		list: [1, 2, 3, 503, 993],
		config: {
			'993': {
				area: '',
				is_shutdown_the_game_before: true,
				next_scheme: '庭院进入寮每日活动(包含阴门)',
			},
			'503': {
				afterCountOper: '不进行任何操作',
			},
		},
	},
	{
		id: 56,
		schemeName: '定时任务-启动游戏-庭院进入寮每日活动(不包含阴门)',
		star: true,
		groupNames: ['定时任务'],
		list: [1, 2, 3, 503, 993],
		config: {
			'993': {
				area: '',
				is_shutdown_the_game_before: true,
				next_scheme: '庭院进入寮每日活动(不包含阴门)',
			},
			'503': {
				afterCountOper: '不进行任何操作',
			},
		},
	},
	{
		id: 57,
		groupNames: ['组队循环示例'],
		schemeName: '组队队长创建和邀请',
		list: [0, 27, 306],
		commonConfig: {
			colorSimilar: 91,
		},
	},
	{
		id: 58,
		groupNames: ['组队循环示例'],
		schemeName: '组队队员接受邀请',
		list: [4],
		config: {
			'4': {
				exit: true,
			},
		},
	},
	{
		id: 59,
		schemeName: '强化御魂',
		list: [0, 303, 309],
		config: {
			'0': {
				jspd_times_longtime_nodo: '1',
			},
		},
		commonConfig: {
			multiColorSimilar: 93,
		},
		star: true,
	},
	{
		id: 60,
		schemeName: '定时任务-启动游戏-悬赏',
		star: false,
		groupNames: ['定时任务'],
		list: [1, 2, 3, 503, 993],
		config: {
			'993': {
				area: '',
				is_shutdown_the_game_before: true,
				next_scheme: '悬赏',
			},
			'503': {
				afterCountOper: '不进行任何操作',
			},
		},
	},
	{
		id: 61,
		schemeName: '暴食鬼吃经验',
		list: [0, 310],
		config: {
			'0': {
				jspd_times_longtime_nodo: '1',
			},
		},
		star: true,
	},
	{
		id: 62,
		schemeName: '通用活动',
		star: true,
		list: [0, 1, 2, 3, 312],
	},
	{
		id: 63,
		schemeName: '重启模拟器',
		list: [991],
	},
	{
		id: 64,
		schemeName: '每日签到与收取邮件',
		list: [0, 2, 3, 518],
		config: {
			'0': {
				jspd_enabled_longtime_nodo: true,
				jspd_times_longtime_nodo: 1,
			},
		},
	},
	{
		id: 65,
		schemeName: '定时任务-启动游戏-每日签到与收取邮件',
		star: true,
		groupNames: ['定时任务'],
		list: [1, 2, 3, 503, 993],
		config: {
			'993': {
				area: '',
				is_shutdown_the_game_before: true,
				next_scheme: '每日签到与收取邮件',
			},
			'503': {
				afterCountOper: '不进行任何操作',
			},
		},
	},
	{
		id: 66,
		schemeName: '契灵',
		list: [510, 0, 1, 51, 2, 3, 313, 29],
		star: true,
		config: {
			'510': {
				fastMode: true
			}
		}
	}, {
		id: 67,
		schemeName: '庭院进入寮每日活动(狭间)',
		list: [3, 505, 506, 516],
		config: {
			'506': {
				gateOfHades_switch: false,
			},
			'516': {
				count: '2',
				afterCountOper: '不做任何操作',
				next_scheme: '通用准备退出',
			},
		},
	}, {
		id: 68,
		schemeName: '定时任务-启动游戏-庭院进入寮每日活动(狭间)',
		star: true,
		groupNames: ['定时任务'],
		list: [1, 2, 3, 503, 993],
		config: {
			'993': {
				area: '',
				is_shutdown_the_game_before: true,
				next_scheme: '庭院进入寮每日活动(狭间)',
			},
			'503': {
				afterCountOper: '不进行任何操作',
			},
		},
	}, {
		id: 69,
		schemeName: '六道椒图',
		star: true,
		list: [0, 1, 316, 2, 3, 24],
	},
	{
		id: 72,
		schemeName: '经验妖怪',
		list: [0, 50, 1, 2, 3, 35, 37, 38],
		config: {
			'37': {
				target: '经验妖怪',
				createMode: '创建队伍',
				next_scheme: '关闭BUFF',
			},
			'50': {
				ready_once_buff: true,
				buff_type: '经验',
			}
		},
	},
	{
		id: 73,
		schemeName: '年兽',
		list: [0, 1, 2, 3, 35, 37, 38],
		config: {
			'37': {
				target: '年兽',
				createMode: '自动匹配',
				next_scheme: '关闭BUFF',
			},
		},
	},
	{
		id: 74,
		schemeName: '定时任务-启动游戏-金币妖怪',
		star: true,
		groupNames: ['定时任务'],
		list: [1, 2, 3, 503, 993],
		config: {
			'993': {
				area: '',
				is_shutdown_the_game_before: true,
				next_scheme: '金币妖怪',
			},
			'503': {
				afterCountOper: '不进行任何操作',
			},
		},
	},
	{
		id: 75,
		schemeName: '定时任务-启动游戏-经验妖怪',
		star: true,
		groupNames: ['定时任务'],
		list: [1, 2, 3, 503, 993],
		config: {
			'993': {
				area: '',
				is_shutdown_the_game_before: true,
				next_scheme: '经验妖怪',
			},
			'503': {
				afterCountOper: '不进行任何操作',
			},
		},
	},
	{
		id: 76,
		schemeName: '僵尸寮自动攻打道馆',
		list: [311, 32, 519, 505, 51, 0, 1, 2],
		config: {
			'32': {
				after_fail_operation: '再战道馆',
				exit_second: true,
			},
			'51': {
				greenType: '自定义坐标',
				preSearch: true
			},
			'311': {
				redType: '夜溟彼岸花',
				sleepTime: 2.4
			},
			'519': {
				defense: 1,
				coefficient: 5,
				day: true
			},
		},
	}, 
	{
		id: 77,
		schemeName: '宴会筹备',
		list: [0, 2, 520, 29],
	},
	{
		id: 99,
		schemeName: '伊吹之擂',
		list: [0, 3, 24, 99, 100],
	},
	{
		id: 100,
		schemeName: '缘结趣游',
		list: [0, 24, 319],
	}, 
	{
		id: 101,
		schemeName: '对弈竞猜',
		list: [0, 2, 401],
		config: {
			'0': {
				jspd_times_longtime_nodo: '1',
			}
		}
	},
	/*
	1.绘卷
		绘卷_个突_9退4_进攻-500
		绘卷_个突_9退4_退出-501
		绘卷_个人探索30次-502
		绘卷_返回庭院_个人30次探索'-503
		绘卷_返回庭院_突破_9退4_进攻-504
		绘卷_定时任务_个突_9退4_进攻-505
	2.日常
		日常_魂土60次_司机-505
		日常_魂土60次_乘客-506
		日常_寮突破-507
		日常_个突_9退4_进攻-508
		日常_个突_9退4_退出-509
		自定义定时任务-启动游戏-寮突-510
		日常_式神寄养-511
		自定义定时任务-启动游戏-式神寄养-512
		日常_地鬼-513
		自定义定时任务-启动游戏-地鬼-514
		日常_逢魔-515
		自定义定时任务-启动游戏-每日逢魔-516
		日常_每日签到与收取邮件-517
		自定义定时任务-启动游戏-每日签到与收取邮件-518
		日常_悬赏-519
		自定义定时任务-启动游戏-悬赏-520
		日常_金币妖怪-521
		自定义定时任务-启动游戏-金币妖怪-522
	3.周常
		周常_斗技
		周常_秘闻
		周常_器灵
		周常_真蛇
		周常_永生之海
	*/
	{
		id: 500,
		schemeName: '绘卷_个突_9退4_进攻',
		star: true,
		list: [509, 510, 511, 0, 51, 1, 2, 3, 8, 9, 10, 29, 25, 7],
		config: {
			'0': {
				jspd_times_longtime_nodo: '3',
				scheme_switch_enabled: true,
				next_scheme: '绘卷_返回庭院_个人30次探索',
				after_operation: '切换方案'
			},
			'8': {
				afterCountOper: '切换方案',
				next_scheme: '绘卷_返回庭院_个人30次探索'
			},
			'9': {
				scheme_switch_enabled: true,
				next_scheme: '绘卷_个突_9退4_退出'
			},
			'51': {
				greenType: '自定义坐标',
				preSearch: true
			},
			'510': {
				fastMode: true,
				groupNum: '3'
			},
			'7': {
				switch_nineWin: true,

			}
		},
		groupNames: ['绘卷']
	},
	{
		id: 501,
		'schemeName': '绘卷_个突_9退4_退出',
		'star': false,
		'list': [0, 1, 2, 3, 8, 9, 10],
		'config': {
			'0': {
				'jspd_enabled_2': true,
				'jspd_times_2': '4',
				'after_operation': '切换方案',
				'next_scheme': '__返回上个方案__'
			},
			'1': { 'exitBeforeReady': true },
			'2': { 'rechallenge': true },
			'8': {
				'afterCountOper': '九退四_切换方案',
				'next_scheme': '__返回上个方案__'
			}
		},
		'groupNames': ['绘卷']
	},
	{
		id: 502,
		'schemeName': '绘卷_个人探索30次',
		'star': true,
		'list': [0, 15, 1, 2, 3, 13, 14, 509, 510, 511, 29, 12],
		'config': {
			'0': {
				'jspd_times_longtime_nodo': '3',
				'jspd_times_1': '3',
				'jspd_enabled_2': true,
				'jspd_times_2': '30',
				'next_scheme': '绘卷_返回庭院_突破_9退4_进攻',
				'after_operation': '切换方案',
				'after_operation_sleep': '2,5'
			},
			'2': {
				'next_scheme': '__返回上个方案__',
				'mini_area_click': true,
				'fail': true
			},
			'14': { 'type': '无差别' },
			'510': {
				'fastMode': true,
				'groupNum': '4'
			}
		},
		'groupNames': ['绘卷']
	},
	{
		id: 503,
		'schemeName': '绘卷_返回庭院_个人30次探索',
		'star': false,
		'list': [3, 502, 503, 2],
		'config': {
			'503': {
				'scheme_switch_enabled': true,
				'next_scheme': '绘卷_个人探索30次'
			}
		},
		'groupNames': ['绘卷']
	},
	{
		id: 504,
		'schemeName': '绘卷_返回庭院_突破_9退4_进攻',
		'star': false,
		'list': [3, 502, 503, 2],
		'config': {
			'503': {
				'scheme_switch_enabled': true,
				'next_scheme': '绘卷_个突_9退4_进攻'
			}
		},
		'groupNames': ['绘卷']
	},
	{
		id: 505,
		'schemeName': '绘卷_定时任务_启动游戏_绘卷',
		'star': false,
		'list': [1, 2, 3, 503, 993],
		'config': {
			'503': { 'afterCountOper': '不进行任何操作' },
			'993': {
				'is_shutdown_the_game_before': true,
				'next_scheme': '绘卷_个人探索30次'
			}
		},
		'groupNames': ['绘卷']
	},
	{
		id: 505,
		groupNames: ['日常'],
		schemeName: '日常_魂土60次_司机',
		star: true,
		list: [509, 510, 511, 50, 0, 1, 2, 3, 5, 27, 306],
		config: {
			'50': {
				'buff_type': '御魂',
				'ready_once_buff': true
			},
			'0': {
				'jspd_enabled_2': true,
				'jspd_times_2': '60',
				'after_operation': '切换方案',
				'next_scheme': '自定义定时任务-启动游戏-寮突'
			},
			'2': {
				'mini_area_click': true,
			},
			'306': {
				'inviteName': '苦海二号',
			},
			'510': {
				'fastMode': true
			}
		},
	},
	{
		id: 506,
		groupNames: ['日常'],
		schemeName: '日常_魂土60次_乘客',
		list: [509, 510, 511, 50, 0, 4, 3, 2],
		'star': true,
		config: {
			'50': {
				'buff_type': '御魂',
				'ready_once_buff': true
			},
			'0': {
				'jspd_enabled_2': true,
				'jspd_times_2': '60',
				'after_operation': '切换方案',
				'next_scheme': '自定义定时任务-启动游戏-寮突'
			},
			'2': {
				'mini_area_click': true,
			},
			'510': {
				'fastMode': true
			}
		},
	},
	{
		id: 507,
		'schemeName': '日常_寮突破',
		'star': false,
		'list': [0, 51, 1, 2, 3, 8, 9, 10, 12, 29],
		'config': {
			'8': {
				'afterCountOper': '关闭界面',
				'type': '寮突破'
			},
			'10': {
				'type': '寮突破'
			},
			'51': {
				'greenType': '自定义坐标'
			}
		},
		'groupNames': ['日常']
	},
	{
		id: 508,
		'schemeName': '日常_个突_9退4_进攻',
		'star': true,
		'list': [501, 40, 51, 0, 1, 2, 3, 8, 9, 509, 510, 511, 29, 10],
		'config': {
			'501': {
				'once': true
			},
			'40': {
				'afterCountOper': '不进行任何操作'
			},
			'0': {
				'after_operation': '停止脚本',
			},
			'8': {
				'afterCountOper': '切换方案',
				'next_scheme': '日常_寮突破'
			},
			'9': {
				'scheme_switch_enabled': true,
				'after_operation': '切换方案',
				'next_scheme': '日常_个突_9退4_退出'
			},
			'51': {
				'greenType': '自定义坐标',
				'preSearch': true
			},
			'510': {
				'fastMode': true,
				'groupNum': '3'
			}
		},
		'groupNames': ['日常']
	},
	{
		id: 509,
		'schemeName': '日常_个突_9退4_退出',
		'star': false,
		'list': [0, 1, 2, 3, 8, 9, 10],
		'config': {
			'0': {
				'jspd_enabled_2': true,
				'jspd_times_2': '4',
				'after_operation': '切换方案',
				'next_scheme': '__返回上个方案__'
			},
			'1': {
				'exitBeforeReady': true
			},
			'2': {
				'rechallenge': true
			},
			'8': {
				'afterCountOper': '九退四_切换方案',
				'next_scheme': '__返回上个方案__'
			}
		},
		'groupNames': ['日常']
	},
	{
		id: 510,
		'schemeName': '自定义定时任务-启动游戏-寮突',
		'star': true,
		'list': [0, 1, 2, 3, 503, 993],
		'config': {
			'503': {
				'afterCountOper': '不进行任何操作'
			},
			'993': {
				'next_scheme': '日常_个突_9退4_进攻',
				'is_shutdown_the_game_before': true
			}
		},
		'groupNames': ['自定义定时任务']
	},
	{
		id: 511,
		schemeName: '日常_式神寄养',
		groupNames: ['日常'],
		list: [0, 3, 999, 998, 997, 994, 995],
		config: {
			'0': {
				jspd_times_longtime_nodo: 20,
			},
			'3': {
				type: '关闭',
			},
			'994': {
				count: '6',
				afterCountOper: '停止脚本',
				next_scheme: '通用准备退出',
			},
			'995': {
				maxTimeForwait: '10',
				afterCountOper: '停止脚本',
				isAutoFosterCare: true,
				next_scheme: '__停止脚本__',
			},
			'997': {
				priority: '太鼓6->太鼓5->太鼓4->太鼓3->斗鱼6->斗鱼5->斗鱼4',
			},
			'998': {
				change_enchantment_switch: true,
				change_enchantment_type: '太鼓',
			},
		},
	},
	{
		id: 512,
		schemeName: '自定义定时任务-启动游戏-式神寄养',
		star: true,
		groupNames: ['自定义定时任务'],
		list: [0, 1, 2, 3, 503, 993],
		config: {
			'993': {
				area: '',
				is_shutdown_the_game_before: true,
				next_scheme: '日常_式神寄养',
			},
			'503': {
				afterCountOper: '不进行任何操作',
			},
		},
	},
	{
		id: 513,
		schemeName: '日常_地鬼日常',
		list: [509, 510, 511, 40, 0, 1, 2, 3, 16, 29],
		'config': {
			'40': {
				'ready_once_buff': true,
				'afterCountOper': '不进行任何操作'
			},
			'510': {
				'fastMode': true,
				'groupNum': '7'
			}
		},
		groupNames: ['日常'],
	},
	{
		id: 514,
		schemeName: '自定义定时任务-启动游戏-地鬼',
		groupNames: ['自定义定时任务'],
		list: [0, 1, 2, 3, 503, 993],
		config: {
			'993': {
				area: '',
				is_shutdown_the_game_before: true,
				next_scheme: '日常_地鬼日常',
			},
			'503': {
				afterCountOper: '不进行任何操作',
			},
		},
	},
	{
		id: 515,
		schemeName: '日常_逢魔日常',
		list: [509, 510, 511, 40, 0, 1, 2, 3, 23, 24, 26, 508, 8, 504],
		config: {
			'40': {
				'ready_once_buff': true,
				'afterCountOper': '不进行任何操作'
			},
			'510': {
				'fastMode': true,
				'groupNum': '2'
			},
			'508': {
				switch_ji_enabled: false,
			},
		},
		groupNames: ['日常']
	},
	{
		id: 516,
		schemeName: '自定义定时任务-启动游戏-每日逢魔',
		star: true,
		groupNames: ['自定义定时任务'],
		list: [0, 1, 2, 3, 503, 993],
		config: {
			'993': {
				area: '',
				is_shutdown_the_game_before: true,
				next_scheme: '日常_逢魔日常',
			},
			'503': {
				afterCountOper: '不进行任何操作',
			},
		},
	},
	{
		id: 517,
		schemeName: '日常_每日签到与收取邮件',
		list: [0, 2, 3, 518],
		config: {
			'0': {
				jspd_enabled_longtime_nodo: true,
				jspd_times_longtime_nodo: 1,
			},
		},
	},
	{
		id: 518,
		schemeName: '自定义定时任务-启动游戏-每日签到与收取邮件',
		star: true,
		groupNames: ['自定义定时任务'],
		list: [0, 1, 2, 3, 503, 993],
		config: {
			'993': {
				area: '',
				is_shutdown_the_game_before: true,
				next_scheme: '日常_每日签到与收取邮件',
			},
			'503': {
				afterCountOper: '不进行任何操作',
			},
		},
	},
	{
		id: 519,
		schemeName: '日常_悬赏',
		groupNames: ['日常'],
		star: true,
		list: [509, 510, 511, 0, 1, 2, 3, 18, 29],
		config: {
			'40': {
				'ready_once_buff': true,
				'afterCountOper': '不进行任何操作'
			},
			'510': {
				'fastMode': true,
				'groupNum': '7'
			},
		},
	},
	{
		id: 520,
		schemeName: '自定义定时任务-启动游戏-悬赏',
		star: false,
		groupNames: ['定时任务'],
		list: [0, 1, 2, 3, 503, 993],
		config: {
			'993': {
				area: '',
				is_shutdown_the_game_before: true,
				next_scheme: '日常_悬赏',
			},
			'503': {
				afterCountOper: '不进行任何操作',
			},
		},
	},
	{
		id: 521,
		schemeName: '日常_金币妖怪',
		groupNames: ['日常'],
		list: [509, 510, 511, 0, 50, 1, 2, 3, 35, 37, 38],
		config: {
			'37': {
				target: '金币妖怪',
				createMode: '创建队伍',
				next_scheme: '关闭BUFF',
			},
			'50': {
				ready_once_buff: true,
				buff_type: '金币',
			}
		},
	},
	{
		id: 522,
		schemeName: '自定义定时任务-启动游戏-金币妖怪',
		star: true,
		groupNames: ['自定义定时任务'],
		list: [1, 2, 3, 503, 993],
		config: {
			'993': {
				area: '',
				is_shutdown_the_game_before: true,
				next_scheme: '金币妖怪',
			},
			'503': {
				afterCountOper: '不进行任何操作',
			},
		},
	},
	// , {
	// 	id: 102,
	// 	schemeName: '定时任务-启动游戏-对弈竞猜',
	// 	star: true,
	// 	groupNames: ['定时任务'],
	// 	list: [1, 2, 3, 503, 993],
	// 	config: {
	// 		'993': {
	// 			area: '',
	// 			is_shutdown_the_game_before: true,
	// 			next_scheme: '对弈竞猜',
	// 		},
	// 		'503': {
	// 			afterCountOper: '不进行任何操作',
	// 		},
	// 	},
	// }, {
	// 	id: 101,
	// 	schemeName: '对弈竞猜',
	// 	list: [0, 2, 401],
	// 	config: {
	// 		'0': {
	// 			jspd_times_longtime_nodo: '1',
	// 		}
	// 	},
	// }
	//
	// 完整demo
	// , {
	//     id: 2,
	//     schemeName: '组队队长',
	//     star: false,
	//     list: [0, ], // funcList中的id集合
	//     config: { // 方案中的配置，如返回空的话使用默认配置
	//         '1': { // key为功能的ID（1表示准备）
	//             enabled: false,
	//             position: '五人-左1'
	//         }
	//     },
	//     commonConfig: { // 通用参数
	//         clickDelay: 200, // 点击后固定延时
	//         clickDelayRandom: 1000, // 点击后延时随机数
	//         // 等
	//     }
	// }
];

const commonConfig = {};
for (let i = 0; i < commonConfigArr.length; i++) {
	for (let j = 0; j < commonConfigArr[i].config.length; j++) {
		const item = commonConfigArr[i].config[j];
		commonConfig[item.name] = item.default;
	}
}
const allConfig = {};
for (let i = 0; i < funcList.length; i++) {
	const configs = funcList[i].config;
	if (configs) {
		allConfig[funcList[i].id] = {};
		for (const config of configs) {
			config.config.forEach((item) => {
				allConfig[funcList[i].id][item.name] = item.default;
			});
		}
	}
}

// 内置方案列表
const innerSchemeListName = {};

SchemeList.forEach((item, id) => {
	innerSchemeListName[item.schemeName] = true;
	const thisConfig = {};
	item.list.forEach((funcId) => {
		if (allConfig[funcId]) {
			thisConfig[funcId] = allConfig[funcId];
		}
	});
	SchemeList[id] = merge(
		{},
		{
			id: id + 1,
			schemeName: '未命名',
			inner: true,
			star: false,
			list: [],
			config: thisConfig,
			commonConfig: commonConfig,
		},
		item
	);
});

export const schemeNameMap = innerSchemeListName;
export default SchemeList;
export type GroupSchemeName = {
	groupName: string,
	hidden: boolean,
	schemeNames: string[]
}