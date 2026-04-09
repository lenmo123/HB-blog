// ========== 版本日志类型定义 ==========
export interface VersionLogItem {
  version: string;
  date: string;
  changes: string[];
}

export const bookList = [
  // ========== 置顶书籍 · 官网原版简介 ==========
  {
    version: "V1.0",
    title: "我在惊悚游戏里封神-壶鱼辣椒",
    author: "壶鱼辣椒",
    category: ["无限流", "耽美文"],
    finishTime: "2021-08-20",
    wordCount: "328.8万字",
    tags: ["无限流", "惊悚", "封神", "白柳"],
    platform: "晋江文学城",
    desc: "白柳在失业后被卷入一个无法停止的惊悚直播游戏中，游戏中充满了怪物与各种意想不到的恐怖规则。在死亡与恐惧的裹挟之下，他意外发现自己可以利用游戏规则牟利，就此踏入诡异的惊悚直播世界。",
    previewImages: [
      "/assets/images/neodb/preview/jingsong1.png",
      "/assets/images/neodb/preview/jingsong2.png",
      "/assets/images/neodb/preview/jingsong3.png",
      "/assets/images/neodb/preview/jingsong4.png"
    ],
    downloadUrl: ""
  },
  {
    version: "V1.0",
    title: "判官-木苏里",
    author: "木苏里",
    category: ["无限流", "耽美文", "灵异"],
    finishTime: "2020-12-31",
    wordCount: "84.3万字",
    tags: ["仙侠", "灵异", "闻时", "谢问"],
    platform: "晋江文学城",
    desc: "闻时，世人皆称他为判官。尘不见，是闻时一生的执念。年少被尘不见亲手教养，师徒二人情深不移。一场大雪封城，判官身陷笼中，千年轮回再度相逢，山河依旧，人事全非。",
    previewImages: ["判官.png"],
    downloadUrl: ""
  },
  {
    version: "V1.0",
    title: "十宗罪-蜘蛛",
    author: "蜘蛛",
    category: ["实体书", "悬疑", "灵异"],
    finishTime: "已完结",
    wordCount: "120万字",
    tags: ["悬疑", "真实案件", "刑侦"],
    platform: "湖南文艺出版社",
    desc: "本书根据真实案件改编而成，涉案地名人名均为化名。十个恐怖变态的凶杀案，就发生在我们身边，每一个都是曾被媒体严密封锁、当局讳莫如深的奇案大案。出于正义，本书作者以笔触记录黑暗，以文字警示世人。",
    previewImages: ["十宗罪.png"],
    downloadUrl: ""
  },
  {
    version: "V1.0",
    title: "云边有个小卖部-张嘉佳",
    author: "张嘉佳",
    category: ["实体书", "现实", "言情"],
    finishTime: "已完结",
    wordCount: "28万字",
    tags: ["治愈", "都市", "亲情"],
    platform: "湖南文艺出版社",
    desc: "云边小镇藏着岁月与晚风，小卖部堆起落日与温柔。少年刘三一路跌撞奔波，以为努力就能奔赴理想，最后才懂：所有人生的答案，都藏在故乡的晚风与烟火之中。",
    previewImages: ["云边有个小卖部.png"],
    downloadUrl: ""
  },
  {
    version: "V1.0",
    title: "二哈和他的白猫师尊-肉包不吃肉",
    author: "肉包不吃肉",
    category: ["玄幻", "仙侠", "耽美文"],
    finishTime: "2020-01-01",
    wordCount: "186万字",
    tags: ["仙侠", "虐文", "墨燃", "楚晚宁"],
    platform: "晋江文学城",
    desc: "修真帝君墨燃浴火重生，重回年少拜师之时。一世爱恨错位，两世执念纠缠，滔天恨意之下藏着无人知晓的深情与辜负，轮回辗转，终渡相思苦海。",
    previewImages: ["二哈和他的白猫师尊.png"],
    downloadUrl: ""
  },
  {
    version: "V1.0",
    title: "重燃-奥尔良烤鲟鱼堡",
    author: "奥尔良烤鲟鱼堡",
    category: ["都市", "现实"],
    finishTime: "2020-01-15",
    wordCount: "289万字",
    tags: ["都市", "重生", "日常"],
    platform: "起点中文网",
    desc: "辗转岁月，重回青涩少年时代。前世留有万般遗憾，今生步履不改初心，旧日遗憾尽数弥补，奔赴崭新人生。",
    previewImages: ["重燃.png"],
    downloadUrl: ""
  },
  {
    version: "V1.0",
    title: "人鱼陷落-麟潜",
    author: "麟潜",
    category: ["耽美文"],
    finishTime: "2022-04-15",
    wordCount: "136.5万字",
    tags: ["ABO", "都市", "白楚年", "兰波"],
    platform: "长佩文学",
    desc: "顶尖战术指挥白楚年，遇上战力爆表的突击手兰波。硝烟之下情愫生根，跨越隔阂与伤痛，一句执念相守：我属于你，你也归我。",
    previewImages: ["人鱼陷落.png"],
    downloadUrl: ""
  },
  {
    version: "V1.0",
    title: "不负如来不负卿-小春",
    author: "小春",
    category: ["历史", "言情", "女频文"],
    finishTime: "已完结",
    wordCount: "80万字",
    tags: ["历史", "穿越", "爱情", "言情"],
    platform: "晋江文学城",
    desc: "科研人员艾晴作为实验对象，数次穿越时空，跨越岁月风沙邂逅一代高僧鸠摩罗什。红尘佛法两相难，一场跨越时空的相逢，缘起缘落，一念三生。",
    previewImages: ["不负如来不负卿.png"],
    downloadUrl: ""
  },
  {
    version: "V1.0",
    title: "银河英雄传说-田中芳树",
    author: "田中芳树",
    category: ["实体书", "科幻"],
    finishTime: "已完结",
    wordCount: "280万字",
    tags: ["科幻", "史诗", "宇宙"],
    platform: "北京十月文艺出版社",
    desc: "浩瀚星河绵延万里，银河帝国与自由同盟对峙百年。群雄逐鹿星海，战火横跨星系，谱写一部跨越千年、起落沉浮的星际英雄史诗。",
    previewImages: ["银河英雄传说.png"],
    downloadUrl: ""
  },
  {
    version: "V1.0",
    title: "全能游戏设计师-青衫取醉",
    author: "青衫取醉",
    category: ["游戏", "系统流"],
    finishTime: "2020-05-10",
    wordCount: "215万字",
    tags: ["游戏", "系统", "都市"],
    platform: "起点中文网",
    desc: "穿越平行世界，成为一名默默无闻的游戏设计师。绑定全能设计系统之后，主角匠心打造爆款作品，一步步征服全球玩家，掀起游戏行业浪潮。",
    previewImages: ["全能游戏设计师.png"],
    downloadUrl: ""
  },
  {
    version: "V1.0",
    title: "法医秦明：尸语者（上）-法医秦明",
    author: "法医秦明",
    category: ["实体书", "悬疑", "侦探"],
    finishTime: "已完结",
    wordCount: "17.5万字",
    tags: ["法医", "刑侦", "真实案件"],
    platform: "漓江出版社",
    desc: "尸无言，可诉真相。一线法医亲历案件实录，剖开凶案背后隐藏的蛛丝马迹，以尸体为证，让死者开口，揭露尘封暗处的罪恶。",
    previewImages: ["法医秦明：尸语者（上）.png"],
    downloadUrl: ""
  },
  {
    version: "V1.0",
    title: "法医秦明：尸语者（下）-法医秦明",
    author: "法医秦明",
    category: ["实体书", "悬疑", "侦探"],
    finishTime: "已完结",
    wordCount: "17.5万字",
    tags: ["法医", "刑侦", "真实案件"],
    platform: "漓江出版社",
    desc: "荒山无名残尸、深夜灭门惨案、河道漂浮亡魂，一桩桩诡异凶案暗藏杀机。以专业刑侦手法破解谜案，拨开迷雾，还原案件真相。",
    previewImages: ["法医秦明：尸语者（下）.png"],
    downloadUrl: ""
  },
  // 【新增】红与黑，位于尸语者（下）之后、黄金瞳之前
  {
    version: "V1.0",
    title: "红与黑-司汤达",
    author: "司汤达",
    category: ["实体书", "文学", "外国名著"],
    finishTime: "已完结",
    wordCount: "41万字",
    tags: ["名著", "外国文学", "现实主义", "阶级"],
    platform: "上海译文出版社",
    desc: "以主人公于连的人生挣扎为主线，讲述平民青年追逐名利、反抗阶级桎梏的悲剧一生，刻画十九世纪法国社会的阶级矛盾与人世浮华，一部经典现实主义文学名著。",
    previewImages: ["红与黑.png"],
    downloadUrl: ""
  },
  {
    version: "V1.0",
    title: "黄金瞳-打眼",
    author: "打眼",
    category: ["都市异能"],
    finishTime: "2012-04-01",
    wordCount: "421万字",
    tags: ["都市", "鉴宝", "异能"],
    platform: "起点中文网",
    desc: "普通典当行职员遭遇意外，双眼觉醒透视异能。古玩珍宝一眼辨真假，玉石赌石一眼窥内里，自此纵横收藏界，步步踏上人生巅峰。",
    previewImages: ["黄金瞳.png"],
    downloadUrl: ""
  },
  {
    version: "V1.0",
    title: "晚明-柯山梦",
    author: "柯山梦",
    category: ["历史"],
    finishTime: "2014-01-01",
    wordCount: "486万字",
    tags: ["历史", "明末", "战争"],
    platform: "起点中文网",
    desc: "风雨飘摇，明末乱世将至。一介小人物跌落时代洪流，于乱世夹缝求生，筹谋布局、练兵卫国，逆流而上重振汉家山河荣光。",
    previewImages: ["晚明.png"],
    downloadUrl: ""
  },
  {
    version: "V1.0",
    title: "绍宋-榴弹怕水",
    author: "榴弹怕水",
    category: ["历史"],
    finishTime: "2022-05-26",
    wordCount: "321万字",
    tags: ["历史", "宋朝", "争霸"],
    platform: "起点中文网",
    desc: "魂穿南宋赵构，恰逢靖康国难，山河破碎。摒弃苟安逃亡，帝王亲征拒敌，收复沦陷故土，重整大宋河山。",
    previewImages: ["绍宋.png"],
    downloadUrl: ""
  },
  {
    version: "V1.0",
    title: "我师兄实在太稳健了-言归正传",
    author: "言归正传",
    category: ["仙侠"],
    finishTime: "2021-03-01",
    wordCount: "369万字",
    tags: ["仙侠", "搞笑", "稳健"],
    platform: "起点中文网",
    desc: "穿越修仙宗门，深知乱世祸端，不求锋芒万丈，只求步步稳健。低调发育、避祸藏拙，苟住前路山河，安稳登顶仙道巅峰。",
    previewImages: ["我师兄实在太稳健了.png"],
    downloadUrl: ""
  },
  {
    version: "V1.0",
    title: "深空彼岸-辰东",
    author: "辰东",
    category: ["玄幻", "科幻"],
    finishTime: "2024-04-19",
    wordCount: "368万字",
    tags: ["玄幻", "修真", "深空"],
    platform: "起点中文网",
    desc: "浩瀚宇宙无垠漂泊，万族林立暗流涌动。跨越星海奔赴深空秘境，探索古老文明遗迹，征战域外强敌，谱写跨越星河的修行传说。",
    previewImages: ["深空彼岸.png"],
    downloadUrl: ""
  },
  {
    version: "V1.0",
    title: "修真界败类-跃千愁",
    author: "跃千愁",
    category: ["玄幻", "仙侠"],
    finishTime: "2013-01-21",
    wordCount: "658万字",
    tags: ["玄幻", "修真", "搞笑"],
    platform: "起点中文网",
    desc: "市井无赖意外重生踏入仙途，行事不拘礼法，游走正邪之间，被修真界视作败类。一路嬉笑怒骂，逆势崛起，走出一条独一无二逆天仙路。",
    previewImages: ["修真界败类.png"],
    downloadUrl: ""
  },
  {
    version: "V1.0",
    title: "沧元图-我吃西红柿",
    author: "我吃西红柿",
    category: ["玄幻"],
    finishTime: "2021-03-01",
    wordCount: "356万字",
    tags: ["玄幻", "东方玄幻", "热血"],
    platform: "起点中文网",
    desc: "妖魔横行人间，苍生流离苦难。少年孟川身负守护之责，修行悟道、斩妖除魔，以一己之力守护故土亲友，踏上热血斩魔之路。",
    previewImages: ["沧元图.png"],
    downloadUrl: ""
  },
  {
    version: "V1.0",
    title: "求魔-耳根",
    author: "耳根",
    category: ["玄幻", "仙侠"],
    finishTime: "2013-12-28",
    wordCount: "459万字",
    tags: ["玄幻", "修真", "虐主"],
    platform: "起点中文网",
    desc: "一世修行半生飘零，命运浮沉苦海难渡。桑梓故土辗转流离，宿命枷锁层层缠身，踏遍苍茫仙魔路，一念情深，不恋凡尘仙道。",
    previewImages: ["求魔.png"],
    downloadUrl: ""
  },
  {
    version: "V1.0",
    title: "吞噬星空-我吃西红柿",
    author: "我吃西红柿",
    category: ["玄幻", "科幻"],
    finishTime: "2012-07-25",
    wordCount: "478万字",
    tags: ["玄幻", "科幻修真", "宇宙"],
    platform: "起点中文网",
    desc: "灾变降临地球，人类武道崛起。少年罗峰踏上修行之路，挣脱星球桎梏，远赴浩瀚宇宙征战异族，一路成长，登临宇宙武道之巅。",
    previewImages: ["吞噬星空.png"],
    downloadUrl: ""
  },
  {
    version: "V1.0",
    title: "佣兵的战争-水如意",
    author: "水如意",
    category: ["都市", "现实"],
    finishTime: "2017-05-08",
    wordCount: "286万字",
    tags: ["都市", "佣兵", "战争"],
    platform: "起点中文网",
    desc: "普通华夏青年远赴海外，踏入战火纷飞的异国战场，化身漂泊佣兵，在硝烟与危机之中挣扎求生，以热血铸就乱世传奇。",
    previewImages: ["佣兵的战争.png"],
    downloadUrl: ""
  },
  {
    version: "V1.0",
    title: "邪气凛然-跳舞",
    author: "跳舞",
    category: ["都市"],
    finishTime: "2008-01-25",
    wordCount: "235万字",
    tags: ["都市", "黑道", "爽文"],
    platform: "起点中文网",
    desc: "平凡市井小人物偶遇奇遇，一枚奇异戒指扭转命运轨迹。从此前路风云变幻，纵横都市江湖，快意恩仇，逆风改写人生。",
    previewImages: ["邪气凛然.png"],
    downloadUrl: ""
  },
  {
    version: "V1.0",
    title: "我的老千生涯-腾飞",
    author: "腾飞",
    category: ["实体书", "都市", "现实"],
    finishTime: "已完结",
    wordCount: "120万字",
    tags: ["都市", "老千", "纪实"],
    platform: "九州出版社",
    desc: "作者亲身经历实录，揭开地下赌场不为人知的内幕。曝光千术套路、江湖骗局，还原灰色地带的尔虞我诈与黑暗浮沉。",
    previewImages: ["我的老千生涯4部曲.png"],
    downloadUrl: ""
  },
  {
    version: "V1.0",
    title: "禁区之狐-林海听涛",
    author: "林海听涛",
    category: ["都市", "现实"],
    finishTime: "2024-08-22",
    wordCount: "425万字",
    tags: ["都市", "足球", "体育"],
    platform: "起点中文网",
    desc: "绿茵赛场之上，他是禁区之中最凌厉的猎手。精准射门、绝杀赛场，以一粒粒进球征服足坛，成为万众瞩目的禁区之王。",
    previewImages: ["禁区之狐.png"],
    downloadUrl: ""
  },
  {
    version: "V1.0",
    title: "神话禁区-何处不染尘",
    author: "何处不染尘",
    category: ["都市异能", "灵异"],
    finishTime: "2020-11-02",
    wordCount: "321万字",
    tags: ["都市", "异能", "神话"],
    platform: "起点中文网",
    desc: "现代都市突现神秘禁地，上古神话遗迹重现人间。主角觉醒特殊异能，深入禁区探索秘境，一步步揭开尘封万年的神话真相。",
    previewImages: ["神话禁区.png"],
    downloadUrl: ""
  },
  {
    version: "V1.0",
    title: "亏成首富从游戏开始-青衫取醉",
    author: "青衫取醉",
    category: ["游戏", "系统流"],
    finishTime: "2022-07-25",
    wordCount: "382万字",
    tags: ["都市", "系统", "搞笑", "游戏"],
    platform: "起点中文网",
    desc: "穿越平行世界绑定亏钱致富系统，亏损越多奖励越高。主角一心亏本做烂游戏，奈何作品火爆出圈，上演一出哭笑不得的致富闹剧。",
    previewImages: ["亏成首富从游戏开始.png"],
    downloadUrl: ""
  },
  {
    version: "V1.0",
    title: "权财-尝谕",
    author: "尝谕",
    category: ["都市异能"],
    finishTime: "2013-11-11",
    wordCount: "568万字",
    tags: ["都市", "官场", "异能"],
    platform: "起点中文网",
    desc: "意外觉醒读心预知异能，看透人心祸福，洞察世事走向。辗转官商两界，审时度势步步为营，一路扶摇直上，手握权财风生水起。",
    previewImages: ["权财.png"],
    downloadUrl: ""
  },
  {
    version: "V1.0",
    title: "超级教练-陈爱庭",
    category: ["都市", "现实"],
    author: "陈爱庭",
    finishTime: "2013-08-20",
    wordCount: "452万字",
    tags: ["都市", "足球", "教练"],
    platform: "起点中文网",
    desc: "华夏教练远赴欧洲足坛，深耕赛场布局战术。带领无名弱队逆袭夺冠，一步步站上世界足坛顶峰，铸就传奇执教生涯。",
    previewImages: ["超级教练.png"],
    downloadUrl: ""
  },
  {
    version: "V1.0",
    title: "饲养全人类-三百斤的微笑",
    author: "三百斤的微笑",
    category: ["系统流"],
    finishTime: "2021-09-15",
    wordCount: "365万字",
    tags: ["都市", "系统", "养成"],
    platform: "起点中文网",
    desc: "执掌一方世界，俯瞰文明演化。化身幕后主宰，培育人族文明，见证种族从蛮荒起步，一路繁衍迭代，直至登临神级文明。",
    previewImages: ["饲养全人类.png"],
    downloadUrl: ""
  },
  {
    version: "V1.0",
    title: "仙寥-中原五百",
    author: "中原五百",
    category: ["仙侠"],
    finishTime: "已完结",
    wordCount: "385万字",
    tags: ["仙侠", "修真"],
    platform: "起点中文网",
    desc: "资质平庸凡尘少年，无天赋无靠山，固守本心潜心修行。踏遍仙山云海，借机缘、积道果，于凡尘之中走出一条踏实稳健的凡流仙路。",
    previewImages: ["仙寥.png"],
    downloadUrl: ""
  },
  {
    version: "V1.0",
    title: "我在人间立地成仙-任我笑",
    author: "任我笑",
    category: ["仙侠"],
    finishTime: "2022-01-20",
    wordCount: "426万字",
    tags: ["仙侠", "成仙", "爽文"],
    platform: "起点中文网",
    desc: "修行不问九天飞升，大道只在俗世人间。主角扎根红尘修行，不历天劫、不登仙阙，于人间悟道成真，逍遥尘世，万古长青。",
    previewImages: ["我在人间立地成仙.png"],
    downloadUrl: ""
  },
  {
    version: "V1.0",
    title: "极度尸寒-全雨",
    author: "全雨",
    category: ["灵异"],
    finishTime: "2013-08-15",
    wordCount: "256万字",
    tags: ["灵异", "恐怖", "尸"],
    platform: "起点中文网",
    desc: "阴气遍布四野，尸煞横行人间。幽冥诡事层出不穷，尸妖鬼魅四处游荡，主角深陷阴冷绝境，在无边恐怖之中艰难求生。",
    previewImages: ["极度尸寒.png"],
    downloadUrl: ""
  },
  {
    version: "V1.0",
    title: "诡异复苏：我能化身大妖-叶落归泥",
    author: "叶落归泥",
    category: ["灵异"],
    finishTime: "2022-09-09",
    wordCount: "321万字",
    tags: ["灵异", "诡异", "大妖"],
    platform: "番茄小说",
    desc: "世间诡异复苏，凶煞鬼怪现世作乱，人间沦为危局。主角掌握化妖之力，化身上古大妖，斩除邪祟，镇守一方安宁。",
    previewImages: ["诡异复苏：我能化身大妖.png"],
    downloadUrl: ""
  },
  {
    version: "V1.0",
    title: "我有一座恐怖屋-我会修空调",
    author: "我会修空调",
    category: ["灵异"],
    finishTime: "2019-12-31",
    wordCount: "421万字",
    tags: ["灵异", "恐怖", "经营"],
    platform: "起点中文网",
    desc: "继承一间临街老旧恐怖屋，屋内藏有无数诡秘传闻。解锁凶案场景、收纳灵异鬼怪，经营专属恐怖屋，行走阴阳边界之间。",
    previewImages: ["我有一座恐怖屋.png"],
    downloadUrl: ""
  },
  {
    version: "V1.0",
    title: "天灾，我囤几十亿物资在末世求生-袅袅鱼音",
    author: "袅袅鱼音",
    category: ["科幻", "末日"],
    finishTime: "连载中",
    wordCount: "286万字",
    tags: ["末日", "囤货", "求生"],
    platform: "起点中文网",
    desc: "预知全球天灾降临，末世寒冬将至。提前囤积数十亿物资，打造安全庇护所，在灾害横行、秩序崩塌的末世之中安稳求生。",
    previewImages: ["天灾，我囤几十亿物资在末世求生.png"],
    downloadUrl: ""
  },
  {
    version: "V1.0",
    title: "末日蟑螂-伟岸蟑螂",
    author: "伟岸蟑螂",
    category: ["科幻", "末日"],
    finishTime: "2014-01-01",
    wordCount: "526万字",
    tags: ["末日", "丧尸", "求生"],
    platform: "起点中文网",
    desc: "丧尸病毒席卷全球，文明秩序一朝崩塌。乱世之中众生挣扎，小人物艰难求生，收拢同伴建立据点，守护幸存者对抗末世危机。",
    previewImages: ["末日蟑螂.png"],
    downloadUrl: ""
  },
  {
    version: "V1.0",
    title: "陨神记-半醉游子",
    author: "半醉游子",
    category: ["科幻", "末日"],
    finishTime: "2018-05-20",
    wordCount: "312万字",
    tags: ["末日", "废土", "科幻"],
    platform: "起点中文网",
    desc: "诸神陨落，世界沦为荒芜废土。人类挣扎在残破大地之上，危机四伏前路难行，主角觉醒力量，一路探寻诸神陨落的世界真相。",
    previewImages: ["陨神.png"],
    downloadUrl: ""
  },
  {
    version: "V1.0",
    title: "上品寒士-贼道三痴",
    author: "贼道三痴",
    category: ["历史"],
    finishTime: "2010-10-01",
    wordCount: "215万字",
    tags: ["历史", "东晋", "文青"],
    platform: "起点中文网",
    desc: "一朝穿越东晋乱世，寒门子弟立足士族当道的时代。落笔写诗风流一世，游走山水之间，书写属于魏晋的风雅流年。",
    previewImages: ["上品寒士.png"],
    downloadUrl: ""
  },
  {
    version: "V1.0",
    title: "汉鼎余烟-蟹的心",
    author: "蟹的心",
    category: ["历史"],
    finishTime: "2022-01-25",
    wordCount: "241万字",
    tags: ["历史", "汉朝"],
    platform: "起点中文网",
    desc: "汉末乱世，群雄并起，主角崛起于微末，重整山河，延续大汉国运。",
    previewImages: ["汉鼎余烟.png"],
    downloadUrl: ""
  },
  {
    version: "V1.0",
    title: "医统江山-石章鱼",
    author: "石章鱼",
    category: ["历史"],
    finishTime: "2016-08-01",
    wordCount: "586万字",
    tags: ["历史", "医术", "争霸"],
    platform: "起点中文网",
    desc: "穿越古代，凭借绝世医术，治病救人，纵横官场，一统江山。",
    previewImages: ["医统江山.png"],
    downloadUrl: ""
  },
  {
    version: "V1.0",
    title: "草清-草上匪",
    author: "草上匪",
    category: ["历史"],
    finishTime: "2013-05-01",
    wordCount: "489万字",
    tags: ["历史", "清朝", "种田"],
    platform: "起点中文网",
    desc: "穿越清朝末年，种田发展，推翻满清，建立新的华夏帝国。",
    previewImages: ["草清.png"],
    downloadUrl: ""
  },
  {
    version: "V1.0",
    title: "北宋小厨师-南希北庆",
    author: "南希北庆",
    category: ["历史"],
    finishTime: "2017-01-01",
    wordCount: "452万字",
    tags: ["历史", "北宋", "美食"],
    platform: "起点中文网",
    desc: "穿越北宋，成为小厨师，用现代美食征服古代权贵，美食历史文。",
    previewImages: ["北宋小厨师.png"],
    downloadUrl: ""
  },
  {
    version: "V1.0",
    title: "明末工程师-米酿",
    author: "米酿",
    category: ["历史"],
    finishTime: "2019-07-01",
    wordCount: "365万字",
    tags: ["历史", "明末", "工业"],
    platform: "起点中文网",
    desc: "穿越明末，用现代工业知识，造枪炮、兴工业，挽救大明江山。",
    previewImages: ["明末工程师.png"],
    downloadUrl: ""
  },
  {
    version: "V1.0",
    title: "小阁老-三戒大师",
    author: "三戒大师",
    category: ["历史"],
    finishTime: "2020-01-10",
    wordCount: "365万字",
    tags: ["历史", "明朝", "官场"],
    platform: "起点中文网",
    desc: "穿越明朝，成为内阁首辅之子，玩转官场，权倾天下，辅佐明君。",
    previewImages: ["小阁老.png"],
    downloadUrl: ""
  },
  {
    version: "V1.0",
    title: "吕布的人生模拟器-会说话的胡子",
    author: "会说话的胡子",
    category: ["历史", "系统流"],
    finishTime: "2022-08-01",
    wordCount: "321万字",
    tags: ["历史", "三国", "模拟器"],
    platform: "起点中文网",
    desc: "吕布觉醒人生模拟器，模拟不同人生，改变三姓家奴的命运，称霸三国。",
    previewImages: ["吕布的人生模拟器.png"],
    downloadUrl: ""
  },
  {
    version: "V1.0",
    title: "僵尸之邪恶道士-茄子豆角",
    author: "茄子豆角",
    category: ["灵异", "同人"],
    finishTime: "已完结",
    wordCount: "241万字",
    tags: ["僵尸", "同人", "道士"],
    platform: "飞卢小说网",
    desc: "林正英僵尸世界同人，主角成为邪恶道士，修炼邪术，收服僵尸，纵横阴阳两界。",
    previewImages: ["僵尸之邪恶道士.png"],
    downloadUrl: ""
  },
  {
    version: "V1.0",
    title: "我真没想当训练家啊-北川南海",
    author: "北川南海",
    category: ["二次元", "同人"],
    finishTime: "2023-12-01",
    wordCount: "286万字",
    tags: ["精灵宝可梦", "同人", "训练家"],
    platform: "起点中文网",
    desc: "穿越宝可梦世界，只想安稳生活，却被迫成为最强训练家。",
    previewImages: ["我真没想当训练家啊.png"],
    downloadUrl: ""
  },
  {
    version: "V1.0",
    title: "精灵掌门人-轻泉流响",
    author: "轻泉流响",
    category: ["二次元", "同人"],
    finishTime: "2021-01-10",
    wordCount: "321万字",
    tags: ["精灵宝可梦", "同人", "养成"],
    platform: "起点中文网",
    desc: "现代都市精灵文，主角成为精灵掌门人，培养精灵，守护城市，成为传奇。",
    previewImages: ["精灵掌门人.png"],
    downloadUrl: ""
  },
  {
    version: "V1.0",
    title: "这次不当训练家了-骑车的风",
    author: "骑车的风",
    category: ["二次元", "同人"],
    finishTime: "连载中",
    wordCount: "186万字",
    tags: ["精灵宝可梦", "同人"],
    platform: "起点中文网",
    desc: "厌倦了训练家生活，转行做精灵研究员，开启全新的宝可梦人生。",
    previewImages: ["这次不当训练家了.png"],
    downloadUrl: ""
  },
  {
    version: "V1.0",
    title: "无尽武装-缘分0",
    author: "缘分0",
    category: ["无限流"],
    finishTime: "2014-01-01",
    wordCount: "652万字",
    tags: ["无限流", "无限", "武装"],
    platform: "起点中文网",
    desc: "无限流经典，主角进入无数世界，完成任务，强化自身，打造最强武装，征战诸天。",
    previewImages: ["无尽武装.png"],
    downloadUrl: ""
  },
  {
    version: "V1.0",
    title: "檀香刑-莫言",
    author: "莫言",
    category: ["实体书", "文学"],
    finishTime: "已完结",
    wordCount: "32万字",
    tags: ["文学", "莫言", "乡土"],
    platform: "上海文艺出版社",
    desc: "莫言经典长篇小说，以清末胶东半岛为背景，讲述一场惊心动魄的檀香刑，刻画人性与命运。",
    previewImages: ["檀香刑.png"],
    downloadUrl: ""
  },
  {
    version: "V1.0",
    title: "怪物大师1：穿越时空的怪物果实-雷欧幻想",
    author: "雷欧幻想",
    category: ["实体书", "少儿"],
    finishTime: "已完结",
    wordCount: "15万字",
    tags: ["儿童文学", "冒险", "怪物"],
    platform: "接力出版社",
    desc: "专为少年儿童创作的冒险小说，主角与怪物伙伴一起，穿越时空，寻找怪物果实，勇敢成长。",
    previewImages: ["怪物大师1：穿越时空的怪物果实.png"],
    downloadUrl: ""
  }
];

