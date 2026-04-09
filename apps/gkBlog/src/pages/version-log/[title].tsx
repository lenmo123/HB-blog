import Head from "next/head";
import { useRouter } from "next/router";
import { bookList, bookVersionLogs, VersionLogItem } from "@/constants/books";

export default function BookVersionLog() {
  const router = useRouter();
  const { title } = router.query;

  // 1. 解码标题，处理所有异常
  const decodedTitle = Array.isArray(title) ? title[0] : title;

  // 🔴 终极匹配：支持纯书名 / 书名-作者 100%匹配
  const targetBook = decodedTitle
    ? bookList.find((b) => {
        // 1. 完整匹配（书名-作者）
        if (b.title === decodedTitle) return true;
        // 2. 纯书名匹配（去掉-作者后缀）
        const pureTitle = b.title.split("-")[0];
        return pureTitle === decodedTitle;
      })
    : undefined;

  // 🔴 终极日志匹配：自动适配纯书名key
  const logs: VersionLogItem[] = (() => {
    if (!decodedTitle) return [];

    // 1. 纯书名key匹配（你页面传的格式）
    if (bookVersionLogs[decodedTitle]) {
      return bookVersionLogs[decodedTitle];
    }

    // 2. 完整key匹配（书名-作者，兼容旧数据）
    if (targetBook && bookVersionLogs[targetBook.title]) {
      return bookVersionLogs[targetBook.title];
    }

    // 3. 兜底：模糊匹配，防止空格/标点差异
    const fuzzyKey = Object.keys(bookVersionLogs).find((key) =>
      key.includes(decodedTitle) || decodedTitle.includes(key)
    );
    if (fuzzyKey) return bookVersionLogs[fuzzyKey];

    return [];
  })();

  return (
    <>
      <Head>
        <title>
          {targetBook
            ? `${targetBook.title.split("-")[0]} - 版本更新`
            : "版本更新"}
          - 小冷书屋
        </title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div className="min-h-screen bg-[#f8f9fa] dark:bg-slate-900 pt-24 pb-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          {/* 返回按钮 */}
          <button
            onClick={() => router.back()}
            className="mb-6 flex items-center gap-2 text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="15 18 9 12 15 6"></polyline>
            </svg>
            <span>返回详情页</span>
          </button>

          {/* 书籍信息 */}
          {targetBook && (
            <div className="mb-8">
              <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-slate-100 mb-2">
                {targetBook.title.split("-")[0]}
              </h1>
              <p className="text-slate-600 dark:text-slate-300">
                作者：{targetBook.author}
              </p>
            </div>
          )}

          {/* 版本日志列表 */}
          <div className="space-y-6">
            {logs.length > 0 ? (
              logs.map((log: VersionLogItem, index) => (
                <div
                  key={index}
                  className="bg-white dark:bg-slate-800 rounded-xl p-4 sm:p-5 shadow-sm border border-slate-100/50 dark:border-slate-700"
                >
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="font-semibold text-lg text-slate-900 dark:text-slate-100">
                      版本 {log.version}
                    </h3>
                    <span className="text-sm text-slate-500">{log.date}</span>
                  </div>
                  <ul className="text-sm sm:text-base text-slate-600 dark:text-slate-300 space-y-1.5 list-disc pl-4">
                    {log.changes.map((change, i) => (
                      <li key={i}>{change}</li>
                    ))}
                  </ul>
                </div>
              ))
            ) : (
              <div className="text-center py-12 text-slate-500 dark:text-slate-400">
                暂无版本更新记录
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
