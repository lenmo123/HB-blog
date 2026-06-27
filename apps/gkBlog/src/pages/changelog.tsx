import { ReactElement } from "react";
import type { NextPage } from "next";
import Head from "next/head";
import Page from "@/contents-layouts/Page";

// 所有更新日志，新版本写在最顶部
const CHANGELOG_LIST = [
  {
    version: "v1.1",
    time: "2026-06-27",
    content: [
      "新增书籍：《犯罪心理》、《相见欢》、《红与黑》",
      "书籍更新：《判官》、《二哈和他的白猫师尊》、《全能游戏设计师》、《人鱼陷落》更新至1.2",
      "优化开机弹窗极简UI，移除右上角关闭按钮",
      "顶部导航新增「更新记录」常驻入口"
    ]
  },
  {
    version: "v1.0.8",
    time: "2026-06-26",
    content: [
      "修复移动端页面切换缩放限制失效问题",
      "修复书架封面无法点击跳转bug",
      "清理全局冲突CSS，解决页面排版错乱"
    ]
  }
];

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactElement;
};

const Changelog: NextPageWithLayout = () => {
  return (
    <Page
      frontMatter={{
        title: "更新记录",
        description: "站点全部版本更新日志",
      }}
    >
      <div className="px-6 py-8 max-w-2xl mx-auto">
        <h1 className="text-xl font-medium text-slate-900 dark:text-slate-100 mb-8 tracking-tight">更新记录</h1>
        
        <div className="space-y-8">
          {CHANGELOG_LIST.map((item, idx) => (
            <div 
              key={idx} 
              className="border border-slate-200/70 dark:border-slate-700/40 rounded-xl p-6 shadow-sm shadow-black/5"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="text-sm font-medium text-blue-600 dark:text-blue-400">{item.version}</span>
                <span className="text-xs text-slate-400">{item.time}</span>
              </div>
              <ul className="space-y-2">
                {item.content.map((text, i) => (
                  <li key={i} className="text-xs text-slate-500 dark:text-slate-400 leading-relax flex gap-2">
                    <span>·</span>
                    <span>{text}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </Page>
  );
};

export default Changelog;