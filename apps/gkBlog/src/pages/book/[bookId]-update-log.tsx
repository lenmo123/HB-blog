import Head from "next/head";
import { useRouter } from "next/router";

export default function BookUpdateLog() {
  const router = useRouter();
  const bookId = String(router.query["bookId-update-log"] || "").replace("-update-log", "");

  // ====================
  // 在这里写每本书的专属更新日志
  // ====================
  const logData: Record<string, { version: string; time: string; content: string[] }[]> = {
    // 示例：书名必须和你详情页的 shortTitle 完全一致
    "全能游戏设计师": [
      {
        version: "V1.0",
        time: "2026-04-08",
        content: [
          "首次发布完整精校版电子书",
          "修正全文错别字与排版问题",
          "优化目录结构与章节导航"
        ]
      },
      {
        version: "V1.1",
        time: "2026-04-09",
        content: [
          "补充缺失的番外章节",
          "修复封面图片加载异常",
          "优化深色模式显示效果"
        ]
      }
    ],
    // 第二本书示例
    "诡秘之主": [
      {
        version: "V1.0",
        time: "2026-04-08",
        content: [
          "完整精校版正式上架",
          "统一全文标点格式",
          "修复章节错乱问题"
        ]
      }
    ]
    // 往后新增书籍，直接复制上面的对象，改书名、版本、内容即可
  };

  const logs = logData[decodeURIComponent(bookId)] || [];

  return (
    <>
      <Head>
        <title>{decodeURIComponent(bookId)} 版本更新日志 - 小冷书屋</title>
        <meta name="description" content={`${decodeURIComponent(bookId)} 版本更新日志`} />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
      </Head>

      <div className="min-h-screen bg-[#f8f9fa] dark:bg-slate-900">
        <div className="max-w-6xl mx-auto px-2 sm:px-4 pt-24 sm:pt-32 pb-6">
          <h1 className="text-2xl sm:text-3xl font-bold mb-6 text-slate-900 dark:text-slate-100">
            {decodeURIComponent(bookId)} 版本更新日志
          </h1>

          <div className="space-y-4">
            {logs.length > 0 ? (
              logs.map((log, index) => (
                <div
                  key={index}
                  className="bg-white/70 dark:bg-slate-800 rounded-xl p-4 sm:p-5 shadow-sm border border-slate-100/50 dark:border-slate-700"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <span className="inline-flex items-center gap-1 bg-gradient-to-r from-amber-100 to-amber-300 dark:from-amber-800 dark:to-amber-600 px-2 py-0.5 rounded-md text-xs">
                      <span className="text-amber-900 dark:text-amber-100 font-medium text-sm">
                        {log.version}
                      </span>
                    </span>
                    <span className="text-sm text-slate-500 dark:text-slate-400">
                      {log.time}
                    </span>
                  </div>
                  <ul className="text-sm sm:text-base text-slate-600 dark:text-slate-300 list-disc pl-5 space-y-1 leading-relaxed">
                    {log.content.map((content, idx) => (
                      <li key={idx}>{content}</li>
                    ))}
                  </ul>
                </div>
              ))
            ) : (
              <p className="text-sm text-slate-500 dark:text-slate-400">暂无更新日志</p>
            )}
          </div>

          {/* 返回书籍详情页按钮 */}
          <div className="mt-8">
            <button
              onClick={() => router.back()}
              className="inline-flex items-center justify-center px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium transition-all shadow-sm"
            >
              ← 返回书籍详情页
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
