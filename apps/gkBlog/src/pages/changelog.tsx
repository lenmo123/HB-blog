'use client';
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
      <div className="px-4 md:px-6 py-10 max-w-3xl mx-auto overflow-x-hidden">
        <div className="space-y-12">
          {CHANGELOG_DATA.map((item, idx) => {
            const lineList = item.contentText.split("\n");
            const validLines = lineList.filter(line => line.trim() !== "");
            return (
              <div key={idx} className="relative grid grid-cols-[80px_1fr] gap-3 group items-start">
                {/* 左侧日期，顶部对齐无偏移 */}
                <div className="text-[10px] text-slate-400 dark:text-slate-500 whitespace-nowrap text-right">
                  {item.date}
                </div>

                {/* 右侧内容区 */}
                <div className="relative pl-6 border-l border-slate-200 dark:border-slate-800">
                  {/* 圆点固定位置不动 */}
                  <span className="absolute -left-[6px] top-[4px] w-2.5 h-2.5 rounded-full bg-blue-500 dark:bg-blue-400 ring-3 ring-white dark:ring-slate-950" />
                  
                  {/* mt-[-4px] 版本号整体向上移动4px，和日期圆点平齐 */}
                  <div className="mb-3 mt-[-4px]">
                    <span className="text-xs font-medium text-slate-900 dark:text-slate-100">v{item.version}</span>
                  </div>

                  <div className="space-y-1.5 text-[10px] text-slate-600 dark:text-slate-300 leading-relaxed">
                    {validLines.map((line, i) => (
                      <div key={i}>{line}</div>
                    ))}
                  </div>

                  <div className="absolute inset-0 -ml-6 -my-3 rounded-lg opacity-0 group-hover:opacity-100 bg-slate-50 dark:bg-slate-900/30 -z-10 transition-opacity duration-200" />
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