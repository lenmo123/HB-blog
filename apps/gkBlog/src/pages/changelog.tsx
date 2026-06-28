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
      <div className="px-5 md:px-8 py-10 max-w-2xl mx-auto">
        {/* 页面主标题，仅一处，极简大字体 */}
        <h1 className="text-2xl font-semibold text-slate-900 dark:text-slate-50 tracking-tight mb-10">
          更新记录
        </h1>

        <div className="flex flex-col gap-7">
          {CHANGELOG_DATA.map((item, idx) => {
            const lineList = item.contentText.split("\n");
            const validLines = lineList.filter(line => line.trim() !== "");
            return (
              <div
                key={idx}
                className="group rounded-2xl bg-white dark:bg-slate-900/60 backdrop-blur-sm px-7 py-6
                shadow-lg shadow-slate-200/60 dark:shadow-black/25
                ring-1 ring-slate-100 dark:ring-slate-800/70
                transition-all duration-300 hover:shadow-xl hover:-translate-y-0.5"
              >
                {/* 版本 + 日期 顶部栏 */}
                <div className="flex items-center gap-4 mb-5">
                  <span className="px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-300 text-xs font-medium">
                    v{item.version}
                  </span>
                  <span className="text-xs text-slate-400 dark:text-slate-500">{item.date}</span>
                </div>

                {/* 更新内容文本区 */}
                <div className="flex flex-col gap-2.5 text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  {validLines.map((line, i) => (
                    <div key={i}>{line}</div>
                  ))}
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