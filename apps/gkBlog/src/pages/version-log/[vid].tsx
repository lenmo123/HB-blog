import Head from "next/head";
import Link from "next/link";
import { bookList, bookVersionLogs, VersionLogItem } from "@/constants/books";
import { GetStaticPaths, GetStaticProps } from "next";

interface Book {
  vid: number;
  title: string;
  author: string;
}
interface Props {
  targetBook: Book;
  logs: VersionLogItem[];
}

// 静态预生成所有书籍日志页面
export const getStaticPaths: GetStaticPaths = async () => {
  const paths = bookList.map((b) => ({
    params: { vid: String(b.vid) },
  }));
  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const vidStr = params?.vid as string;
  const targetBook = bookList.find((b) => String(b.vid) === vidStr);
  if (!targetBook) return { notFound: true };

  // 直接用vid字符串读取日志对象key
  const logs = bookVersionLogs[vidStr] ?? [];
  return { props: { targetBook, logs } };
};

export default function BookVersionLog({ targetBook, logs }: Props) {
  const shortTitle = targetBook.title.split("-")[0];

  return (
    <>
      <Head>
        <title>
          {shortTitle} - 版本更新 - 小冷书屋
        </title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div className="min-h-screen bg-[#f8f9fa] dark:bg-slate-900 pt-24 pb-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          {/* 返回按钮，改用Link静态跳转 */}
          <Link
            href={`/book/${targetBook.vid}`}
            className="mb-6 flex items-center gap-2 text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors inline-block"
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
          </Link>

          {/* 书籍信息 */}
          <div className="mb-8">
            <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-slate-100 mb-2">
              {shortTitle}
            </h1>
            <p className="text-slate-600 dark:text-slate-300">
              作者：{targetBook.author}
            </p>
          </div>

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