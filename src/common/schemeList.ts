import funcList from './funcListIndex';
import commonConfigArr from './commonConfig';
import { IScheme } from '@/interface/IScheme';
import { merge } from './tool';

const SchemeList: IScheme[] = [
	// ========== 未分组 ==========
	{
		id: 11,
		schemeName: '小功能合集',
		star: true,
		list: [0, 1, 2, 3, 17, 22, 28, 31, 302, 309, 310, 319, 24],
	},
	{
		id: 26,
		schemeName: '关闭BUFF',
		list: [0, 1, 2, 3, 501, 29, 40, 503],
	},
	{
		id: 29,
		schemeName: '返回庭院',
		list: [0, 1, 2, 3, 24, 503],
		config: {
			'0': {
				jspd_enabled_longtime_nodo: true,
				jspd_times_longtime_nodo: 1,
			},
		},
	},
	{
		id: 62,
		schemeName: '通用准备退出',
		star: true,
		list: [0, 1, 2, 3, 24],
	},
	// ========== 战斗 ==========
	{
		id: 62,
		schemeName: '通用活动',
		groupNames: ['战斗'],
		star: true,
		list: [0, 1, 2, 3, 24, 312],
	},
	{
		id: 3,
		schemeName: '组队司机',
		groupNames: ['战斗'],
		star: true,
		list: [0, 1, 2, 3, 5],
	},
	{
		id: 2,
		schemeName: '组队乘客',
		groupNames: ['战斗'],
		star: true,
		list: [0, 1, 2, 3, 4],
	},
	{
		id: 3,
		schemeName: '个人突破_打9退4',
		groupNames: ['战斗'],
		star: true,
		list: [690, 509, 510, 51, 0, 1, 2, 3, 7, 8, 9, 29, 503],
		config: {
			'7': {
				switch_nineWin: true,
			},
			'9': {
				scheme_switch_enabled: true,
			},
			'51': {
				greenType: '自定义坐标',
				preSearch: true,
			},
		},
	},
	{
		id: 4,
		schemeName: '个人突破_降级',
		groupNames: ['战斗'],
		list: [0, 1, 2, 3, 8, 9, 11],
		config: {
			'0': {
				jspd_enabled_1: true,
				jspd_times_1: 27,
			},
			'1': {
				exitBeforeReady: true,
			},
		},
	},
	{
		id: 5,
		schemeName: '寮突破',
		groupNames: ['战斗'],
		star: true,
		list: [0, 1, 2, 3, 8, 9, 12, 29],
		config: {
			'8': {
				type: '寮突破',
			},
		},
	},
	{
		id: 2,
		schemeName: '个人御魂',
		groupNames: ['战斗'],
		star: false,
		list: [0, 1, 2, 3, 6],
	},
	{
		id: 6,
		schemeName: '个人探索',
		groupNames: ['战斗'],
		star: true,
		list: [0, 1, 2, 3, 14, 29],
	},
	{
		id: 12,
		schemeName: '妖气封印',
		groupNames: ['战斗'],
		list: [0, 1, 2, 3, 5, 27],
	},
	// ========== 日常 ==========
	{
		id: 23,
		schemeName: '寄养',
		groupNames: ['日常'],
		star: true,
		list: [690, 0, 1, 2, 3, 700, 702, 503],
	}, {
		id: 23,
		schemeName: '结界卡',
		groupNames: ['日常'],
		star: true,
		list: [690, 0, 1, 2, 3, 700, 701, 503],
	},
	{
		id: 23,
		schemeName: '悬赏',
		groupNames: ['日常'],
		star: true,
		list: [690, 509, 510, 1, 2, 3, 18, 29, 503],
	},
	{
		id: 9,
		schemeName: '地鬼日常',
		groupNames: ['日常'],
		star: true,
		list: [690, 509, 510, 0, 1, 2, 3, 16, 29, 503],
		config: {
			'16': {
				next_scheme: '逢魔日常'
			}
		}
	},
	{
		id: 10,
		schemeName: '逢魔日常',
		groupNames: ['日常'],
		star: true,
		list: [1, 2, 3, 23, 24, 26, 508, 8, 504],
		config: {
			'508': {
				next_scheme: '每日签到与收取邮件',
			},
		},
	},
	{
		id: 64,
		schemeName: '每日签到与收取邮件',
		groupNames: ['日常'],
		list: [0, 1, 2, 3, 518, 521],
		config: {
			'0': {
				jspd_enabled_longtime_nodo: true,
				jspd_times_longtime_nodo: 1,
				after_operation: '切换方案',
				next_scheme: '喂猫喂狗'
			},
		},
	},
	{
		id: 45,
		schemeName: '喂猫喂狗',
		groupNames: ['日常'],
		list: [0, 1, 2, 3, 517],
		config: {
			'517': {
				next_scheme: '个人突破_打9退4'
			},
		},
	},
	{
		id: 72,
		schemeName: '经验妖怪',
		groupNames: ['日常'],
		list: [0, 50, 1, 2, 3, 5, 27],
		config: {
			'27': {
				mission: '经验妖怪',
			},
			'50': {
				ready_once_buff: true,
				buff_type: '经验',
			},
		},
	},
	{
		id: 24,
		schemeName: '金币妖怪',
		groupNames: ['日常'],
		list: [0, 50, 1, 2, 3, 5, 27],
		config: {
			'27': {
				mission: '金币妖怪',
			},
			'50': {
				ready_once_buff: true,
				buff_type: '金币',
			},
		},
	},
	// ========== 寮活动 ==========
	{
		id: 33,
		schemeName: '寮活动启动器',
		groupNames: ['寮活动'],
		list: [690, 0, 1, 2, 3, 505, 600, 503],
	},
	{
		id: 33,
		schemeName: '狩猎战',
		groupNames: ['寮活动'],
		list: [509, 510, 0, 1, 2, 3, 601],
	},
	{
		id: 19,
		schemeName: '道馆',
		groupNames: ['寮活动'],
		list: [509, 510, 0, 1, 2, 3, 602],
		star: true,
	},
	{
		id: 44,
		schemeName: '狭间暗域',
		groupNames: ['寮活动'],
		list: [318, 311, 315, 510, 0, 1, 2, 3, 24, 603],
	},
	{
		id: 25,
		schemeName: '宴会',
		groupNames: ['寮活动'],
		star: true,
		list: [0, 1, 2, 3, 605, 503],
	},
	{
		id: 43,
		schemeName: '首领退治',
		groupNames: ['寮活动'],
		list: [509, 510, 0, 1, 2, 3, 604],
	},
	{
		id: 42,
		schemeName: '阴门挑战',
		groupNames: ['寮活动'],
		list: [509, 510, 0, 1, 2, 3, 5, 606],
	},
	{
		id: 76,
		schemeName: '僵尸寮自动攻打道馆',
		groupNames: ['寮活动'],
		list: [509, 510, 311, 519, 505, 51, 0, 1, 2, 3, 602],
		config: {
			'51': {
				greenType: '自定义坐标',
				preSearch: true,
			},
			'311': {
				redType: '神荒',
			},
			'602': {
				after_fail_operation: '再战道馆',
				exit_second: true,
			},
		},
	},
	// ========== 每周活动 ==========
	{
		id: 17,
		schemeName: '斗技',
		groupNames: ['每周活动'],
		list: [690, 509, 510, 0, 1, 2, 3, 30, 503],
	},
	{
		id: 22,
		schemeName: '秘闻前五层',
		groupNames: ['每周活动'],
		list: [690, 509, 510, 315, 0, 50, 1, 2, 3, 34, 29, 503],
		star: true,
		config: {
			'0': {
				jspd_enabled_2: true,
				jspd_times_2: 5,
				after_operation: '切换方案',
				next_scheme: '秘闻后五层'
			},
			'50': {
				buff_type: '金币',
				ready_once_buff: true
			},
			'503': {
				oper_42: false,
				oper_43: false,
			}
		},
	},
	{
		id: 22,
		schemeName: '秘闻后五层',
		groupNames: ['每周活动'],
		list: [509, 510, 315, 0, 40, 1, 2, 3, 34],
		star: true,
		config: {
			'0': {
				jspd_enabled_2: true,
				jspd_times_2: 5,
				after_operation: '切换方案',
				next_scheme: '返回庭院'
			},
			'40': {
				ready_once_buff: true
			},
			'503': {
				oper_42: false,
				oper_43: false,
			}
		},
	},
	{
		id: 69,
		schemeName: '六道椒图',
		groupNames: ['每周活动'],
		star: true,
		list: [690, 509, 510, 0, 1, 316, 2, 3, 24, 29, 503],
		config: {
			'316': {
				overTimes: '2'
			},
			'503': {
				oper_35: false
			}
		}
	},
	{
		id: 102,
		schemeName: '每周真蛇_队长',
		groupNames: ['每周活动'],
		list: [690, 509, 510, 1106, 0, 1, 2, 3, 306, 5, 1106, 6, 53, 29, 503],
	},
	{
		id: 102,
		schemeName: '每周真蛇_队员',
		groupNames: ['每周活动'],
		list: [690, 509, 510, 0, 1, 2, 3, 4, 24, 1106, 503],
		config: {
			'0': {
				jspd_enabled_2: true,
				jspd_times_2: 2,
			},
		}
	},
	{
		id: 66,
		schemeName: '契灵_单人',
		groupNames: ['每周活动'],
		list: [690, 509, 510, 0, 1, 2, 3, 313, 29, 503],
		star: true,
		config: {
			'503': {
				oper_40: false
			}
		}
	},
	{
		id: 66,
		schemeName: '契灵_队长',
		groupNames: ['每周活动'],
		list: [690, 509, 510, 0, 1, 2, 3, 306, 5, 313, 29, 503],
		config: {
			'313': {
				buy_ball: true,
				team: '队长'
			},
			'503': {
				oper_40: false
			}
		}
	},
	{
		id: 66,
		schemeName: '契灵_队员',
		groupNames: ['每周活动'],
		list: [690, 509, 510, 0, 1, 2, 3, 4, 313, 29, 503],
		config: {
			'313': {
				team: '队员'
			},
			'503': {
				oper_40: false
			}
		}
	},
	{
		id: 78,
		schemeName: '周三神秘商人',
		groupNames: ['每周活动'],
		list: [690, 0, 1, 2, 3, 24, 1110, 503],
		config: {
			'0': {
				jspd_times_longtime_nodo: '1',
			},
		},
	},
	{
		id: 78,
		schemeName: '百鬼棋局',
		groupNames: ['每周活动'],
		list: [0, 1, 2, 3, 24, 320],
		config: {
			'0': {
				jspd_times_longtime_nodo: '5',
			},
		},
	},
	{
		id: 78,
		schemeName: '每周资源领取',
		groupNames: ['每周活动'],
		list: [690, 0, 1, 2, 3, 24, 1100, 1101, 1102, 1103, 1104, 1105, 1107, 1108, 1109, 1111, 503],
		config: {
			'0': {
				jspd_times_longtime_nodo: '1',
			},
		},
	},
	{
		id: 78,
		schemeName: '魂海_队员',
		groupNames: ['每周活动'],
		star: true,
		list: [690, 509, 510, 0, 1, 2, 3, 4, 503],
		config: {
			'0': {
				jspd_enabled_2: true,
				jspd_times_2: '30',
				stop_with_launched_app_exit: true
			},
			'503': {
				oper_34: false
			},
		}
	},
	{
		id: 78,
		schemeName: '魂海_队长',
		star: false,
		groupNames: ['每周活动'],
		list: [690, 509, 510, 0, 1, 2, 3, 306, 5, 5, 27, 503, 306],
		config: {
			'0': {
				jspd_enabled_2: true,
				jspd_times_2: 30,
				after_operation: '切换方案',
				next_scheme: '__关闭应用__'
			},
			'27': {
				mission: '永生之海',
				next_scheme: '__关闭应用__'
			},
			'503': {
				afterCountOper: '不进行任何操作',
				oper_34: false
			}
		},
	},
	// ========== 罕见活动 ==========
	{
		id: 49,
		schemeName: '绘卷进度_检测并提醒',
		groupNames: ['罕见活动'],
		list: [0, 2, 3, 304],
		star: true,
	},
	{
		id: 39,
		schemeName: '夜行荒河',
		groupNames: ['罕见活动'],
		list: [2, 3, 220, 221],
	},
	{
		id: 99,
		schemeName: '伊吹之擂',
		groupNames: ['罕见活动'],
		list: [0, 3, 24, 99],
	},
	{
		id: 101,
		schemeName: '对弈竞猜',
		groupNames: ['罕见活动'],
		list: [0, 2, 3, 401],
		config: {
			'0': {
				jspd_times_longtime_nodo: '1',
			},
		},
	},
	{
		id: 78,
		schemeName: '清自己1-4星鬼王',
		groupNames: ['罕见活动'],
		list: [0, 1, 2, 3, 24, 317],
	},
	// ========== 循环任务 ==========
	{
		id: 111,
		schemeName: '循环_魂十队长',
		star: true,
		list: [690, 509, 510, 0, 1, 2, 3, 5, 27, 306, 503],
		groupNames: ['循环任务'],
		config: {
			'0': {
				'jspd_enabled_2': true,
				'jspd_times_2': '80',
				'after_operation': '切换方案',
				'next_scheme': '突破打9退4'
			},
			'27': { 'level': '魂十' },
			'503': { 'oper_26': false },
		}
	},
	{
		id: 111,
		schemeName: '循环_御魂队员',
		star: true,
		list: [690, 509, 510, 50, 0, 1, 2, 3, 4, 503],
		groupNames: ['循环任务'],
		config: {
			'0': {
				jspd_enabled_2: true,
				jspd_times_2: '80',
				after_operation: '切换方案',
				next_scheme: '突破打9退4'
			},
			'50': {
				buff_type: '御魂',
				ready_once_buff: true
			},
			'503': {
				'oper_26': false
			},
		}
	},
	{
		id: 111,
		schemeName: '循环_探索队长',
		star: true,
		list: [690, 509, 510, 0, 1, 2, 3, 5, 27, 306, 25, 14, 503],
		groupNames: ['循环任务'],
		config: {
			'0': {
				jspd_enabled_2: true,
				jspd_times_2: 80,
				after_operation: '切换方案',
				next_scheme: '突破打9退4'
			},
			'27': { mission: '探索（困难）' },
			'503': { oper_26: false, oper_27: false },
		}
	},
	{
		id: 111,
		schemeName: '循环_探索队员',
		star: true,
		list: [690, 509, 510, 50, 0, 1, 2, 3, 4, 25, 503],
		groupNames: ['循环任务'],
		config: {
			'0': {
				jspd_enabled_2: true,
				jspd_times_2: '80',
				after_operation: '切换方案',
				next_scheme: '突破打9退4'
			},
			'50': {
				buff_type: '经验',
				ready_once_buff: true
			},
			'503': {
				'oper_26': false,
				'oper_27': false
			},
		}
	},
	{
		id: 111,
		schemeName: '循环_探索单人',
		star: true,
		list: [690, 509, 510, 50, 0, 1, 2, 3, 14, 29, 503],
		groupNames: ['循环任务'],
		config: {
			'0': {
				jspd_enabled_2: true,
				jspd_times_2: '80',
				after_operation: '切换方案',
				next_scheme: '突破打9退4'
			},
			'50': {
				buff_type: '经验',
				ready_once_buff: true
			},
			'503': {
				'oper_26': false,
				'oper_27': false
			},
		}
	},
	{
		id: 3,
		schemeName: '突破打9退4',
		groupNames: ['循环任务'],
		star: true,
		list: [690, 509, 510, 501, 40, 51, 0, 1, 2, 3, 8, 9, 10, 11, 29, 503],
		config: {
			'8': {
				inv: true,
				designated_scheme: '循环',
			},
			'9': {
				scheme_switch_enabled: true,
			},
			'51': {
				greenType: '自定义坐标',
				preSearch: true,
			},
			'501': {
				once: true
			},
			'503': {
				oper_26: true,
			},
		},
	},
	// ========== 小号部分 ==========
	{
		id: 111,
		schemeName: '僵尸寮日常任务',
		star: true,
		list: [0, 1, 2, 3, 24, 609, 503],
		groupNames: ['小号部分'],
		config: {
			'0': {
				jspd_times_longtime_nodo: '1',
			},
			'609': {
				next_scheme: '__关闭应用__'
			},
			'690': {
				scheme_switch_enabled: true,
				next_scheme: '__不做动作__'
			}
		}
	},
	{
		id: 79,
		schemeName: '协战十五',
		groupNames: ['小号部分'],
		list: [690, 694, 0, 1, 2, 3, 6, 53, 29, 503],
		config: {
			'0': {
				jspd_enabled_2: true,
				jspd_times_2: 15,
				stop_with_launched_app_exit: true,
			},
			'53': { challenge_type: '觉醒-火麒麟' },
		},
	},
	// ========== 师徒部分 ==========
	{
		id: 79,
		schemeName: '师徒_师傅战斗',
		groupNames: ['师徒部分'],
		list: [690, 510, 0, 1, 2, 3, 693, 503],
		config: {
			'0': {
				stop_with_launched_app_exit: true,
			}
		},
	},
	{
		id: 79,
		schemeName: '师徒_徒弟登录',
		groupNames: ['师徒部分'],
		list: [690, 0, 1, 2, 3, 5, 24, 691, 503],
		config: {
			'0': {
				jspd_times_longtime_nodo: '3',
			},
			'691': {
				next_scheme: '师徒_徒弟领体力',
				levelUP_scheme: '师徒_徒弟升级'
			},
			'690': {
				area: '徒弟',
			}
		},
	},
	{
		id: 79,
		schemeName: '师徒_徒弟升级',
		groupNames: ['师徒部分'],
		list: [694, 0, 1, 2, 3, 29, 14],
		config: {
			'0': {
				jspd_enabled_2: true,
				jspd_times_2: 14,
				after_operation: '切换方案',
				next_scheme: '__返回上个方案__'
			},
		}
	},
	{
		id: 79,
		schemeName: '师徒_徒弟领体力',
		groupNames: ['师徒部分'],
		list: [690, 0, 1, 2, 3, 518, 503],
		config: {
			'0': {
				jspd_times_longtime_nodo: '0.5',
				after_operation: '切换方案',
				next_scheme: '师徒_徒弟金币'
			}
		},
	},
	{
		id: 79,
		schemeName: '师徒_徒弟金币',
		groupNames: ['师徒部分'],
		list: [0, 1, 2, 3, 27, 306, 5],
		config: {
			'27': {
				mission: '金币妖怪',
				next_scheme: '师徒_徒弟经验'
			}
		},
	},
	{
		id: 79,
		schemeName: '师徒_徒弟经验',
		groupNames: ['师徒部分'],
		list: [0, 1, 2, 3, 27, 306, 5],
		config: {
			'27': {
				mission: '经验妖怪',
				next_scheme: '师徒_徒弟石距'
			}
		},
	}, {
		id: 79,
		schemeName: '师徒_徒弟石距',
		groupNames: ['师徒部分'],
		list: [0, 1, 2, 3, 27, 306, 5],
		config: {
			'27': {
				mission: '石距',
				next_scheme: '师徒_徒弟协战'
			}
		},
	}, {
		id: 79,
		schemeName: '师徒_徒弟协战',
		groupNames: ['师徒部分'],
		list: [690, 694, 0, 1, 2, 3, 53, 6, 29, 503],
		config: {
			'0': {
				jspd_enabled_2: true,
				jspd_times_2: 15,
				after_operation: '切换方案',
				next_scheme: '师徒_徒弟守护'
			},
			'6': {
				next_scheme: '师徒_徒弟守护'
			}
		},
	},
	{
		id: 79,
		schemeName: '师徒_徒弟守护',
		groupNames: ['师徒部分'],
		list: [0, 1, 2, 3, 306, 692, 29],
		config: {
			'692': {
				next_scheme: '__关闭应用__'
			}
		},
	},
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