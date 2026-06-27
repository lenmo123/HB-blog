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
      <div className="px-6 py-8 max-w-2xl mx-auto">
        {/* 删掉手动写的h1标题，避免和Page布局自带标题重复 */}
        <div className="space-y-8">
          {CHANGELOG_DATA.map((item, idx) => {
            const lineList = item.contentText.split("\n");
            const validLines = lineList.filter(line => line.trim() !== "");
            return (
              <div 
                key={idx} 
                className="border border-slate-200/70 dark:border-slate-700/40 rounded-xl p-6 shadow-sm shadow-black/5"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-sm font-medium text-blue-600 dark:text-blue-400">v{item.version}</span>
                  <span className="text-xs text-slate-400">{item.date}</span>
                </div>
                <div className="space-y-2 text-xs text-slate-500 dark:text-slate-400 leading-relax">
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