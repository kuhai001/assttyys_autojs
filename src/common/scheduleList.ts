/**
 * TODO 使用system/Schedule的Job作为ScheduleDefaultList的元素
 */

import { JobOptions } from '@/system/Schedule';

const ScheduleDefaultList: JobOptions[] = [
	{
		id: 1,
		name: '式神寄养',
		desc: '自动续式神寄养，建议把执行时间提前5分钟，启动前需要退出游戏',
		checked: false,
		lastRunTime: null,
		nextDate: null,
		repeatMode: 2,
		interval: '359',
		nextOffset: '0,5',
		level: '10',
		config: {
			scheme: '定时任务-启动游戏-式神寄养',
		}
	},
	{
		id: 2,
		name: '寮活动',
		desc: '自动参加寮活动，目前只支持道馆、狩猎',
		checked: false,
		lastRunTime: null,
		nextDate: null,
		repeatMode: 3,
		interval: '0 0 19 * * *',
		nextOffset: '0,1',
		level: '10',
		config: {
			scheme: '定时任务-启动游戏-每日寮活动',
		}
	},
	{
		id: 3,
		name: '逢魔',
		desc: '自动参加逢魔活动',
		checked: false,
		lastRunTime: null,
		nextDate: null,
		repeatMode: 3,
		interval: '0 25 17 * * *',
		nextOffset: '10,50',
		level: '10',
		config: {
			scheme: '定时任务-启动游戏-每日逢魔',
		}
	},
	{
		id: 4,
		name: '喂猫喂狗',
		desc: '自动喂猫喂狗',
		checked: false,
		lastRunTime: null,
		nextDate: null,
		repeatMode: 3,
		interval: '0 10 5,16,23 * * *',
		nextOffset: '0,30',
		level: '5',
		config: {
			scheme: '定时任务-启动游戏-喂猫喂狗',
		}
	},
	{
		id: 5,
		name: '寮突',
		desc: '自动寮突',
		checked: false,
		lastRunTime: null,
		nextDate: null,
		repeatMode: 3,
		interval: '0 10 7 * * *',
		nextOffset: '0,30',
		level: '1',
		config: {
			scheme: '定时任务-启动游戏-寮突',
		}
	},
	{
		id: 6,
		name: '地鬼',
		desc: '自动地鬼',
		checked: false,
		lastRunTime: null,
		nextDate: null,
		repeatMode: 3,
		interval: '0 0 10 * * *',
		nextOffset: '0,30',
		level: '6',
		config: {
			scheme: '定时任务-启动游戏-地鬼',
		}
	},
	{
		id: 7,
		name: '寮活动(阴门)',
		desc: '寮活动(阴门), 周五至周日',
		checked: false,
		lastRunTime: null,
		nextDate: null,
		repeatMode: 3,
		interval: '0 0 20 * * 5,6,0',
		nextOffset: '0,5',
		level: '10',
		config: {
			scheme: '庭院进入寮每日活动(包含阴门)',
		}
	},
	{
		id: 8,
		name: '寮活动(狩猎)',
		desc: '寮活动(狩猎), 周一至周四',
		checked: false,
		lastRunTime: null,
		nextDate: null,
		repeatMode: 3,
		interval: '0 59 18 * * 1-4',
		nextOffset: '0,1',
		level: '10',
		config: {
			scheme: '定时任务-启动游戏-庭院进入寮每日活动(包含阴门)',
		}
	},
	{
		id: 9,
		name: '寮活动(道馆)',
		desc: '寮活动(道馆), 周一至周四',
		checked: false,
		lastRunTime: null,
		nextDate: null,
		repeatMode: 3,
		interval: '0 5 19 * * 1-4',
		nextOffset: '0,1',
		level: '10',
		config: {
			scheme: '庭院进入寮每日活动(不包含阴门)',
		}
	},
	{
		id: 10,
		name: '寮活动(狭间)',
		desc: '寮活动(狭间), 周五至周日',
		checked: false,
		lastRunTime: null,
		nextDate: null,
		repeatMode: 3,
		interval: '0 59 18 * * 5,6,0',
		nextOffset: '0,1',
		level: '10',
		config: {
			scheme: '定时任务-启动游戏-庭院进入寮每日活动(狭间)',
		}
	},
	{
		id: 11,
		name: '寮活动(宴会)',
		desc: '寮活动(宴会), 周五或周日',
		checked: false,
		lastRunTime: null,
		nextDate: null,
		repeatMode: 3,
		interval: '0 5 19 * * 5,0',
		nextOffset: '0,1',
		level: '10',
		config: {
			scheme: '庭院进入寮每日活动(不包含阴门)',
		}
	},
	{
		id: 12,
		name: '寮活动(首领)',
		desc: '寮活动(首领), 周六',
		checked: false,
		lastRunTime: null,
		nextDate: null,
		repeatMode: 3,
		interval: '0 5 19 * * 6',
		nextOffset: '0,1',
		level: '10',
		config: {
			scheme: '庭院进入寮每日活动(不包含阴门)',
		}
	},
	{
		id: 13,
		name: '悬赏',
		desc: '自动悬赏',
		checked: false,
		lastRunTime: null,
		nextDate: null,
		repeatMode: 3,
		interval: '0 0 7,1 * * *',
		nextOffset: '0,30',
		level: '1',
		config: {
			scheme: '定时任务-启动游戏-悬赏',
		}
	},
	{
		id: 14,
		name: '重启模拟器',
		desc: '自动判断十分钟后是否有定时任务，否则重启模拟器，注意，目前jio并没有自启动功能，请配合模拟器脚本共同使用',
		checked: false,
		lastRunTime: null,
		nextDate: null,
		repeatMode: 3,
		interval: '0 0 4 * * *',
		nextOffset: '0,0',
		level: '0',
		config: {
			scheme: '重启模拟器',
		}
	},
	{
		id: 15,
		name: '每日签到与领取邮箱奖励',
		desc: '每日签到与领取邮箱奖励',
		checked: false,
		lastRunTime: null,
		nextDate: null,
		repeatMode: 3,
		interval: '0 10 1 * * *',
		nextOffset: '0,30',
		level: '1',
		config: {
			scheme: '定时任务-启动游戏-每日签到与收取邮件',
		}
	},
	{
		id: 16,
		name: '经验妖怪',
		desc: '经验妖怪',
		checked: false,
		lastRunTime: null,
		nextDate: null,
		repeatMode: 3,
		interval: '0 5 0 * * *',
		nextOffset: '0,30',
		level: '6',
		config: {
			scheme: '定时任务-启动游戏-经验妖怪',
		}
	},
	{
		id: 17,
		name: '金币妖怪',
		desc: '金币妖怪',
		checked: false,
		lastRunTime: null,
		nextDate: null,
		repeatMode: 3,
		interval: '0 5 0 * * *',
		nextOffset: '0,30',
		level: '6',
		config: {
			scheme: '定时任务-启动游戏-金币妖怪',
		}
	},
	/**
	 * 自定义定时任务
	 * 自定义式神寄养-6,12,18,24
	 * 自定义每日签到与领取邮箱奖励-12:45
	 * 自定义地鬼-13:00
	 * 自定义金币妖怪-13:30
	 * 自定义寮突-14:00
	 * 自定义逢魔-17:00
	 * 自定义悬赏-17:30,18:30
	 * 自定义绘卷-6:30,12:30,18:30,24:30,3.4.5.6.0
	 */
	{
		id: 501,
		name: '自定义式神寄养',
		desc: '自动续式神寄养，建议把执行时间提前5分钟，启动前需要退出游戏',
		checked: true,
		lastRunTime: null,
		nextDate: null,
		repeatMode: 3,
		interval: '0 0 6,12,18,24 * * *',
		nextOffset: '0,0',
		level: '10',
		config: {
			scheme: '自定义定时任务-启动游戏-式神寄养',
		}
	},
	{
		id: 502,
		name: '自定义每日签到与领取邮箱奖励',
		desc: '每日签到与领取邮箱奖励',
		checked: true,
		lastRunTime: null,
		nextDate: null,
		repeatMode: 3,
		interval: '0 45 12 * * *',
		nextOffset: '0,0',
		level: '1',
		config: {
			scheme: '自定义定时任务-启动游戏-每日签到与收取邮件',
		}
	},
	{
		id: 503,
		name: '自定义地鬼',
		desc: '自动地鬼',
		checked: true,
		lastRunTime: null,
		nextDate: null,
		repeatMode: 3,
		interval: '0 0 13 * * *',
		nextOffset: '0,0',
		level: '2',
		config: {
			scheme: '自定义定时任务-启动游戏-地鬼',
		}
	},
	{
		id: 504,
		name: '自定义金币妖怪',
		desc: '金币妖怪',
		checked: true,
		lastRunTime: null,
		nextDate: null,
		repeatMode: 3,
		interval: '0 30 13 * * *',
		nextOffset: '0,0',
		level: '6',
		config: {
			scheme: '自定义定时任务-启动游戏-金币妖怪',
		}
	},
	{
		id: 505,
		name: '自定义寮突',
		desc: '自动寮突',
		checked: true,
		lastRunTime: null,
		nextDate: null,
		repeatMode: 3,
		interval: '0 0 14 * * *',
		nextOffset: '0,0',
		level: '1',
		config: {
			scheme: '自定义定时任务-启动游戏-寮突',
		}
	},
	{
		id: 506,
		name: '自定义逢魔',
		desc: '自动参加逢魔活动',
		checked: true,
		lastRunTime: null,
		nextDate: null,
		repeatMode: 3,
		interval: '0 0 17 * * *',
		nextOffset: '0,0',
		level: '9',
		config: {
			scheme: '自定义定时任务-启动游戏-每日逢魔',
		}
	},
	{
		id: 506,
		name: '自定义悬赏',
		desc: '自动悬赏',
		checked: true,
		lastRunTime: null,
		nextDate: null,
		repeatMode: 3,
		interval: '0 30 17,18 * * *',
		nextOffset: '0,0',
		level: '1',
		config: {
			scheme: '自定义定时任务-启动游戏-悬赏',
		}
	},
	{
		id: 507,
		name: '自定义绘卷',
		desc: '自动绘卷',
		checked: false,
		lastRunTime: null,
		nextDate: null,
		repeatMode: 3,
		interval: '0 30 6,12,18,24 * * 3,4,5,6,0',
		nextOffset: '0,0',
		level: '9',
		config: {
			scheme: '绘卷_定时任务_启动游戏_绘卷',
		}
	},
	{
		id: 508,
		name: '自定义魂土司机',
		desc: '魂土司机60次',
		lastRunTime: null,
		nextDate: null,
		repeatMode: 3,
		interval: '0 45 9 * * *',
		nextOffset: '0,0',
		level: '6',
		config: {
			scheme: '自定义定时任务-启动游戏-魂土60次-司机',
		}
	},
	{
		id: 509,
		name: '自定义魂土乘客',
		desc: '魂土乘客60次',
		lastRunTime: null,
		nextDate: null,
		repeatMode: 3,
		interval: '0 43 9 * * *',
		nextOffset: '0,0',
		level: '6',
		config: {
			scheme: '自定义定时任务-启动游戏-魂土60次-乘客',
		}
	},
];

export default ScheduleDefaultList;