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
        {/* 彻底删除手动h1标题，避免和Page布局自动标题重复 */}

        {/* 纵向时间线容器 */}
        <div className="relative border-l border-slate-200 dark:border-slate-800 pl-8 space-y-14">
          {CHANGELOG_DATA.map((item, idx) => {
            const lineList = item.contentText.split("\n");
            const validLines = lineList.filter(line => line.trim() !== "");
            return (
              <div key={idx} className="relative group">
                {/* 左侧：日期，圆点/竖线最左边 */}
                <div className="absolute -left-[90px] top-1 text-xs text-slate-400 dark:text-slate-500 whitespace-nowrap">
                  {item.date}
                </div>

                {/* 时间轴圆点 */}
                <span className="absolute -left-[41px] top-1 w-3 h-3 rounded-full bg-blue-500 dark:bg-blue-400 ring-4 ring-white dark:ring-slate-950" />
                
                {/* 右侧内容区域 */}
                <div>
                  <div className="mb-4">
                    <span className="text-sm font-semibold text-slate-900 dark:text-slate-100">v{item.version}</span>
                  </div>

                  {/* 缩小字号内容 */}
                  <div className="space-y-2 text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                    {validLines.map((line, i) => (
                      <div key={i}>{line}</div>
                    ))}
                  </div>

                  {/* hover淡背景 */}
                  <div className="absolute inset-0 -ml-8 -mr-8 -my-4 rounded-xl opacity-0 group-hover:opacity-100 bg-slate-50 dark:bg-slate-900/30 -z-10 transition-opacity duration-200" />
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