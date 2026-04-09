import Image from "next/image";
import { useRouter } from "next/router";
import { bookList } from "@/constants/books";
import { GetStaticPaths, GetStaticProps } from "next";
import Head from "next/head";
import { useState } from "react";

interface Book {
  title: string;
  author: string;
  category: string | string[];
  desc: string;
  previewImages: string[];
  downloadUrl: string;
  finishTime?: string;
  wordCount?: string;
  platform?: string;
  version?: string;
}

interface BookPageProps {
  book: Book;
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = bookList.map((book) => ({
    params: { id: book.title },
  }));
  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const id = context.params?.id as string;
  const decodedId = decodeURIComponent(id);
  const targetBook = bookList.find((b) => b.title === decodedId);
  if (!targetBook) return { notFound: true };
  return { props: { book: targetBook } };
};

export default function BookDetailPage({ book }: BookPageProps) {
  const router = useRouter();
  const shortTitle = book.title.split("-")[0];
  const fullTitle = book.title;
  const baseCover = `/assets/images/neodb/cover/${shortTitle}`;

  const displayCategory = Array.isArray(book.category)
    ? book.category.join(" | ")
    : book.category;

  const [isExpanded, setIsExpanded] = useState(true);
  const [currentIndex, setCurrentIndex] = useState<number | null>(null);
  const images = book.previewImages ?? [];

  const prev = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : (prev ?? 0) - 1));
  };

  const next = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : (prev ?? 0) + 1));
  };

  return (
    <>
      <Head>
        <title>{fullTitle} - 小冷书屋</title>
        <meta name="description" content={book.desc} />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
      </Head>

      <div className="min-h-screen bg-[#f8f9fa] dark:bg-slate-900">
        <div className="max-w-6xl mx-auto px-2 sm:px-4 pt-24 sm:pt-32 pb-6">
          {/* 封面区域 */}
          <div className="flex flex-row gap-4 sm:gap-8 items-start w-full mb-8 sm:mb-10 ml-4 sm:ml-6">
            <div className="w-[40%] sm:w-[300px] flex-shrink-0">
              <div className="aspect-[5/7] relative rounded overflow-hidden shadow-xl">
                <Image
                  src={`${baseCover}.png`}
                  alt={shortTitle}
                  fill
                  className="object-cover"
                  onError={(e) => {
                    e.currentTarget.src = `${baseCover}.webp`;
                  }}
                  sizes="(max-width:768px) 40vw, 300px"
                  priority
                />
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    background:
                      "linear-gradient(to right, rgba(0,0,0,0.02) 0%, rgba(0,0,0,0.05) 0.75%, rgba(255,255,255,0.5) 1%, rgba(255,255,255,0.6) 1.3%, rgba(255,255,255,0.5) 1.4%, rgba(255,255,255,0.3) 1.5%, rgba255,255,255,0.3) 2.4%, rgba0,0,0,0.05) 2.7%, rgba0,0,0,0.05) 3.5%, rgba255,255,255,0.3) 4%, rgba255,255,255,0.3) 4.5%, rgba244,244,244,0.1) 5.4%, rgba244,244,244,0.1) 99%, rgba144,144,144,0.2) 100%",
                    boxShadow: "inset 0 -1px 4px rgba(0,0,0,0.12)",
                    borderRadius: "0 3px 3px 0",
                  }}
                ></div>
              </div>
            </div>

            <div className="flex-1 min-w-0">
              <h1 className="text-xl sm:text-3xl md:text-4xl font-bold mb-3 text-slate-900 dark:slate-100 break-words">
                {shortTitle}
              </h1>

              <div className="pl-2 space-y-2">
                <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300">
                  <span className="font-medium">作者：</span>
                  {book.author}
                </p>

                <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300">
                  <span className="font-medium">分类：</span>
                  {displayCategory}
                </p>

                <div className="flex flex-col gap-1 sm:flex-row sm:flex-wrap sm:gap-x-3 sm:gap-y-1 text-sm sm:text-base text-slate-600 dark:text-slate-300">
                  {book.wordCount && (
                    <span>
                      <span className="font-medium">字数：</span>
                      {book.wordCount}
                    </span>
                  )}
                  {book.platform && book.platform !== "实体书" && (
                    <span>
                      <span className="font-medium">平台：</span>
                      {book.platform}
                    </span>
                  )}
                  {book.finishTime && (
                    <span>
                      <span className="font-medium">完结：</span>
                      {book.finishTime}
                    </span>
                  )}
                </div>

                {book.version && (
                  <a
                    href={`/version-log/${encodeURIComponent(shortTitle)}`}
                    className="mt-1 inline-flex items-center gap-1 bg-gradient-to-r from-amber-100 to-amber-300 dark:from-amber-800 dark:to-amber-600 px-2 py-0.5 rounded-md text-xs hover:brightness-110 active:scale-95 transition-all cursor-pointer"
                  >
                    <span className="text-amber-900 dark:text-amber-100 font-medium text-sm">
                      版本更新 {book.version}
                    </span>
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-amber-80 dark:text-amber-200"
                    >
                      <polyline points="9 18 15 12 9 6"></polyline>
                    </svg>
                  </a>
                )}
              </div>
            </div>
          </div>

          {/* 书籍介绍 */}
          <div className="bg-white/70 dark:bg-slate-800 rounded-xl p-4 sm:p-6 shadow-sm border border-slate-100/50 dark:border-slate-700 mb-4">
            <div
              className="flex items-center justify-between cursor-pointer"
              onClick={() => setIsExpanded(!isExpanded)}
            >
              <h2 className="text-base sm:text-xl font-semibold text-slate-900 dark:text-slate-100">
                书籍介绍
              </h2>
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className={`text-slate-500 transition-transform duration-300 ${
                  isExpanded ? "rotate-180" : ""
                }`}
              >
                <polyline points="6 9 12 15 18 9"></polyline>
              </svg>
            </div>

            {isExpanded && (
              <div className="mt-3 pt-3 border-t border-slate-200 dark:border-slate-700">
                <p className="text-xs sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                  {book.desc || "暂无简介"}
                </p>
              </div>
            )}
          </div>

          {/* 版权信息：小字保留、三四顺序不变、间距拉大 space-y-1 */}
          <div className="mb-4 text-[0.7rem] leading-tight text-gray-500 dark:bg-slate-900 space-y-1">
            <p className="flex items-center gap-1">
              <span className="text-blue-500">•</span>
              当前资源仅限个人学习与研究用途，不用于传播、商用、公开分发
            </p>
            <p className="flex items-center gap-1">
              <span className="text-green-500">•</span>
              如果喜欢本书，还请购买正版
            </p>
            <p className="flex items-center gap-1">
              <span className="text-red-500">•</span>
              图书文本均来自于互联网，版权归作者及出版平台所有
            </p>
            <p className="flex items-center gap-1">
              <span className="text-orange-500">•</span>
              若链接存在版权问题，收到通知后将及时删除相关内容
            </p>
          </div>

          {/* 下载按钮 */}
          <div className="mb-8">
            <a
              href={book.downloadUrl || "#"}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center px-4 py-1.5 rounded-xl text-sm font-medium transition-all bg-blue-600 hover:bg-blue-700 text-white shadow-sm"
            >
              {book.downloadUrl ? "立即下载" : "暂未提供下载"}
            </a>
          </div>

          {/* 内容预览 */}
          <div className="mt-8">
            <h2 className="text-xl font-semibold mb-4 text-slate-900 dark:text-slate-100">
              内容预览
            </h2>
            <div className="flex gap-4 overflow-x-auto pb-4">
              {images.length > 0 ? (
                images.map((src, idx) => (
                  <div
                    key={idx}
                    className="min-w-[250px] aspect-[3/4] relative rounded-xl overflow-hidden shadow-lg cursor-pointer"
                    onClick={() => setCurrentIndex(idx)}
                  >
                    <Image
                      src={src}
                      alt={`预览 ${idx + 1}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                ))
              ) : (
                <p className="text-slate-500 dark:text-slate-400">暂无预览图</p>
              )}
            </div>

            {/* 全屏预览 + 底部箭头 */}
            {currentIndex !== null && (
              <div
                className="fixed inset-0 z-50 bg-white/95 dark:bg-black/95 flex flex-col items-center justify-center p-4"
                onClick={() => setCurrentIndex(null)}
              >
                <div
                  className="relative w-full max-w-3xl aspect-[3/4] mb-10"
                  onClick={(e) => e.stopPropagation()}
                >
                  <Image
                    src={images[currentIndex]}
                    alt="放大预览"
                    fill
                    className="object-contain"
                    draggable={false}
                  />

                  {/* 关闭 */}
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setCurrentIndex(null);
                    }}
                    className="absolute top-4 right-4 text-black dark:text-white"
                  >
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <line x1="18" y1="6" x2="6" y2="18"></line>
                      <line x1="6" y1="6" x2="18" y2="18"></line>
                    </svg>
                  </button>
                </div>

                {/* 底部左右箭头（无背景、间距加大） */}
                <div className="flex justify-between w-full max-w-xs px-4">
                  <button
                    onClick={prev}
                    className="text-2xl text-black dark:text-white"
                  >
                    <svg
                      width="28"
                      height="28"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <polyline points="15 18 9 12 15 6"></polyline>
                    </svg>
                  </button>
                  <button
                    onClick={next}
                    className="text-2xl text-black dark:text-white"
                  >
                    <svg
                      width="28"
                      height="28"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <polyline points="9 18 15 12 9 6"></polyline>
                    </svg>
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}