// ========== 每本书独立版本日志（方案二：纯书名key版） ==========
export const bookVersionLogs: Record<string, VersionLogItem[]> = {
  "我在惊悚游戏里封神": [
    {
      version: "V1.0",
      date: "2026-03-20",
      changes: [
        "书籍内容完整整理上线",
        "发布多看版本，适配专属排版",
        "发布Kindle版本，适配电纸书设备",
        "发布墨水屏版本，护眼阅读优化",
        "发布平板版本，大屏阅读体验升级"
      ]
    }
  ],
  "判官": [
    {
      version: "V1.0",
      date: "2026-03-20",
      changes: [
        "全书内容完整收录，无删减",
        "上线多看版本，章节排版优化",
        "上线Kindle版本，适配设备显示",
        "上线墨水屏版本，长时间阅读更舒适",
        "上线平板版本，沉浸式阅读适配"
      ]
    }
  ],
  "二哈和他的白猫师尊": [
    {
      version: "V1.0",
      date: "2026-03-20",
      changes: [
        "完整剧情整理完毕，正式上线",
        "多看版本：阅读排版优化",
        "Kindle版本：设备适配优化",
        "墨水屏版本：护眼显示适配",
        "平板版本：大屏布局优化"
      ]
    }
  ],
  "不负如来不负卿": [
    {
      version: "V1.0",
      date: "2026-03-20",
      changes: [
        "书籍正式发布，内容完整校对",
        "发布多看版本，阅读体验优化",
        "发布Kindle版本，适配电纸书",
        "发布墨水屏版本，护眼适配",
        "发布平板版本，大屏阅读优化"
      ]
    }
  ],
  "人鱼陷落": [
    {
      version: "V1.0",
      date: "2026-03-20",
      changes: [
        "全书内容完整上线",
        "多看版本：专属排版优化",
        "Kindle版本：设备显示适配",
        "墨水屏版本：护眼阅读适配",
        "平板版本：大屏沉浸式体验"
      ]
    }
  ],
  "法医秦明：尸语者（上）": [
    {
      version: "V1.0",
      date: "2026-03-20",
      changes: [
        "书籍内容完整整理发布",
        "多看版本：阅读排版优化",
        "Kindle版本：电纸书设备适配",
        "墨水屏版本：护眼模式适配",
        "平板版本：大屏显示优化"
      ]
    }
  ],
  "法医秦明：尸语者（下）": [
    {
      version: "V1.0",
      date: "2026-03-20",
      changes: [
        "全书内容完整收录，剧情连贯",
        "多看版本：章节排版优化",
        "Kindle版本：设备适配优化",
        "墨水屏版本：护眼阅读适配",
        "平板版本：大屏阅读体验升级"
      ]
    }
  ],
  // 新增：红与黑，日志和惊悚游戏里封神完全一致
  "红与黑": [
    {
      version: "V1.0",
      date: "2026-03-20",
      changes: [
        "书籍内容完整整理上线",
        "发布多看版本，适配专属排版",
        "发布Kindle版本，适配电纸书设备",
        "发布墨水屏版本，护眼阅读优化",
        "发布平板版本，大屏阅读体验升级"
      ]
    }
  ],
  "全能游戏设计师": [
    {
      version: "V1.0",
      date: "2026-03-20",
      changes: [
        "书籍正式上线，内容完整整理",
        "多看版本：阅读排版优化",
        "Kindle版本：电纸书适配",
        "墨水屏版本：护眼显示适配",
        "平板版本：大屏布局优化"
      ]
    }
  ],
  // 其余所有书籍：统一 2026-04-08 + 多看版本
  "十宗罪": [
    { version: "V1.0", date: "2026-04-08", changes: ["书籍信息初始化", "完善简介与封面", "发布多看版本"] }
  ],
  "云边有个小卖部": [
    { version: "V1.0", date: "2026-04-08", changes: ["书籍信息初始化", "完善简介与封面", "发布多看版本"] }
  ],
  "重燃": [
    { version: "V1.0", date: "2026-04-08", changes: ["书籍信息初始化", "完善简介与封面", "发布多看版本"] }
  ],
  "银河英雄传说": [
    { version: "V1.0", date: "2026-04-08", changes: ["书籍信息初始化", "完善简介与封面", "发布多看版本"] }
  ],
  "黄金瞳": [
    { version: "V1.0", date: "2026-04-08", changes: ["书籍信息初始化", "完善简介与封面", "发布多看版本"] }
  ],
  "晚明": [
    { version: "V1.0", date: "2026-04-08", changes: ["书籍信息初始化", "完善简介与封面", "发布多看版本"] }
  ],
  "绍宋": [
    { version: "V1.0", date: "2026-04-08", changes: ["书籍信息初始化", "完善简介与封面", "发布多看版本"] }
  ],
  "我师兄实在太稳健了": [
    { version: "V1.0", date: "2026-04-08", changes: ["书籍信息初始化", "完善简介与封面", "发布多看版本"] }
  ],
  "深空彼岸": [
    { version: "V1.0", date: "2026-04-08", changes: ["书籍信息初始化", "完善简介与封面", "发布多看版本"] }
  ],
  "修真界败类": [
    { version: "V1.0", date: "2026-04-08", changes: ["书籍信息初始化", "完善简介与封面", "发布多看版本"] }
  ],
  "沧元图": [
    { version: "V1.0", date: "2026-04-08", changes: ["书籍信息初始化", "完善简介与封面", "发布多看版本"] }
  ],
  "求魔": [
    { version: "V1.0", date: "2026-04-08", changes: ["书籍信息初始化", "完善简介与封面", "发布多看版本"] }
  ],
  "吞噬星空": [
    { version: "V1.0", date: "2026-04-08", changes: ["书籍信息初始化", "完善简介与封面", "发布多看版本"] }
  ],
  "佣兵的战争": [
    { version: "V1.0", date: "2026-04-08", changes: ["书籍信息初始化", "完善简介与封面", "发布多看版本"] }
  ],
  "邪气凛然": [
    { version: "V1.0", date: "2026-04-08", changes: ["书籍信息初始化", "完善简介与封面", "发布多看版本"] }
  ],
  "我的老千生涯4部曲": [
    { version: "V1.0", date: "2026-04-08", changes: ["书籍信息初始化", "完善简介与封面", "发布多看版本"] }
  ],
  "禁区之狐": [
    { version: "V1.0", date: "2026-04-08", changes: ["书籍信息初始化", "完善简介与封面", "发布多看版本"] }
  ],
  "神话禁区": [
    { version: "V1.0", date: "2026-04-08", changes: ["书籍信息初始化", "完善简介与封面", "发布多看版本"] }
  ],
  "亏成首富从游戏开始": [
    { version: "V1.0", date: "2026-04-08", changes: ["书籍信息初始化", "完善简介与封面", "发布多看版本"] }
  ],
  "权财": [
    { version: "V1.0", date: "2026-04-08", changes: ["书籍信息初始化", "完善简介与封面", "发布多看版本"] }
  ],
  "超级教练": [
    { version: "V1.0", date: "2026-04-08", changes: ["书籍信息初始化", "完善简介与封面", "发布多看版本"] }
  ],
  "饲养全人类": [
    { version: "V1.0", date: "2026-04-08", changes: ["书籍信息初始化", "完善简介与封面", "发布多看版本"] }
  ],
  "仙寥": [
    { version: "V1.0", date: "2026-04-08", changes: ["书籍信息初始化", "完善简介与封面", "发布多看版本"] }
  ],
  "我在人间立地成仙": [
    { version: "V1.0", date: "2026-04-08", changes: ["书籍信息初始化", "完善简介与封面", "发布多看版本"] }
  ],
  "极度尸寒": [
    { version: "V1.0", date: "2026-04-08", changes: ["书籍信息初始化", "完善简介与封面", "发布多看版本"] }
  ],
  "诡异复苏：我能化身大妖": [
    { version: "V1.0", date: "2026-04-08", changes: ["书籍信息初始化", "完善简介与封面", "发布多看版本"] }
  ],
  "我有一座恐怖屋": [
    { version: "V1.0", date: "2026-04-08", changes: ["书籍信息初始化", "完善简介与封面", "发布多看版本"] }
  ],
  "天灾，我囤几十亿物资在末世求生": [
    { version: "V1.0", date: "2026-04-08", changes: ["书籍信息初始化", "完善简介与封面", "发布多看版本"] }
  ],
  "末日蟑螂": [
    { version: "V1.0", date: "2026-04-08", changes: ["书籍信息初始化", "完善简介与封面", "发布多看版本"] }
  ],
  "陨神记": [
    { version: "V1.0", date: "2026-04-08", changes: ["书籍信息初始化", "完善简介与封面", "发布多看版本"] }
  ],
  "上品寒士": [
    { version: "V1.0", date: "2026-04-08", changes: ["书籍信息初始化", "完善简介与封面", "发布多看版本"] }
  ],
  "汉鼎余烟": [
    { version: "V1.0", date: "2026-04-08", changes: ["书籍信息初始化", "完善简介与封面", "发布多看版本"] }
  ],
  "医统江山": [
    { version: "V1.0", date: "2026-04-08", changes: ["书籍信息初始化", "完善简介与封面", "发布多看版本"] }
  ],
  "草清": [
    { version: "V1.0", date: "2026-04-08", changes: ["书籍信息初始化", "完善简介与封面", "发布多看版本"] }
  ],
  "北宋小厨师": [
    { version: "V1.0", date: "2026-04-08", changes: ["书籍信息初始化", "完善简介与封面", "发布多看版本"] }
  ],
  "明末工程师": [
    { version: "V1.0", date: "2026-04-08", changes: ["书籍信息初始化", "完善简介与封面", "发布多看版本"] }
  ],
  "小阁老": [
    { version: "V1.0", date: "2026-04-08", changes: ["书籍信息初始化", "完善简介与封面", "发布多看版本"] }
  ],
  "吕布的人生模拟器": [
    { version: "V1.0", date: "2026-04-08", changes: ["书籍信息初始化", "完善简介与封面", "发布多看版本"] }
  ],
  "僵尸之邪恶道士": [
    { version: "V1.0", date: "2026-04-08", changes: ["书籍信息初始化", "完善简介与封面", "发布多看版本"] }
  ],
  "我真没想当训练家啊": [
    { version: "V1.0", date: "2026-04-08", changes: ["书籍信息初始化", "完善简介与封面", "发布多看版本"] }
  ],
  "精灵掌门人": [
    { version: "V1.0", date: "2026-04-08", changes: ["书籍信息初始化", "完善简介与封面", "发布多看版本"] }
  ],
  "这次不当训练家了": [
    { version: "V1.0", date: "2026-04-08", changes: ["书籍信息初始化", "完善简介与封面", "发布多看版本"] }
  ],
  "无尽武装": [
    { version: "V1.0", date: "2026-04-08", changes: ["书籍信息初始化", "完善简介与封面", "发布多看版本"] }
  ],
  "檀香刑": [
    { version: "V1.0", date: "2026-04-08", changes: ["书籍信息初始化", "完善简介与封面", "发布多看版本"] }
  ],
  "怪物大师1：穿越时空的怪物果实": [
    { version: "V1.0", date: "2026-04-08", changes: ["书籍信息初始化", "完善简介与封面", "发布多看版本"] }
  ]
};