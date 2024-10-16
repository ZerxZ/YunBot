import { Session } from "koishi"
import { faceicon, maybe } from "../Utils"


export const MaxUsage = {
	'签到':'……今天已经打过卡了。',
	'修炼':'……仙路漫漫长，生命有限，每天最多能修炼五次而已……',
	'突破':'……仙路漫漫长，灵气有限，每天最多能尝试突破三次而已……',
	'修习心法':'……欲速则不达，心法的修习一天最多三次而已……',
	'陪同修炼':'“……够了吧？”（一天只能两次）',
	'共同突破':'“……够了吧？”（一天只能两次）',
	'抽签':'……抽签问卦要心诚才灵，不是抽多几次就好的。（一天最多三次）'
}

export const TimerRes = {
    '突破':`……你还没准备好下一次突破。\n距离灵气恢复还有：{0}`,
    '陪同修炼':`“……我累了，先让我休息休息吧。”\n距离下次邀请时间：{0}`,
    '共同突破':`“……我累了，先让我休息休息吧。”\n距离下次邀请时间：{0}`,
	'修炼':'……正在修炼中……\n距离修炼完毕还有:{0}',
	'修习心法':'……正在研修心法中。\n距离这次研修完毕还有:{0}',
}

export const LongActRes = {
	'修炼':'……正在修炼中……\n距离修炼完毕还有:{0}',
	'修习心法':'……正在研修心法中。\n距离这次研修完毕还有:{0}',
}

export const YunOpinion = {
	"level-0":"还是闷头睡觉吧……",
	"level-20":"摆烂了，就好了。",
	"level-40":'普通地度过普通的一天就好了吧……',
	"level-60":'小赌怡情，大赌伤心……不如出门走走寻找机遇？',
	"level-80":'可以试试赌一把，但不一定有SSR',

	"jackpot-0":"……某种程度来说，也是很厉害。",
	"jackpot-39":"不知为何，这个数字感觉很绿。",
	"jackpot-42":"……宇宙的真理？",
	"jackpot-66":"666，是魔鬼，还是天使？",
	"jackpot-77":"777……如果是老虎机，就能中奖了吧。",
	"jackpot-100":"……这是，紫微星天降了！",

	"zg-1":"……能抽到这个签，某种程度来说也很厉害。看着山穷水尽，或许暗处还藏着转机吧。",
	"hdx-98":"……花好，月圆。这个签更偏向人……人际关系上或许有新的开始或好的变化呢。",
	"hdx-99":"……春风得意马蹄疾。好的开始，新的转机。如果有什么还在犹豫，建议现在就下决定吧。",
	"hdx-100":"……居然！是头签？！……看来今天运气爆棚，心想事成吧。",
}

export const getLuckRes = {
	'每日一卦：上':
	[
		`${faceicon('普通')}`,
			'“嗯？{0}想检测下今天的气运吗？那……麻烦先抽个签吧。一签2灵石。”',
			'（指了指放在桌子上的签筒）',
	],

	'每日一卦：下':
	[
		'结果出来了呢。今天{0}的气运值大概是{1}。',
		'然后你抽到的是……{2}',
	],

	'重复算卦：上':
	[
		`${faceicon('困惑')}`,
		'……？怎么又来了。再抽气运也不会变哦……？',
		'……？是想让我念一下签吗？掌门吩咐过了，不抽签只是读签也是要给钱的。',
	],
	'重复算卦：下':
	[
		'那好吧。（收下3灵石）',
		'{0}今天的气运值是：{1}',
		'{2}',
	],
	
	'没有钱':`${faceicon('困惑')}\n……？掌门吩咐过了，抽一签要收2灵石。你钱不够哦。`
		
}


//持续动作：修炼、修习心法、休养生息。大部分都可以分身进行(￣▽￣")
export const FinishAction = {
	'修炼':'一番修炼后，{1} 你领悟了些许修心之道。\n{0}',
	'修习心法':'一番深入修习后，{1} 你对心法的理解更加深入了。\n{0}'
}

export const Common = {
	'not-signed':'【你在灵虚派的山门附近转悠，被禁制挡在了外面。】\n（只有灵虚派的弟子才能使用设施）',
	'not-signed-phone':'【你看了看自己的手机，好像没什么特别的。】\n（需要灵虚派的小灵通）',
	'not-the-time':'【好像还没到突破的时机】',
	'already-signed':'“……{0}？{1}\n这里是新人弟子入门登记处哦。”'
}

