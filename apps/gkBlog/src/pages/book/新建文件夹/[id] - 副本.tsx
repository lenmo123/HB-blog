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

export const getStaticProps: GetStaticProps<BookPageProps> = async (context) => {
  const id = context.params?.id as string;
  const decodedId = decodeURIComponent(id);
  const targetBook = bookList.find((b) => b.title === decodedId);
  if (!targetBook) return { notFound: true };
  return { props: { book: targetBook } };
};

export default function BookDetailPage({ book }: BookPageProps) {
  const router = useRouter();
  const shortTitle = book.title.split('-')[0];
  const fullTitle = book.title;
  const baseCover = `/assets/images/neodb/cover/${shortTitle}`;

  const displayCategory = Array.isArray(book.category)
    ? book.category.join(' | ')
    : book.category;

  const [isExpanded, setIsExpanded] = useState(true);

  return (
    <>
      <Head>
        <title>{fullTitle} - 小冷书屋</title>
        <meta name="description" content={book.desc} />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
      </Head>

      <div className="min-h-screen bg-[#f8f9fa] dark:bg-slate-900">
        <div className="max-w-6xl mx-auto px-2 sm:px-4 pt-24 sm:pt-32 pb-6">

          {/* 原版封面 1:1 完全不变 */}
          <div className="flex flex-row gap-4 sm:gap-8 items-start w-full mb-8 sm:mb-10">
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
                <div className="absolute inset-0 pointer-events-none" style={{
                  background: 'linear-gradient(to right, rgba(0,0,0,0.02) 0%, rgba(0,0,0,0.05) 0.75%, rgba(255,255,255,0.5) 1%, rgba(255,255,255,0.6) 1.3%, rgba(255,255,255,0.5) 1.4%, rgba(255,255,255,0.3) 1.5%, rgba(255,255,255,0.3) 2.4%, rgba(0,0,0,0.05) 2.7%, rgba(0,0,0,0.05) 3.5%, rgba(255,255,255,0.3) 4%, rgba(255,255,255,0.3) 4.5%, rgba(244,244,244,0.1) 5.4%, rgba(244,244,244,0.1) 99%, rgba(144,144,144,0.2) 100%)',
                  boxShadow: 'inset 0 -1px 4px rgba(0,0,0,0.12)',
                  borderRadius: '0 3px 3px 0'
                }}></div>
              </div>
            </div>

            <div className="flex-1 min-w-0">
              <h1 className="text-xl sm:text-3xl md:text-4xl font-bold mb-3 text-slate-900 dark:text-slate-100 break-words">
                {shortTitle}
              </h1>

              <div className="pl-2 space-y-2">
                <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300">
                  <span className="font-medium">作者：</span>{book.author}
                </p>

                <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300">
                  <span className="font-medium">分类：</span>{displayCategory}
                </p>

                <div className="flex flex-wrap gap-x-3 gap-y-1 text-sm sm:text-base text-slate-600 dark:text-slate-300">
                  {book.wordCount && <span><span className="font-medium">字数：</span>{book.wordCount}</span>}
                  {book.platform && <span><span className="font-medium">平台：</span>{book.platform}</span>}
                  {book.finishTime && <span><span className="font-medium">完结：</span>{book.finishTime}</span>}
                </div>

                {/* 只变细变窄，其余完全不变 */}
                {book.version && (
                  <div className="mt-1 inline-flex items-center gap-1 bg-gradient-to-r from-amber-100 to-amber-300 dark:from-amber-800 dark:to-amber-600 px-2 py-0.5 rounded-md text-xs">
                    <span className="text-amber-900 dark:text-amber-100 font-medium text-sm">
                      版本更新 {book.version}
                    </span>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-amber-800 dark:text-amber-200">
                      <polyline points="9 18 15 12 9 6"></polyline>
                    </svg>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* 书籍介绍：手机端标题+内容同步缩小，电脑端完全不变 */}
          <div className="bg-white/70 dark:bg-slate-800 rounded-xl p-4 sm:p-6 shadow-sm border border-slate-100/50 dark:border-slate-700 mb-4">
            <div 
              className="flex items-center justify-between cursor-pointer" 
              onClick={() => setIsExpanded(!isExpanded)}
            >
              {/* 手机端标题缩小为 text-base，电脑端保持 sm:text-xl 不变 */}
              <h2 className="text-base sm:text-xl font-semibold text-slate-900 dark:text-slate-100">书籍介绍</h2>
              <svg 
                width="16" 
                height="16" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                className={`text-slate-500 transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`}
              >
                <polyline points="6 9 12 15 18 9"></polyline>
              </svg>
            </div>
            
            {isExpanded && (
              <div className="mt-3 pt-3 border-t border-slate-200 dark:border-slate-700">
                {/* 手机端内容 text-xs，电脑端 sm:text-base 保持原大小 */}
                <p className="text-xs sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                  {book.desc || "暂无简介"}
                </p>
              </div>
            )}
          </div>

          {/* 版权信息 完全不变 */}
          <div className="mb-4 text-xs text-gray-500 dark:text-slate-400 leading-relaxed space-y-1">
            <p className="flex items-center gap-1">
              <span className="text-blue-500">•</span>
              当前资源仅限个人学习与研究用途，不用于传播、商用或公开分发
            </p>
            <p className="flex items-center gap-1">
              <span className="text-green-500">•</span>
              如果喜欢本书，还请购买正版
            </p>
            <p className="flex items-center gap-1">
              <span className="text-orange-500">•</span>
              若链接存在版权问题，可发送邮件至1470111867@qq.com反馈
            </p>
          </div>

          {/* 下载按钮 完全不变 */}
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

          {/* 内容预览 完全不变 */}
          <div className="mt-8">
            <h2 className="text-xl font-semibold mb-4 text-slate-900 dark:text-slate-100">内容预览</h2>
            <div className="flex gap-4 overflow-x-auto pb-4">
              {book.previewImages && book.previewImages.length > 0 ? (
                book.previewImages.map((src, idx) => (
                  <div key={idx} className="min-w-[250px] aspect-[3/4] relative rounded-xl overflow-hidden shadow-lg">
                    <Image src={src} alt={`预览 ${idx + 1}`} fill className="object-contain bg-slate-100 dark:bg-slate-800" />
                  </div>
                ))
              ) : (
                <p className="text-slate-500 dark:text-slate-400">暂无预览图</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}