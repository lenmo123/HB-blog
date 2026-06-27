// 所有更新记录，新版本放数组最顶部
export const CHANGELOG_DATA = [
  {
    version: "1.1.4",
    date: "2026-06-27",
    // 仅一处完整更新文本，弹窗、更新页共用
    contentText: `1. 新增书籍
《犯罪心理》、《相见欢》、《红与黑》

2. 书籍版本更新
· 《判官》 更新至1.2
· 《二哈和他的白猫师尊》 更新至1.2
· 《全能游戏设计师》 更新至1.2
· 《人鱼陷落》 更新至1.2`
  }
];


export const CURRENT_POPUP_CONTENT = CHANGELOG_DATA[0].contentText;
export const CURRENT_UPDATE_VERSION = CHANGELOG_DATA[0].version;