export const ComReply = {
	'等级不足：心法':'你试着运气……但还没法捕捉灵气的你无论做什么都是徒劳的。\n【心法的学习需要炼心五阶之后】',
	'没有心法':'【你没有可以修习的心法】',

	'获取心法：上':
		[
			`“……嗯？{0}似乎还没有主修心法的样子……”`,
			`“本门派有三种基础心法：灵犀，灵空，灵虚。主要修炼的……分别对应：攻击，防御，速度。”`,
			'“至于修哪个嘛……”',
			'',
			'（你跟着路昀在藏经阁的初级心法区转了转，封面上居然都没有名字。）',
			'“……找起来太麻烦了，算了，随便选一本吧。”',
			''
		],
	
	'获取心法：下':[
		'“嗯……就这本吧。”',
		'',
		'{0}获得了心法{1}',
	],

	'修习心法':[
		'@{0} 你摒除杂念，让灵气流转，进入空我的状态，开始了对心法的研修……'
	],
	
	'单独修炼':(name, role)=>{
		return `@${name} 你${maybe([
				["静心打坐", 30],
				["打扫整理", 10 + (role == 'cleaner' ? 70 : 0)],
				["静坐冥思", 30],
				["参阅经书", 30 + (role == 'senior' ? 30 : 0)],
				["吞纳吸气", 30],
				['弹奏音律',30],
				['书情画意',30 + (role == 'master' ? 50 : 0)],
				['钻研棋谱',30],
				["奋笔疾书", 20 + (role == 'brother' ? 50 : 0)],
			])}，开始沉浸于日常的修炼之中……`
	},

	'单独突破':(name,role)=>{
		return `在一个黄道吉日里，@${name} 你沐浴更衣后，`
				+ maybe([
					["盘腿而坐，闭目冥思感应天地", 30],
					[
						"收拾整顿，用抹布细心打扫道观的所有角落",
						10 + (role == 'cleaner' ? 70 : 0),
					],
					["金鸡独立，在瀑布下洗涤身心", 30],
					["点燃熏香，细细品读经文", 30 + (role == 'senior' ? 30 : 0)],
					["吞纳吸气，感受体内灵气的运作", 30],
					['激昂奏乐，将自身彻底融入音律中',30],
					['舞动画笔，将命运平铺在画卷中',30],
					['操弄棋盘，以自身为子与天对棋',30],
					["奋笔疾书，将所思所想归纳总结", 20 + (role == 'brother' ? 50 : 0)],
				])
				+`，试图从中捕捉一丝宇宙大道……\n`
	},

	'突破成功':`你领悟了一丝天地之道！ 你突破了，从{0}变成{1}了！`,

	'突破失败':`可惜，你没悟到什么……只是获得了些许心得。\n{0}`,

	'签到气运':
	[
		'……{0}还没算气运的样子？那，先抽个签吧……”',
		'（说着指了指一旁的签筒。）',
		'',
		'“嗯……今天{0}的气运有{1}呢。”',
		'小昀的今日一言：{2}'
	],

	'每日签到':
	[
		'要打卡吗？ 好的，在这里刷一下小灵通好了。”',
		'',
		'你拿着小灵通在弟子观前刷了一下，今天份零花钱自动到账了。',
		'嗯……今天有{0}灵石呢。'
	]

}

export const UserMessage = {
	'注册：场景':
	[
		'你来到了入门申请处，这里只是一个临时设立的亭子。',
		'一个等身大的掌门立牌放置在一旁，桌子上摆放着写一些介绍灵虚派的传单，以及入门申请的表格。',
		'一个头上有着鹿角兽耳的少年在凉亭阴凉处打着瞌睡，只有一个看着就是打杂的外门弟子守在桌前。'
	],
	'注册：名字':
	[
		'杂役弟子戳了戳鹿角少年，路昀立刻醒来揉着迷蒙的睡眼，迷迷糊糊地望向你问话道：“……？请问你是？”',
		' ( 请直接输入角色名，不可带特殊字符。最长五个字。 )',
	],
	'注册：准备':
	[
		'路昀拍了拍自己的脸，摆出营业微笑与你问好。\n',
		`${faceicon('微笑')}`,
		'“……你好，{0}。请问有什么事吗？”',
		'“……嗯？原来是要申请进来我们灵虚派吗？”',
		'“好的……我知道了。这就去叫人帮你检测灵根。在等待期间，先做个小问卷吧。”'
	],
	'注册：问答A':
	[
		'“不知道{0}一年四季觉得最舒服的是什么时期呢？”',
		'1.春 2.夏 3.秋 4.冬 5.季节变换时',	
		'(请直接输入数字。)',
	],
	'注册：问答B':
	[
		'“……原来如此。那么，东南西北中，你觉得哪个方位让你最舒服？”',
		'1.东 2.南 3.西  4.北  5.中 ',
		'(请直接输入数字。)',
	],
	'注册：问答C':
	[
		'“……了解了。最后，告诉我一个1-100之中你所喜欢的数字吧。”'
	],
	'注册：灵根':
	[
		'貌似检测好了。{0}的灵根是……{1}呢。'
	],
	'注册：用户名':
	[
		'“最后把剩下的信息填完就可以领取本宗门的小灵通了吧。”',
		'[接下来请输入小灵通的用户名。]',
		'[用户名具有跨平台识别性。建议不要和角色名重复。也不能包含特殊字符。]'
	],
	'注册：完成':
	[
		'“……好了，都登记完了呢。”',
		'“辛苦了，以后请多多指教，{0}。”'
	],
	'继承：开始':[
		'你隐约想起了一些前世的记忆，一个冲动，你跑去找了路昀。'
	],
	'继承：询问':
	[
		'路昀：“……？所以……我们以前在别的地方见过？”',
		'输入：[是/不是]',
		'（提示：选择‘是’将删除当前档案被旧档覆盖。)',
		'（反之，则退出本流程。)'
	],
	'继承：回忆':
	[
		'“……啊，你这么说，我好像想起来了……”',
		'“……嗯……是上周目的{0}吧。”'
	],
	'继承：回忆失败':
	[
		'“……？嗯，没有吧。或许有什么搞错了。”'
	],
	'继承：结束':[
		faceicon('微笑')+ '“……那，在新的地方也继续指教？……{0}。”'
	]
}