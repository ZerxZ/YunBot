//黄大仙灵签
//https://www.zgjm.org/chouqian/huangdaxian/1.html

const { random, between } = require('../Function')
const hdxpool = [
	[1,18],
	[19,56],
	[57,87],
	[88,97],
	[98,98],
	[99,99],
	[100,100],
]

const hdxlq = [
	{id:1, no: 8 , luck: '下下', title: '崔子弑父' , text: '鸣鸠争夺鹊巢居  宾主参差意不舒\n满岭乔松萝茑附  且猜诗语是何如'},
	{id:2, no: 12 , luck: '下下', title: '太白捞月' , text: '蜃楼海市幻无边  万丈擎空接上天\n或被狂风忽吹散  有时仍聚结青烟'},
	{id:3, no: 18 , luck: '下下', title: '杜鹃泣血动客心' , text: '杜鹃啼血泪悲声  声怨霜寒梦乍惊\n惊动异乡为异客  客心更触故园情'},
	{id:4, no: 22 , luck: '下下', title: '陈妙嫦思春' , text: '秋水伊人各一方  天南地北恨偏长\n相思试问凭谁寄  不尽凄凉枉断肠'},
	{id:5, no: 24 , luck: '下下', title: '白居易归隐' , text: '诗酒琴棋可解愁  座中无客乐难休\n或弹或唱谁知美  冷饮虽多亦是忧'},
	{id:6, no: 30 , luck: '下下', title: '贵妃自缢' , text: '倾国倾城媚百生  六宫粉黛尽无名\n马嵬山下魂飞去  至今明皇长恨情'},
	{id:7, no: 31 , luck: '下下', title: '蔡中兴遇险' , text: '狂风骤雨打船篷  溪畔桃花尽落红\n惊醒渔翁春梦熟  持篙撑去失西东'},
	{id:8, no: 40 , luck: '下下', title: '伯才碎琴' , text: '人世知音能有几  碎琴都为子期亡\n坟前洒尽千行泪  隔别阴阳各一方'},
	{id:9, no: 43 , luck: '下下', title: '韩文公被贬' , text: '只因直谏怒天颜  昼夜难离在马鞍\n主仆奔忙神亦倦  更加雪重拥蓝关'},
	{id:10, no: 46 , luck: '下下', title: '左慈戏曹操' , text: '黄柑数盒献曹公  剖看原来肉尽空\n怒动奸雄挥铁斧  奔忙身入万羊中'},
	{id:11, no: 58 , luck: '下下', title: '蹇叔哭师' , text: '秦师大败在淆山  三帅皆擒尽放还\n蹇叔谏言因不听  倒戈舍甲返秦间'},
	{id:12, no: 59 , luck: '下下', title: '东施效颦' , text: '浣溪纱女美无双  媚至吴王国破亡\n最恼东施效颦笑  山鸡岂可胜鸾凰'},
	{id:13, no: 61 , luck: '下下', title: '十二金牌召岳飞' , text: '十二金牌速召回  奸雄设计几时灰\n可怜一旦功劳散  老少扶车不断哀'},
	{id:14, no: 65 , luck: '下下', title: '后主失国' , text: '隋灭陈时戟伐纷  都因妖媚闭明君\n东奔西走无藏息  井里胭脂隐玉人'},
	{id:15, no: 74 , luck: '下下', title: '朱买臣分妻' , text: '回忆当年运蹇时  夫妻反目两分离\n名题雁塔归来后  复水马头时否悲'},
	{id:16, no: 75 , luck: '下下', title: '伦文叙戏妻' , text: '婚姻岂可厌家贫  文叙夫妻两拆分\n一旦首登龙虎榜  戏妻楼坠自身亡'},
	{id:17, no: 89 , luck: '下下', title: '吴季子挂剑' , text: '他乡远历佩鱼肠  谁料徐君意欲将\n既返愿为相赠答  且悬树下表情长'},
	{id:18, no: 93 , luck: '下下', title: '孔子闻卫乐' , text: '郑卫之音不忍听  淫风败俗国将倾\n令人深入迷津路  所奏全非古乐声'},

	{id:19, no: 3 , luck: '中平', title: '鲁班开山' , text: '牛山之木皆常美  独惜斧工尽伐他\n大器大材无足用  规矩不准怎为搓'},
	{id:20, no: 10 , luck: '中平', title: '苏秦不第' , text: '一轮月镜挂空中  偶被浮云障叠重\n玉匣何时光气吐  谁人借我一狂风'},
	{id:21, no: 13 , luck: '中平', title: '孟浩然寻梅' , text: '岭南初放一枝梅  片片晶莹入酒杯\n却遇骑驴人早至  如意背负占春魁'},
	{id:22, no: 20 , luck: '中平', title: '雪梅招亲' , text: '天上仙花难问种  人间尘事几多更\n前程已注公私簿  罚赏分明浊与清'},
	{id:23, no: 23 , luck: '中平', title: '卢生梦' , text: '邯郸一梦幻无边  数载身荣是熟眠\n换却锦衣归故里  睡醒还记在心田'},
	{id:24, no: 26 , luck: '中平', title: '徐庶归家' , text: '花彩迟迟侵砌上  遥知月镜挂长空\n忽闻鹤唳声凄切  早买归舟返里中'},
	{id:25, no: 27 , luck: '中平', title: '越王复国' , text: '天晴粉蝶翻衣晒  又看庭前蚁阵排\n队伍整齐趋或退  时开时合思何佳'},
	{id:26, no: 28 , luck: '中平', title: '白居易听琵琶' , text: '船泊浔阳月夜天  琵琶一曲动人怜\n相思两地凭谁寄  白雪摧人上鬓巅'},
	{id:27, no: 29 , luck: '中平', title: '张翰思鲈' , text: '鲈鱼作脍菊花黄  美酒盈樽近晚凉\n泛棹正当潮上候  这般往景乐无央'},
	{id:28, no: 32 , luck: '中平', title: '苏武牧羊' , text: '十九年前海上辛  节旄惆败逐沙尘\n餐毛嚼雪谁怜我  惟有羊儿作伴群'},
	{id:29, no: 33 , luck: '中平', title: '孔明借东风' , text: '曹操虽有深谋计  智慧难瞒诸葛侯\n试看东风都可借  更能流马木成牛'},
	{id:30, no: 45 , luck: '中平', title: '王质遇仙' , text: '采樵不意到云天  闲年敲棋二老仙\n柯烂也思归故里  出中七日世千年'},
	{id:31, no: 47 , luck: '中平', title: '鲁肃索荆州' , text: '遥遥千里来西蜀  欲问荆州那日还\n刘备不言声泪下  自思无策转吴间'},
	{id:32, no: 48 , luck: '中平', title: '卓文君卖酒' , text: '绣阁听琴自起思  改妆夤夜最欢时\n可怜沽酒临邛市  才子佳人两下厨'},
	{id:33, no: 51 , luck: '中平', title: '成王剪桐封第' , text: '剪桐虽是作儿泾  封北成圭语不移\n何以伪为成实事  言因无戏故如斯'},
	{id:34, no: 52 , luck: '中平', title: '盘古开天辟地' , text: '上清下浊成天地  清浊相凝便作人\n尔欲多求明白事  且将三等细分明'},
	{id:35, no: 54 , luck: '中平', title: '庄周梦蝶' , text: '庄子酣眠成蝶梦  翩翩飞入百花丛\n天香采得归来后  犹在高床暖枕中'},
	{id:36, no: 55 , luck: '中平', title: '吴隐之投沉香' , text: '浦号沉香遗旧恨  渡江犹忆古人心\n可怜当日辞官去  浊有馨留不易寻'},
	{id:37, no: 60 , luck: '中平', title: '李白醉和番书' , text: '和番醉笔似云烟  日在长安酒店眠\n倘遇唐皇颁令召  重呼不上木兰船'},
	{id:38, no: 62 , luck: '中平', title: '孔子守道' , text: '美玉于斯韫匮藏  休求善价费商量\n沽之亦可随相待  此物何须自看常'},
	{id:39, no: 67 , luck: '中平', title: '李元霸称雄' , text: '人虽勇力不能当  莫恃英雄独冠场\n可挟泰山超北海  身心犹贵重存亡'},
	{id:40, no: 70 , luck: '中平', title: '塞翁失马' , text: '可比当年一塞翁  虽然失马半途中\n不知祸福真何事  到底方明事始终'},
	{id:41, no: 71 , luck: '中平', title: '庄周活鲋' , text: '涸辙之中鲋困之  穷通自可卜当时\n若能引得西江水  他日成龙也未知'},
	{id:42, no: 72 , luck: '中平', title: '高文定守困' , text: '兔儿久待意何如  堪叹愚人独守株\n算是无能令我笑  不须守旧自拘拘'},
	{id:43, no: 76 , luck: '中平', title: '孔子修身不厌贫' , text: '人能乐道自修身  疏水曲肱岂厌贫\n不义而富且贵者  我心都作是浮云'},
	{id:44, no: 77 , luck: '中平', title: '公冶长入狱' , text: '鸟语能通公冶长  南山有个虎拖羊\n其身虽在于缧绁\n到底非关自己殃'},
	{id:45, no: 79 , luck: '中平', title: '张良悟道' , text: '富贵有如春梦熟  世人何苦力争求\n任他秉笏当朝立  到死惟留土一杯'},
	{id:46, no: 82 , luck: '中平', title: '孔子击磬' , text: '圣人击磬在于卫  谁料过门有荷篑\n嗟叹有心挽道穷  可怜日月今将逝'},
	{id:47, no: 83 , luck: '中平', title: '赤松子招隐' , text: '凡尘身历几时闲  世事浑如迭迭山\n既富尚忧无贵子  不知花放又花残'},
	{id:48, no: 86 , luck: '中平', title: '侃母迎宾' , text: '截发迎宾否也贫  贫中贤妇更何人\n古今只有陶侃母  所以名留万代闻'},
	{id:49, no: 87 , luck: '中平', title: '陆士龙会客' , text: '会谈华座逞英雄  究竟谁人秉大公\n一云日下荀鸣鹤 一说云间陆士龙'},
	{id:50, no: 90 , luck: '中平', title: '红拂女私奔' , text: '细整残妆夜欲奔  座中李靖更何人\n那知虬髯情钟处  拔剑三回未敢陈'},
	{id:51, no: 94 , luck: '中平', title: '髯公远走扶桑' , text: '一窟难容两虎儿  乘风别岭各栖之\n名山自守为巢穴  可免伤残后悔迟'},
	{id:52, no: 95 , luck: '中平', title: '女娲炼石补天' , text: '功勤一篑可成山  由少而多莫惮烦\n作事畏辛今汝画  补天炼石亦无难'},
	{id:53, no: 96 , luck: '中平', title: '文姬思汉' , text: '羌笛频吹韵更悲  异乡作客触归期\n南来孤雁如怜我  烦寄家书转达知'},
	{id:54, no: 97 , luck: '中平', title: '康顺钓鱼' , text: '凭栏晚眺倚南楼  满目风光景色幽\n一叶小舟频下铒  渔翁钓得有鱼无'},
	{id:55, no: 98 , luck: '中平', title: '管鲍分金' , text: '入山种玉嫌田狭  掘地寻金厌客多\n富贵贫穷天注定  世人何苦力奔波'},
	{id:56, no: 99 , luck: '中平', title: '韩文公遇害' , text: '雪拥桥头马不前  风狂渔父莫开船\n水流花谢人谁惜  早立坚心志勿偏'},

	{id:57, no: 4 , luck: '中吉', title: '董永遇仙' , text: '调雏紫燕在檐前  对语呢喃近午天\n或往或来低复起  有时剪破绿杨烟'},
	{id:58, no: 5 , luck: '中吉', title: '韩夫人惜花' , text: '东园昨夜狂风急  万紫千红亦尽倾\n幸有惜花人早起  培回根本复栽生'},
	{id:59, no: 7 , luck: '中吉', title: '仁贵归家' , text: '秋来征雁向南归  红叶纷纷满院飞\n砧捣城头声切耳  江枫如火在渔矶'},
	{id:60, no: 14 , luck: '中吉', title: '苏东坡醉酒' , text: '为爱幽闲多种竹  买春赏雨在茅屋\n醉时卧倒杏花边  怕听莺儿惊梦熟'},
	{id:61, no: 16 , luck: '中吉', title: '皇叔遇水镜' , text: '天边鸦背夕阳回  陇外儿童跨犊来\n羌笛频吹声切耳  短长腔调乐何哉'},
	{id:62, no: 17 , luck: '中吉', title: '月下追贤' , text: '秋水蒹葭白露盈  盈庭月色浸阶清\n清风吹动马铃响  响接晨钟不断声'},
	{id:63, no: 19 , luck: '中吉', title: '伏羲画八卦' , text: '乾卦三连号太阳  潜龙勿用第一章\n其中爻象能参透  百福骈臻大吉昌'},
	{id:64, no: 21 , luck: '中吉', title: '武则天赏花' , text: '天外红霞如抹锦  槛边桃杏斗新妆\n盈眸烟熳谁居首  美酒频斟且酌量'},
	{id:65, no: 34 , luck: '中吉', title: '虞舜耕田' , text: '大舜虽耕在历山  心常孝顺两嚣顽\n田中之象同家象  善恶分明即此间'},
	{id:66, no: 35 , luck: '中吉', title: '唐僧取经' , text: '天将降任此其人  筋骨先劳苦彼身\n莫谓佳景来可易  贫穷富贵有前因'},
	{id:67, no: 36 , luck: '中吉', title: '薛平贵归家' , text: '此事真如到岸船  何忧风水不相全\n举头便见前村落  屋角斜阳渺已烟'},
	{id:68, no: 38 , luck: '中吉', title: '陶渊明辞官' , text: '归去来兮仕官闭  室堪容膝亦为安\n南窗寄傲谈诗酒  倚杖徘徊饱看山'},
	{id:69, no: 39 , luck: '中吉', title: '夷齐让国' , text: '夷齐不忍食周粟  兄弟心甘采蕨餐\n让国名应垂万古  可怜饿倒首阳山'},
	{id:70, no: 41 , luck: '中吉', title: '张骞获宝石' , text: '浮槎月夜到天河  曾见天姬织锦梭\n石得支机人罕识  那知此宝出云窝'},
	{id:71, no: 42 , luck: '中吉', title: '王允献貂婵' , text: '月明散步到花栏  无策焉能剿灭奸\n幸有貂婵思定国  英雄难过美人关'},
	{id:72, no: 44 , luck: '中吉', title: '唐天宝评花' , text: '满园春色斗新妆  意似争妍夺国香\n到底是谁居丽首  牡丹艳冠百花场'},
	{id:73, no: 49 , luck: '中吉', title: '司马相如题桥' , text: '十年窗下苦功成  有志难舒愿不轻\n试看题桥十三字  生平心誓确钟情'},
	{id:74, no: 50 , luck: '中吉', title: '伍员出关' , text: '记得当年伍子胥  潜奔难渡幸逢渔\n欲将宝剑相持赠  大义交朋却不辞'},
	{id:75, no: 53 , luck: '中吉', title: '冯暧客孟尝' , text: '珠履三千客孟尝  谁人识得有鹰扬\n其中弹铗归来者  便是英雄志莫当'},
	{id:76, no: 56 , luck: '中吉', title: '吕祖桃木剑' , text: '安知此剑不成龙  见水都应出袖中\n他日飞腾千万里  上空妖娇有云从'},
	{id:77, no: 57 , luck: '中吉', title: '独占花魁' , text: '小楼春雨声初歇  徘徊街头屐不停\n忽听卖花人入巷  一枝买得慢慢行'},
	{id:78, no: 63 , luck: '中吉', title: '颜回乐道安贫' , text: '陋巷箪瓢不足愁  旁人见此甚为忧\n不知乐道忘贫乏  亚圣芳名万古留'},
	{id:79, no: 64 , luck: '中吉', title: '孟之反殿师' , text: '奔殿须知上古人  入门策马不夸能\n败师谁肯甘从后  托谓鸣马畏苦辛'},
	{id:80, no: 68 , luck: '中吉', title: '姜太公得志' , text: '久抱凌云志未舒  荷竿渭水钓游鱼\n文王千里求贤士  灭纣兴周任意如'},
	{id:81, no: 69 , luck: '中吉', title: '韩文公祭鳄鱼' , text: '忠义存心官十载  年丰民乐惠难忘\n鳄鱼毒害都能息  祷告长江北海王'},
	{id:82, no: 80 , luck: '中吉', title: '乐广释疑' , text: '飞觞对舞几时赊  弓影横杯误作蛇\n透诗中玄妙诀  泰来否极事无差'},
	{id:83, no: 81 , luck: '中吉', title: '子路拱雉' , text: '山梁雌雉得其时  上下飞鸣自乐之\n色举须知翔后集 作声三嗅过山欹'},
	{id:84, no: 84 , luck: '中吉', title: '韩信弃楚归汉' , text: '满腹奇才志未冲  铁鸡难举意无容\n张良指示身投汉  项羽乌江命自穷'},
	{id:85, no: 88 , luck: '中吉', title: '花木兰从军' , text: '替父从军胆气雄  须眉巾帼几人同\n以身报国忠而孝  笑煞当时众臣公'},
	{id:86, no: 92 , luck: '中吉', title: '孔子闻韶乐' , text: '至圣周游列国行  在齐得听奏韶乐\n三月不知嘉肉味  善哉大道可功成'},
	{id:87, no: 100 , luck: '中吉', title: '唐明皇赏花' , text: '百花竞放贺阳春  万物从今尽转新\n末数莫言穷运至  不知否极泰来临'},

	{id:88, no: 2 , luck: '上吉', title: '王道真误入桃源' , text: '枯木逢春尽发新  花看叶茂蝶来频\n桃源竞斗千红紫  一叶渔舟误入津'},
	{id:89, no: 6 , luck: '上吉', title: '王羲之归故里' , text: '一片孤帆万里回  管弦呕哑且停杯\n如云胜友谈风月  畅叙幽情极乐哉'},
	{id:90, no: 9 , luck: '上吉', title: '陶渊明赏菊' , text: '瑶琴一曲奏新腔  明月清风枕蕈凉\n咸集嘉宾同赏菊  或歌或舞或飞觞'},
	{id:91, no: 11 , luck: '上吉', title: '汉文帝赏柳' , text: '杨柳垂堤锁绿烟  日长三起又三眠\n往来紫燕纷飞舞  袅娜迎风倩我怜'},
	{id:92, no: 15 , luck: '上吉', title: '明皇游月殿' , text: '仙槎一叶泛中流  月殿蟾宫任尔游\n盈耳霓裳声暂歇  酒诗吟饮几时休'},
	{id:93, no: 25 , luck: '上吉', title: '朱洪武登基' , text: '群山扰扰朝中岳  有似与臣列鹊班\n拱立两行齐整肃  自居此地岂无欢'},
	{id:94, no: 37 , luck: '上吉', title: '东坡游赤壁' , text: '月夜秋江下钓鳌  鱼形恰似四腮鲈\n家藏旧酿堪盈斗  与友飞觞尽倒壶'},
	{id:95, no: 66 , luck: '上吉', title: '羲之会群贤' , text: '兰亭雅会众群贤  曲水流觞舍管弦\n天朗气清风惠畅  茂林修竹乐怡然'},
	{id:96, no: 78 , luck: '上吉', title: '曾点论志' , text: '瑟希铿尔尚留声  春暮时刚春服成\n冠五六人童六七  舞雩归咏畅幽情'},
	{id:97, no: 85 , luck: '上吉', title: '刘向得志' , text: '太乙燃藜照读书  十年窗下苦功舒\n扬眉吐气袍穿锦  驷马高车拥道随'},

 	{id:98, no: 91 , luck: '上上', title: '月里嫦娥' , text: '蟾宫月殿柱飘香  玉箧团圆万里光\n六水三山归镜里  无瑕一片挂穷苍'},   
	{id:99, no: 73 , luck: '上上', title: '孙霖中状元' , text: '夹道花香衬马蹄  蓝袍改换锦衣归\n满街红粉皆争羡  翘首芳名雁塔题'},
	{id:100, no: 1 , luck: '上上', title: '姜公封相' , text: '灵签求得第一枝  龙虎风云际会时\n一旦凌霄扬自乐  任君来往赴瑶池'},
]

function huandaxian(int){
	let i
	for(let c in hdxpool){
		if(between(int,hdxpool[c][0],hdxpool[c][1])){
			i = random(hdxpool[c][0],hdxpool[c][1])-1
			return hdxlq[i]
		}
	}
	return hdxlq[1]
}

export {
	hdxpool, hdxlq, huandaxian
}