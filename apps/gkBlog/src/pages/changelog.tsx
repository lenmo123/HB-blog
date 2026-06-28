import { ReactElement } from "react";
import type { NextPage } from "next";
import Page from "@/contents-layouts/Page";
import { CHANGELOG_DATA } from "@/constants/update";

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
      {/* 外层容器增加 overflow-x-hidden 兜底防横向滚动 */}
      <div className="px-5 md:px-10 py-12 max-w-3xl mx-auto overflow-x-hidden">
        {/* 时间线改用网格，左侧固定日期栏，不会溢出屏幕 */}
        <div className="space-y-14">
          {CHANGELOG_DATA.map((item, idx) => {
            const lineList = item.contentText.split("\n");
            const validLines = lineList.filter(line => line.trim() !== "");
            return (
              <div key={idx} className="relative grid grid-cols-[90px_1fr] gap-4 group">
                {/* 第一列：日期，圆点左侧，右对齐，不会溢出屏幕 */}
                <div className="text-xs text-slate-400 dark:text-slate-500 whitespace-nowrap text-right pt-1">
                  {item.date}
                </div>

                {/* 第二列：版本+内容 + 时间轴线圆点 */}
                <div className="relative pl-8 border-l border-slate-200 dark:border-slate-800">
                  {/* 时间轴圆点 */}
                  <span className="absolute -left-[7px] top-1 w-3 h-3 rounded-full bg-blue-500 dark:bg-blue-400 ring-4 ring-white dark:ring-slate-950" />
                  
                  {/* 版本号 */}
                  <div className="mb-4">
                    <span className="text-sm font-semibold text-slate-900 dark:text-slate-100">v{item.version}</span>
                  </div>

                  {/* 更新内容小号文字 */}
                  <div className="space-y-2 text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                    {validLines.map((line, i) => (
                      <div key={i}>{line}</div>
                    ))}
                  </div>

                  {/* hover背景高亮，仅作用内容区域，不溢出 */}
                  <div className="absolute inset-0 -ml-8 -my-4 rounded-xl opacity-0 group-hover:opacity-100 bg-slate-50 dark:bg-slate-900/30 -z-10 transition-opacity duration-200" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Page>
  );
};

export default Changelog;