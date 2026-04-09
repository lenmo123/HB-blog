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
  desc: "我在无限游戏里封神。白柳在失业后被卷入一个无法停止的惊悚直播游戏中，游戏中充满了怪物与各种让你意想不到的恐怖规则，在死亡与恐怖的威胁中，白柳发现，他似乎能靠这些恐怖规则赚钱。",
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
    desc: "闻时，别人都称呼他为判官。尘不到，闻时自己也这么叫他。闻时从小被尘不到养大，是尘不到最骄傲的徒弟。一场大雪，判官入笼，千年后重逢，物是人非。",
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
    desc: "云边有个小卖部，货架上堆着岁月和夕阳，背后就是山。老人带着笑，孩子赶着羊，天空亮着光。刘十三以为只要努力，就能万事顺遂，却不知道人生的答案，永远藏在故乡的风里。",
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
    desc: "修真界帝君墨燃，重生回到少年时，还是那个拜在楚晚宁门下的小徒弟。两世轮回，爱恨痴缠，滔天恨意之下，原是一场深情辜负。",
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
    desc: "重回少年时代，这一次，程燃不想再留遗憾。",
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
    desc: "战术指挥大佬×武力值top呆呆美人突击手。白楚年×兰波。“我是你的。”“你是我的。”",
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
    desc: "艾晴，为验证历史做了试验小白鼠，几次三番被推进时空穿越机。她遇见了千古有名的高僧鸠摩罗什。她与他，究竟是缘深缘浅？",
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
    desc: "以浩瀚银河为舞台的壮丽英雄史诗，银河帝国与自由行星同盟两大势力激烈交锋，描绘了一部跨越千年的宇宙兴亡录。",
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
    desc: "穿越到平行世界，成为一名游戏设计师。带着一个全能游戏设计系统，陈陌开始打造一个个让全世界玩家疯狂痴迷的游戏。",
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
    desc: "尸语者，与死者朝夕相处的神秘职业，即将剖开震撼人心的亡灵之声！资深法医老秦亲自捉刀，首度披露惊悚案发细节。",
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
    desc: "尸语者，与死者朝夕相处的神秘职业，即将剖开震撼人心的亡灵之声！荒山残尸、灭门惨案、公路游魂、水上浮骸，每一案都让你无法入睡！",
    previewImages: ["法医秦明：尸语者（下）.png"],
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
    desc: "典当行工作的小职员庄睿，在一次意外中眼睛发生异变。美轮美奂的陶瓷，古拙大方的青铜器，惊心动魄的赌石，他都能一眼看穿，从此走上人生巅峰。",
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
    desc: "一个卑微的生命，来到风雨飘摇的明末。这是一个最坏的时代，也是一个最好的时代。且看一个小小细作，如何在乱世之中，搅动风云，重振汉家山河。",
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
    desc: "魂穿赵佶第九子赵构，于靖康之难前夕，力挽狂澜，拒做逃亡皇帝。朕要亲征，朕要收复河山，朕要让大宋的旗帜，插遍天下！",
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
    desc: "穿越到修仙世界，成为青云宗一名普通弟子。林越发现自己只要稳健发育，就能变强。不浪、不装、不头铁，狗住就是胜利！",
    previewImages: ["我师兄实在太稳健了.png"],
    downloadUrl: ""
  },

  // ========== 其余书籍 ==========
  {
    version: "V1.0",
    title: "深空彼岸-辰东",
    author: "辰东",
    category: ["玄幻", "科幻"],
    finishTime: "2024-04-19",
    wordCount: "368万字",
    tags: ["玄幻", "修真", "深空"],
    platform: "起点中文网",
    desc: "浩瀚宇宙，无尽种族，恢弘斩妖路，热血探险，揭开一个个文明的秘密，演绎最壮丽的深空神话。",
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
    desc: "臭名昭著的流氓，意外重生到修真界，坑蒙拐骗无所不用其极，被整个修真界视为败类，却走出了一条逆天之路。",
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
    desc: "妖魔横行，世人苦难。元神境强者孟川，为守护家乡、守护亲人，踏上一条斩妖除魔、守护苍生的热血之路。",
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
    desc: "魔前一叩三千年，回首凡尘不做仙，只为她……掌缘生灭请看耳根作品《求魔》，这是一个修士的逆天之路。",
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
    desc: "地球经历一场大灾难后，人类开始进化，武者诞生。主角罗峰，从地球走出，征战宇宙，成为宇宙中的巅峰强者。",
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
    desc: "一个普通的中国青年，意外成为一名国际雇佣兵，在战火纷飞的世界里挣扎求生，书写热血传奇。",
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
    desc: "一个普通的小人物，意外得到一枚神奇戒指，从此人生逆袭，在都市中纵横捭阖，快意恩仇。",
    previewImages: ["邪气凛然.png"],
    downloadUrl: ""
  },
  {
    version: "V1.0",
    title: "我的老千生涯4部曲-腾飞",
    author: "腾飞",
    category: ["实体书", "都市", "现实"],
    finishTime: "已完结",
    wordCount: "120万字",
    tags: ["都市", "老千", "纪实"],
    platform: "九州出版社",
    desc: "资深老千亲身经历改编，揭秘赌场千术、江湖骗局，真实还原地下赌场的黑暗与残酷。",
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
    desc: "他是球场上的禁区之王，是最冷血的杀手，用最纯粹的进球，征服世界足坛。",
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
    desc: "都市出现神秘禁区，里面藏着上古神话遗迹，主角觉醒异能，探索禁区，揭开神话真相。",
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
    desc: "穿越平行世界，绑定亏钱系统，只要把投资的钱全部亏光，就能获得巨额奖励。于是他拼命做赔钱游戏。",
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
    desc: "意外获得异能，能看透人心，预知祸福，从此在官场商场如鱼得水，权财双收。",
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
    desc: "华夏教练闯荡欧洲足坛，带领弱队逆袭夺冠，成为世界足坛最传奇的金牌教练。",
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
    desc: "主角成为世界幕后主宰，培养文明，饲养人类，看着他们从原始社会一步步发展成神级文明。",
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
    desc: "凡人流仙侠，主角资质平庸，凭借毅力和机缘，一步步踏上仙途，问鼎大道。",
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
    desc: "主角在人间修行，不飞升、不渡劫，直接在人间立地成仙，逍遥自在。",
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
    desc: "恐怖灵异文，阴气森森，尸气滔天，主角与尸为伍，在恐怖世界挣扎求生。",
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
    platform: "起点中文网",
    desc: "诡异世界复苏，鬼怪横行，主角能化身上古大妖，横扫一切诡异。",
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
    desc: "继承一座恐怖屋，解锁各种恐怖场景，接待游客，成为最吓人的恐怖屋老板。",
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
    desc: "预知末世降临，提前囤下几十亿物资，在天灾横行的末世里，安逸求生。",
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
    desc: "丧尸爆发，世界崩塌，主角从一个小人物，在末世中挣扎成长，建立势力，成为人类守护者。",
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
    desc: "神陨之后，废土世界，人类在废墟中挣扎求生，主角觉醒力量，寻找世界真相。",
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
    desc: "穿越东晋，成为寒门士子，以诗词歌赋闻名天下，风流名士，潇洒人间。",
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
    platform: "起点中文网",
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
  },
];

// ========== 每本书独立版本日志（方案二：纯书名key版） ==========
export const bookVersionLogs: Record<string, VersionLogItem[]> = {
  // 重点书籍：2026-03-20 多端版本（key改为纯书名）
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

  // 其余所有书籍：统一 2026-04-08 + 多看版本（key改为纯书名）
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