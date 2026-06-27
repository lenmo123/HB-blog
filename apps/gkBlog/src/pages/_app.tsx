import { Component, ReactElement, ReactNode, useEffect, useState } from "react";
import type { AppProps } from "next/app";
import type { NextPage } from "next";
import { useRouter } from "next/router";

import BaiDuAnalytics from "@/components/analytics/BaiduAnalytics";
import ClarityAnalytics from "@/components/analytics/ClarityAnalytics";
import RootLayout from "@/components/layouts/Root";
import WithNavigationFooter from "@/components/layouts/WithNavigationFooter";
import Provider from "@/providers";

import { GoogleAnalytics } from "@next/third-parties/google";

import "@/styles/main.css";
import "@waline/client/style";

// ========== 全局总开关 true=全站全部页面关闭 ==========
const MAINTENANCE = false;

// ========== 更新公告配置 ==========
const UPDATE_VERSION = "1.0";
const UPDATE_CONTENT = `
1. 新增书籍
《犯罪心理》、《相见欢》、《红与黑》

2. 书籍版本更新
· 《判官》 更新至1.2
· 《二哈和他的白猫师尊》 更新至1.2
· 《全能游戏设计师》 更新至1.2
· 《人鱼陷落》 更新至1.2`;

// 全局错误边界
class ErrorBoundary extends Component<{ children: ReactNode }, { hasError: boolean }> {
  constructor(props: { children: ReactNode }) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError(): { hasError: boolean } {
    return { hasError: true };
  }
  render(): ReactNode {
    if (this.state.hasError) {
      return (
        <div style={{ padding: "4rem", textAlign: "center" }}>
          <h2>页面渲染出错</h2>
          <p>请检查页面组件代码或重新构建</p>
        </div>
      );
    }
    return this.props.children;
  }
}

type NextPageWithLayout<P = object, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};
type AppPropsWithLayout = AppProps & { Component: NextPageWithLayout };

function App({ Component, pageProps, router }: AppPropsWithLayout) {
  const route = useRouter();
  const [showNotice, setShowNotice] = useState(false);

  // 拦截右键菜单
  useEffect(() => {
    const blockContext = (e: MouseEvent) => e.preventDefault();
    window.addEventListener('contextmenu', blockContext);
    return () => window.removeEventListener('contextmenu', blockContext);
  }, []);

  // 页面挂载立刻判断弹窗，无延迟
  useEffect(() => {
    if (typeof window === "undefined") return;
    const localVer = localStorage.getItem("site_notice_version");
    if (localVer !== UPDATE_VERSION) {
      setShowNotice(true);
    }
  }, []);

  // 关闭弹窗并标记已读
  const closeNotice = () => {
    setShowNotice(false);
    localStorage.setItem("site_notice_version", UPDATE_VERSION);
  };

  // 维护页面拦截逻辑
  const isMaintenancePage = route.pathname === "/maintenance";
  if (MAINTENANCE && !isMaintenancePage) {
    return (
      <div style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "32px",
        gap: "16px"
      }}>
        <h1 style={{ fontSize: "24px", fontWeight: "bold" }}>站点临时维护中</h1>
        <p style={{ color: "#666" }}>本站全部功能暂时关闭，稍后恢复访问</p>
      </div>
    );
  }

  let getLayout;
  if (router.query.simpleLayout) {
    getLayout = (page: ReactElement) => <main>{page}</main>;
  } else if (Component.getLayout) {
    getLayout = Component.getLayout;
  } else {
    getLayout = getDefaultLayout;
  }

  return (
    <Provider>
      <RootLayout>
        <ErrorBoundary>
          {getLayout(<Component {...pageProps} />)}
        </ErrorBoundary>
        <BaiDuAnalytics />
        <ClarityAnalytics />
        <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GOOGLE_ID || ""} />

        {/* 轻奢高级风公告弹窗 */}
        {showNotice && (
          <div
            className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/20 p-3 backdrop-blur-md"
            onClick={closeNotice}
          >
            <div
              className="w-full max-w-sm bg-white dark:bg-slate-900 rounded-lg p-5 shadow-xl shadow-black/8 border border-slate-200 dark:border-slate-700/60"
              onClick={(e) => e.stopPropagation()}
            >
              {/* 移除右上角关闭X */}

              {/* 标题左对齐，克制字重 */}
              <h2 className="text-base font-medium text-slate-900 dark:text-slate-50 mb-4 text-left tracking-tight">
                站点更新通知
              </h2>

              {/* 正文区域：淡渐变分层，无厚重底色，高级柔和 */}
              <div className="rounded p-3 mb-5 bg-gradient-to-r from-slate-50/70 to-slate-100/40 dark:from-slate-800/30 dark:to-slate-800/10">
                <pre className="whitespace-pre-wrap text-xs text-slate-500 dark:text-slate-400 leading-relax font-sans">
                  {UPDATE_CONTENT}
                </pre>
              </div>

              {/* 渐变柔和按钮，低饱和不刺眼 */}
              <button
                onClick={closeNotice}
                className="w-full py-2.5 rounded-md bg-gradient-to-r from-blue-500 to-blue-400 hover:from-blue-450 hover:to-blue-350 transition-all text-xs font-medium text-white shadow-sm shadow-blue-400/15"
              >
                我知道了
              </button>
            </div>
          </div>
        )}
      </RootLayout>
    </Provider>
  );
}

function getDefaultLayout(page: ReactElement): ReactNode {
  return <WithNavigationFooter>{page}</WithNavigationFooter>;
}

export default App;