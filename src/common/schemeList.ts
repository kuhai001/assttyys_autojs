import funcList from './funcListIndex';
import commonConfigArr from './commonConfig';
import { IScheme } from '@/interface/IScheme';
import { merge } from './tool';

const SchemeList: IScheme[] = [
	/*
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
			multiColorSimilar: 96,
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
		schemeName: '奉纳御魂_开始奉纳',
		list: [0, 2, 302],
	},
	{
		id: 49,
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
	},
	{
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
				redType: '神荒',
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
	{
		// [{"schemeName":"123","star":true,"list":[3,500,505,516],"groupNames":["未分组"],"config":{"500":{"a_ctivity_gateOfHades":true,"a_ctivity_dojo":true,"a_ctivity_hunt":true,"a_ctivity_narrow":true,"a_ctivity_banquet":true,"a_ctivity_huntBoss":true}}}]
		id: 102,
		schemeName: '进入寮活动New',
		list: [3, 500, 505, 516],
		config: {
			'500': {
				a_ctivity_gateOfHades: true,
				a_ctivity_dojo: true,
				a_ctivity_hunt: true,
				a_ctivity_narrow: true,
				a_ctivity_banquet: true,
				a_ctivity_huntBoss: true,
			}
		}
	},
	{
		id: 102,
		schemeName: '每周真蛇',
		list: [993, 509, 510, 0, 1, 2, 3, 1106, 53, 6, 503, 29],
		config: {
			'2': { mini_area_click: false },
			'503': { afterCountOper: '不进行任何操作' },
			'510': { fastMode: true },
			'993': { scheme_switch_enabled: false },
			'1106': { switch_group: '2', switch_default: '4' }
		}
	},
	*/
	/*
	1、自定义定时任务
		自定义定时任务-启动游戏-魂土60次-司机-5101
		自定义定时任务-启动游戏-魂土60次-乘客-5102
		自定义定时任务-启动游戏-寮突-5103
		自定义定时任务-启动游戏-式神寄养-5104
		自定义定时任务-启动游戏-地鬼-5105
		自定义定时任务-启动游戏-每日逢魔-5106
		自定义定时任务-启动游戏-每日签到与收取邮件-5107
		自定义定时任务-启动游戏-悬赏-5108
		自定义定时任务-启动游戏-金币妖怪-5109
		自定义定时任务-启动游戏-斗技-5141
		自定义定时任务-启动游戏-蓝票分享-5142
		自定义定时任务_启动游戏_绘卷_个突_9退4_进攻-5198
		自定义定时任务_启动游戏_绘卷_个人探索30次-5199
	*/
	{
		id: 5101,
		schemeName: '自定义定时任务-启动游戏-魂土60次-司机',
		star: true,
		groupNames: ['自定义定时任务'],
		list: [0, 1, 2, 3, 503, 993],
		config: {
			'993': {
				area: '',
				is_shutdown_the_game_before: true,
				next_scheme: '日常_魂土60次_司机',
			},
			'503': {
				afterCountOper: '不进行任何操作',
			},
		},
	},
	{
		id: 5102,
		schemeName: '自定义定时任务-启动游戏-魂土60次-乘客',
		star: true,
		groupNames: ['自定义定时任务'],
		list: [0, 1, 2, 3, 503, 993],
		config: {
			'993': {
				area: '',
				is_shutdown_the_game_before: true,
				next_scheme: '日常_魂土60次_乘客',
			},
			'503': {
				afterCountOper: '不进行任何操作',
			},
		},
	},
	{
		id: 5103,
		'schemeName': '自定义定时任务-启动游戏-寮突',
		'star': true,
		'list': [0, 1, 2, 3, 503, 993],
		config: {
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
		id: 5104,
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
		id: 5105,
		schemeName: '自定义定时任务-启动游戏-地鬼',
		groupNames: ['自定义定时任务'],
		star: true,
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
		id: 5106,
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
		id: 5107,
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
		id: 5108,
		schemeName: '自定义定时任务-启动游戏-悬赏',
		star: false,
		groupNames: ['自定义定时任务'],
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
		id: 5109,
		schemeName: '自定义定时任务-启动游戏-金币妖怪',
		star: true,
		groupNames: ['自定义定时任务'],
		list: [0, 1, 2, 3, 503, 993],
		config: {
			'993': {
				area: '',
				is_shutdown_the_game_before: true,
				next_scheme: '日常_金币妖怪',
			},
			'503': {
				afterCountOper: '不进行任何操作',
			},
		},
	},
	{
		id: 5141,
		schemeName: '自定义定时任务-启动游戏-斗技',
		star: true,
		groupNames: ['自定义定时任务'],
		list: [0, 1, 2, 3, 503, 993],
		config: {
			'993': {
				area: '',
				is_shutdown_the_game_before: true,
				next_scheme: '周常_斗技',
			},
			'503': {
				afterCountOper: '不进行任何操作',
			},
		},
	},
	{
		id: 5142,
		schemeName: '自定义定时任务-启动游戏-蓝票分享',
		star: true,
		groupNames: ['自定义定时任务'],
		list: [0, 1, 2, 3, 503, 993],
		config: {
			'993': {
				area: '',
				is_shutdown_the_game_before: true,
				next_scheme: '周常_蓝票分享',
			},
			'503': {
				afterCountOper: '不进行任何操作',
			},
		},
	},
	{
		id: 5198,
		'schemeName': '自定义定时任务_启动游戏_绘卷_个突_9退4_进攻',
		'star': true,
		'list': [0, 1, 2, 3, 502, 503, 993],
		config: {
			'0': {
				jspd_times_longtime_nodo: '3',
			},
			'503': { 'afterCountOper': '不进行任何操作' },
			'993': {
				'is_shutdown_the_game_before': true,
				'next_scheme': '绘卷_个突_9退4_进攻'
			}
		},
		'groupNames': ['自定义定时任务']
	},
	{
		id: 5199,
		'schemeName': '自定义定时任务_启动游戏_绘卷_个人探索30次',
		'star': true,
		'list': [0, 1, 2, 3, 502, 503, 993],
		config: {
			'0': {
				jspd_times_longtime_nodo: '3',
			},
			'503': { 'afterCountOper': '不进行任何操作' },
			'993': {
				'is_shutdown_the_game_before': true,
				'next_scheme': '绘卷_个人探索30次'
			}
		},
		'groupNames': ['自定义定时任务']
	},
	/*
	2.日常
		日常_魂土60次_司机-5201
		日常_魂土60次_乘客-5202
		日常_寮突破-5203
		日常_个突_9退4_进攻-5204
		日常_个突_9退4_退出-5205
		日常_式神寄养-5206
		日常_地鬼-5207
		日常_逢魔-5208
		日常_每日签到与收取邮件-5209
		日常_悬赏-5210
		日常_金币妖怪-5211
	*/
	{
		id: 5201,
		groupNames: ['日常'],
		schemeName: '日常_魂土60次_司机',
		star: true,
		list: [509, 510, 511, 50, 0, 1, 2, 3, 5, 24, 27, 306],
		config: {
			'50': {
				'buff_type': '御魂',
				'ready_once_buff': true
			},
			'0': {
				'jspd_enabled_2': true,
				'jspd_times_2': '50',
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
		id: 5202,
		groupNames: ['日常'],
		schemeName: '日常_魂土60次_乘客',
		list: [509, 510, 511, 50, 0, 1, 4, 3, 24, 2],
		'star': true,
		config: {
			'50': {
				'buff_type': '御魂',
				'ready_once_buff': true
			},
			'0': {
				'jspd_enabled_2': true,
				'jspd_times_2': '50',
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
		id: 5203,
		'schemeName': '日常_寮突破',
		'star': false,
		'list': [0, 51, 1, 2, 3, 8, 9, 10, 12, 29],
		config: {
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
		id: 5204,
		'schemeName': '日常_个突_9退4_进攻',
		'star': true,
		'list': [501, 40, 51, 0, 1, 2, 3, 8, 9, 509, 510, 511, 29, 10],
		config: {
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
		commonConfig: {
			multiColorSimilar: 96,
		},
		'groupNames': ['日常']
	},
	{
		id: 5205,
		'schemeName': '日常_个突_9退4_退出',
		'star': false,
		'list': [0, 1, 2, 3, 8, 9, 10],
		config: {
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
		id: 5206,
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
				priority: '太鼓6->斗鱼6->太鼓5->斗鱼5->太鼓4->斗鱼4->太鼓3',
			},
			'998': {
				change_enchantment_switch: true,
				change_enchantment_type: '斗鱼',
			},
		},
	},
	{
		id: 5207,
		schemeName: '日常_地鬼日常',
		list: [509, 510, 511, 40, 0, 1, 2, 3, 16, 29],
		config: {
			'40': {
				'afterCountOper': '不进行任何操作'
			},
			'510': {
				'fastMode': true,
				'groupNum': '7'
			},
		},
		groupNames: ['日常'],
	},
	{
		id: 5208,
		schemeName: '日常_逢魔日常',
		list: [509, 510, 511, 40, 51, 0, 1, 2, 3, 23, 24, 26, 508, 8, 504],
		config: {
			'51': {
				'greenType': '自定义坐标',
				'preSearch': true
			},
			'0': {
				jspd_times_longtime_nodo: 20,
			},
			'510': {
				'fastMode': true,
				'groupNum': '2'
			},
			'40': {
				'afterCountOper': '不进行任何操作'
			},
		},
		groupNames: ['日常']
	},
	{
		id: 5209,
		schemeName: '日常_每日签到与收取邮件',
		list: [0, 2, 3, 518],
		config: {
			'0': {
				jspd_enabled_longtime_nodo: true,
				jspd_times_longtime_nodo: 1,
			},
		},
		groupNames: ['日常']
	},
	{
		id: 5210,
		schemeName: '日常_悬赏',
		groupNames: ['日常'],
		list: [509, 510, 511, 40, 0, 1, 2, 3, 18, 29],
		config: {
			'40': {
				'afterCountOper': '不进行任何操作'
			},
			'510': {
				'fastMode': true,
				'groupNum': '7'
			},
		},
	},
	{
		id: 5211,
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
			},
			'510': {
				'fastMode': true,
				'groupNum': '4',
				'defaultNum': '2'
			},
		},
	},
	/*
	3.周常
		周常_秘闻-5301
		周常_斗技-5302
		周常_器灵-5303
		周常_蓝票分享-5304
		周常_六道椒图-5305
	*/
	{
		id: 5301,
		schemeName: '周常_秘闻',
		groupNames: ['周常'],
		star: true,
		list: [509, 510, 511, 29, 0, 51, 1, 2, 3, 34, 308],
		config: {
			'510': {
				'fastMode': true,
				'groupNum': '7',
			},
			'0': {
				jspd_times_longtime_nodo: '25',
				jspd_enabled_1: true,
				jspd_times_1: 10,
			},
			'51': {
				greenType: '自定义坐标',
				greenText: '绿标专用',
				preSearch: true,
			},
			'2': {
				'mini_area_click': true,
			},
		},
	},
	{
		id: 5302,
		schemeName: '周常_斗技',
		groupNames: ['周常'],
		star: true,
		list: [509, 510, 511, 0, 51, 1, 2, 3, 30, 307],
		config: {
			'0': {
				jspd_times_longtime_nodo: 20,
				jspd_enabled_zjsj: true,
				jspd_times_zjsj: 150,
				jspd_txpl_zjsj: 300
			},
			'510': {
				'fastMode': true,
				'groupNum': '6',
			},
			'51': {
				greenType: '自定义坐标',
				greenText: '绿标专用',
				preSearch: true,
			},
		},
	},
	{
		id: 5303,
		schemeName: '周常_契灵',
		groupNames: ['周常'],
		list: [509, 510, 511, 29, 0, 1, 2, 3, 313],
		star: true,
		config: {
			'510': {
				fastMode: true
			},
			'51': {
				greenType: '自定义坐标',
				greenText: '绿标专用',
				preSearch: true,
			},
			'313': {
				'preset_pair_契灵_镇墓兽': '1,3'
			},
		},
		commonConfig: {
			multiColorSimilar: 96,
		},
	},
	{
		id: 5304,
		schemeName: '周常_蓝票分享',
		groupNames: ['周常'],
		list: [0, 3, 1100],
		star: true,
		config: {
			'0': {
				jspd_times_longtime_nodo: '3',
			},
		},
	},
	{
		id: 5305,
		schemeName: '周常_六道椒图',
		groupNames: ['周常'],
		star: true,
		list: [509, 510, 511, 29, 0, 1, 316, 2, 3, 24],
		config: {
			'510': {
				'fastMode': true,
				'groupNum': '5',
				'defaultNum': '1',
				'groupNum2': '5',
				'defaultNum2': '2',
			},
			'316': {
				'overTimes': '2',
			}
		},
	},
	/*
	4.常用
			常用_奉纳御魂_开始奉纳-5401
			常用_抽厕纸-5402
			常用_通用活动-5403
			常用_关闭BUFF-5404
			常用_返回庭院-5405
			常用_业原火-5406
	*/
	{
		id: 5401,
		groupNames: ['常用'],
		star: true,
		schemeName: '常用_奉纳御魂_开始奉纳',
		list: [0, 2, 3, 302],
	},
	{
		id: 5402,
		schemeName: '常用_抽厕纸',
		groupNames: ['常用'],
		star: true,
		list: [0, 3, 22],
	},
	{
		id: 5403,
		schemeName: '常用_通用活动',
		star: true,
		groupNames: ['常用'],
		list: [0, 1, 2, 3, 24, 312],
		config: {
			'0': {
				jspd_times_longtime_nodo: 10,
			},
		}
	},
	{
		id: 5404,
		schemeName: '关闭BUFF',
		list: [502, 1, 2, 3, 501, 29, 40],
		groupNames: ['常用'],
	},
	{
		id: 5405,
		schemeName: '返回庭院',
		list: [3, 503],
		config: {
			'503': {
				after_operation: '停止脚本',
				next_scheme: '通用准备退出',
				afterCountOper: '停止脚本',
			},
		},
		groupNames: ['常用'],
	},
	{
		id: 5406,
		schemeName: '业原火',
		star: true,
		list: [509, 510, 511, 29, 53, 0, 1, 2, 3, 6, 24],
		config: {
			'0': {
				'jspd_enabled_2': true,
				'jspd_times_2': '50',
				'after_operation': '切换方案',
				'next_scheme': '自定义定时任务-启动游戏-寮突'
			},
			'2': {
				'mini_area_click': true,
			},
			'510': {
				'fastMode': true,
				'defaultNum': '4'
			},
			'53': {
				challenge_type: '御魂-业原火',
			},
		},
		groupNames: ['常用'],
	},
	/*
		5.绘卷
			绘卷_个突_9退4_进攻-5501
			绘卷_个突_9退4_退出-5502
			绘卷_个人探索30次-5503
	*/
	{
		id: 5501,
		schemeName: '绘卷_个突_9退4_进攻',
		star: true,
		list: [509, 510, 511, 0, 51, 1, 2, 3, 8, 9, 10, 29, 25, 7],
		config: {
			'0': {
				scheme_switch_enabled: true,
				next_scheme: '自定义定时任务_启动游戏_绘卷_个人探索30次',
				after_operation: '切换方案'
			},
			'8': {
				afterCountOper: '切换方案',
				next_scheme: '自定义定时任务_启动游戏_绘卷_个人探索30次'
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
		commonConfig: {
			multiColorSimilar: 96,
		},
		groupNames: ['绘卷']
	},
	{
		id: 5502,
		'schemeName': '绘卷_个突_9退4_退出',
		'star': false,
		'list': [0, 1, 2, 3, 8, 9, 10],
		config: {
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
		id: 5503,
		'schemeName': '绘卷_个人探索30次',
		'star': true,
		'list': [0, 15, 1, 2, 3, 13, 14, 509, 510, 511, 29, 12],
		config: {
			'0': {
				'jspd_times_longtime_nodo': '3',
				'jspd_times_1': '3',
				'jspd_enabled_2': true,
				'jspd_times_2': '30',
				'next_scheme': '自定义定时任务_启动游戏_绘卷_个突_9退4_进攻',
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
	/*
		6.寮活动
			庭院进入寮每日活动(自动)-5601
			阴门挑战-5602
			首领退治-5603
			狭间暗域-5604
			狩猎战-5605
			道馆-5606
			宴会'-5607
			僵尸寮自动攻打道馆-5608
	*/
	{
		id: 5601,
		schemeName: '进入寮活动New',
		star: true,
		groupNames: ['寮活动'],
		list: [3, 500, 505, 516],
		config: {
			'500': {
				a_ctivity_gateOfHades: true,
				a_ctivity_dojo: true,
				a_ctivity_hunt: true,
				a_ctivity_narrow: true,
				a_ctivity_banquet: true,
				a_ctivity_huntBoss: true,
			}
		}
	},
	// {
	// 	id: 5601,
	// 	schemeName: '庭院进入寮每日活动(自动)',
	// 	list: [3, 505, 506, 516],
	// 	groupNames: ['寮活动'],
	// 	config: {
	// 		'506': {
	// 			auto_switch_enabled: true,
	// 			gateOfHades_switch: false,
	// 		},
	// 		'516': {
	// 			count: '10',
	// 			afterCountOper: '停止脚本',
	// 			next_scheme: '通用准备退出',
	// 		},
	// 	},
	// },
	{
		id: 5602,
		schemeName: '阴门挑战',
		star: true,
		groupNames: ['寮活动'],
		list: [0, 1, 2, 3, 5, 513],
	},
	{
		id: 5603,
		schemeName: '首领退治',
		star: true,
		groupNames: ['寮活动'],
		list: [0, 1, 2, 3, 512],
	},
	{
		id: 5604,
		schemeName: '狭间暗域',
		star: true,
		groupNames: ['寮活动'],
		list: [0, 1, 3, 514, 515],
	},
	{
		id: 5605,
		schemeName: '狩猎战',
		star: true,
		groupNames: ['寮活动'],
		list: [0, 1, 2, 3, 507],
	},
	{
		id: 5606,
		schemeName: '道馆',
		groupNames: ['寮活动'],
		list: [0, 1, 2, 3, 32],
		star: true,
	},
	{
		id: 5607,
		schemeName: '宴会',
		star: true,
		groupNames: ['寮活动'],
		list: [0, 3, 1000, 1001],
		config: {
			'1001': {
				change_shikigami_index: '1',
			},
		},
	},
	{
		id: 5608,
		schemeName: '僵尸寮自动攻打道馆',
		star: true,
		groupNames: ['寮活动'],
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
				redType: '神荒',
			},
			'519': {
				defense: 1,
				coefficient: 5,
				day: true
			},
		},
	},
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