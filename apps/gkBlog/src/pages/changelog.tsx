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
      <div className="px-5 md:px-10 py-12 max-w-3xl mx-auto">
        {/* 仅保留唯一主标题，删除下方副标题 */}
        <header className="mb-14">
          <h1 className="text-3xl font-semibold text-slate-950 dark:text-slate-50 tracking-tight">更新记录</h1>
        </header>

        {/* 纵向时间线容器 */}
        <div className="relative border-l border-slate-200 dark:border-slate-800 pl-8 space-y-14">
          {CHANGELOG_DATA.map((item, idx) => {
            const lineList = item.contentText.split("\n");
            const validLines = lineList.filter(line => line.trim() !== "");
            return (
              <div key={idx} className="relative group">
                {/* 时间轴圆点 */}
                <span className="absolute -left-[41px] top-1 w-3 h-3 rounded-full bg-blue-500 dark:bg-blue-400 ring-4 ring-white dark:ring-slate-950" />
                
                {/* 调整布局：日期在圆点左侧，版本号在右侧，整体字号缩小 */}
                <div className="flex items-baseline gap-4 mb-4">
                  <span className="text-xs text-slate-400 dark:text-slate-500">{item.date}</span>
                  <span className="text-sm font-semibold text-slate-900 dark:text-slate-100">v{item.version}</span>
                </div>

                {/* 更新内容字号缩小 */}
                <div className="space-y-2 text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                  {validLines.map((line, i) => (
                    <div key={i}>{line}</div>
                  ))}
                </div>

                {/* 极简hover背景提亮 */}
                <div className="absolute inset-0 -ml-8 -mr-8 -my-4 rounded-xl opacity-0 group-hover:opacity-100 bg-slate-50 dark:bg-slate-900/30 -z-10 transition-opacity duration-200" />
              </div>
            );
          })}
        </div>
      </div>
    </Page>
  );
};

export default Changelog;