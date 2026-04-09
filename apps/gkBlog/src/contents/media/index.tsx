'use client';

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useMemo, useState } from "react";
import { bookList } from "@/constants/books";

const CATEGORIES = [
  "全部",
  "玄幻", "仙侠", "武侠", "奇幻",
  "都市", "都市异能", "现实", "校园",
  "历史", "军事", "科幻", "游戏",
  "悬疑", "灵异", "侦探", "言情",
  "无限流", "耽美文", "女频文", "系统流",
  "二次元", "轻小说",
  "文学", "传记", "少儿", "社科",
  "实体书", "教材", "其他"
];

export default function MediaContents() {
  const router = useRouter();
  const [search, setSearch] = useState("");
  const [activeCat, setActiveCat] = useState("全部");
  const [page, setPage] = useState(1);
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);
  const pageSize = 12;

  const filtered = useMemo(() => {
    return bookList.filter(b => {
      const matchSearch = b.title.toLowerCase().includes(search.trim().toLowerCase());
      const matchCat = 
        activeCat === "全部" || 
        (Array.isArray(b.category) ? b.category.includes(activeCat) : b.category === activeCat);
      return matchSearch && matchCat;
    });
  }, [search, activeCat]);

  const totalPage = Math.ceil(filtered.length / pageSize);
  const showBooks = useMemo(() => {
    const start = (page - 1) * pageSize;
    return filtered.slice(start, start + pageSize);
  }, [filtered, page]);

  const goBook = (title: string) => {
    router.push(`/book/${encodeURIComponent(title)}`);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <style>{`
        .book-cover-frame {
          position: relative;
          border-radius: 0 3px 3px 0;
          overflow: hidden;
          box-shadow: 2px 4px 16px rgba(0, 0, 0, 0.12);
          transition: all 0.2s ease-in-out;
        }
        .book-cover-frame:hover {
          box-shadow: 0 16px 40px rgba(0,0,0,0.16);
          transform: scale(1.01);
        }
        .book-cover-frame::after {
          content: "";
          position: absolute;
          left: 0; top: 0;
          width: 100%; height: 100%;
          background: linear-gradient(to right, rgba(0,0,0,0.02) 0%, rgba(0,0,0,0.05) 0.75%, rgba(255,255,255,0.5) 1%, rgba(255,255,255,0.6) 1.3%, rgba(255,255,255,0.5) 1.4%, rgba(255,255,255,0.3) 1.5%, rgba(255,255,255,0.3) 2.4%, rgba(0,0,0,0.05) 2.7%, rgba(0,0,0,0.05) 3.5%, rgba(255,255,255,0.3) 4%, rgba(255,255,255,0.3) 4.5%, rgba(244,244,244,0.1) 5.4%, rgba(244,244,244,0.1) 99%, rgba(144,144,144,0.2) 100%);
          box-shadow: inset 0 -1px 4px rgba(0,0,0,0.12);
          pointer-events: none;
        }
      `}</style>

      <div className="flex items-center gap-2.5 mb-4">
        <div className="flex-1">
          <input
            type="text"
            placeholder="搜索书名..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full rounded-xl px-3.5 py-2 border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-800 dark:text-white text-sm placeholder:text-slate-400 dark:placeholder:text-slate-500"
          />
        </div>
        <button
          onClick={() => setIsCategoryOpen(!isCategoryOpen)}
          className="w-9 h-9 rounded-full bg-slate-100/80 dark:bg-slate-800/80 flex items-center justify-center hover:bg-slate-200 dark:hover:bg-slate-700"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="4" y1="6" x2="20" y2="6"></line><line x1="4" y1="12" x2="20" y2="12"></line><line x1="4" y1="18" x2="20" y2="18"></line></svg>
        </button>
      </div>

      <div 
        className={`grid transition-[grid-template-rows] duration-300 ease-in-out overflow-hidden mb-5 ${
          isCategoryOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
      >
        <div className="min-h-0">
          <div className="flex flex-wrap gap-1.5 justify-center py-1">
            {CATEGORIES.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCat(cat)}
                className={`px-3 py-0.5 rounded-full text-xs transition-all ${
                  activeCat === cat 
                    ? "bg-blue-600 text-white" 
                    : "bg-slate-100/80 dark:bg-slate-800/80 hover:bg-slate-200 dark:hover:bg-slate-700 dark:text-slate-300"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-5 gap-x-5 gap-y-6">
        {showBooks.map((book, idx) => {
          const shortTitle = book.title.split('-')[0];
          const baseCover = `/assets/images/neodb/cover/${shortTitle}`;

          return (
            <div key={idx} className="flex flex-col gap-1.5">
              <button
                onClick={() => goBook(book.title)}
                className="rounded-sm overflow-hidden transition-all duration-300 hover:-translate-y-1"
              >
                <div className="book-cover-frame relative w-full aspect-[5/7] bg-slate-100 dark:bg-slate-800">
                  <Image
                    src={`${baseCover}.png`}
                    alt={shortTitle}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover"
                    onError={(e) => {
                      e.currentTarget.src = `${baseCover}.webp`;
                    }}
                  />
                </div>
              </button>
              <div className="text-center px-1">
                <p className="text-xs font-medium truncate dark:text-white">{shortTitle}</p>
                <p className="text-[10px] text-slate-500 dark:text-slate-400 mt-0.5">{book.author}</p>
              </div>
            </div>
          );
        })}
      </div>

      {/* 改版好看的分页按钮 */}
      {totalPage > 1 && (
        <div className="flex items-center justify-center gap-3 mt-10">
          <button
            onClick={() => setPage(p => Math.max(1, p - 1))}
            disabled={page === 1}
            className="px-4 py-2 text-sm rounded-lg bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-700 transition disabled:opacity-40 disabled:pointer-events-none"
          >
            上一页
          </button>

          <span className="text-sm text-slate-600 dark:text-slate-400 min-w-[80px] text-center">
            {page} / {totalPage}
          </span>

          <button
            onClick={() => setPage(p => Math.min(totalPage, p + 1))}
            disabled={page === totalPage}
            className="px-4 py-2 text-sm rounded-lg bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-700 transition disabled:opacity-40 disabled:pointer-events-none"
          >
            下一页
          </button>
        </div>
      )}
    </div>
  );
}