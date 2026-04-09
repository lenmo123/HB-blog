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

  // 默认展开
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

          {/* 封面：100%还原你最开始的原版，无任何多余渐变 */}
          <div className="flex flex-row gap-4 sm:gap-8 items-start w-full mb-8">
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
              </div>
            </div>

            <div className="flex-1 min-w-0">
              <h1 className="text-xl sm:text-3xl md:text-4xl font-bold mb-3 text-slate-90 dark:text-slate-100 break-words">
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
              </div>
            </div>
          </div>

          {/* 可折叠书籍介绍 */}
          <div className="bg-white/70 dark:bg-slate-800 rounded-xl p-4 sm:p-6 shadow-sm border border-slate-100/50 dark:border-slate-700 mb-4">
            <div 
              className="flex items-center justify-between cursor-pointer" 
              onClick={() => setIsExpanded(!isExpanded)}
            >
              <h2 className="text-lg sm:text-xl font-semibold text-slate-900 dark:text-slate-100">书籍介绍</h2>
              {/* 小箭头 */}
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
                <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                  {book.desc || "暂无简介"}
                </p>
              </div>
            )}
          </div>

          {/* 版权信息（原样+前面加小点） */}
          <div className="mb-4 text-xs text-gray-500 dark:text-slate-400 leading-relaxed">
            <p><span className="text-blue-500 mr-1">•</span>当前资源仅限个人学习与研究用途，不用于传播、商用或公开分发。</p>
            <p><span className="text-green-500 mr-1">•</span>如果喜欢本书，还请购买正版。</p>
            <p><span className="text-orange-500 mr-1">•</span>若链接存在版权问题，可发送邮件至 1470111867@qq.com 反馈。</p>
          </div>

          {/* 下载按钮：保持你这个布局，只是做细一点 */}
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