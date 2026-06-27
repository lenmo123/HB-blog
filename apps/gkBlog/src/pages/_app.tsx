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

// ========== 更新公告配置（去除重复标题） ==========
const UPDATE_VERSION = "1.0.0";
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

  // 仅拦截电脑右键菜单，移除全局touch拦截，恢复页面所有点击交互
  useEffect(() => {
    const blockContext = (e: MouseEvent) => e.preventDefault();
    window.addEventListener('contextmenu', blockContext);

    return () => {
      window.removeEventListener('contextmenu', blockContext);
    };
  }, []);

  // 初始化：对比本地缓存版本，新版本自动弹出公告
  useEffect(() => {
    if (typeof window === "undefined") return;
    const localVer = localStorage.getItem("site_notice_version");
    if (localVer !== UPDATE_VERSION) {
      setShowNotice(true);
    }
  }, []);

  // 关闭公告并标记已读
  const closeNotice = () => {
    setShowNotice(false);
    localStorage.setItem("site_notice_version", UPDATE_VERSION);
  };

  // 维护页放行，其余全部拦截
  const isMaintenancePage = route.pathname === "/maintenance";

  // 开启维护且当前不是维护页 → 直接渲染维护界面，不加载网站任何内容
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

        {/* 全局更新公告弹窗【全新简约改版】 */}
        {showNotice && (
          <div
            className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/40 p-4 backdrop-blur-sm"
            onClick={closeNotice}
          >
            <div
              className="bg-white dark:bg-slate-900 w-full max-w-md rounded-xl p-6 relative shadow-lg"
              onClick={(e) => e.stopPropagation()}
            >
              {/* 关闭按钮 */}
              <button
                onClick={closeNotice}
                className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 text-xl w-7 h-7 flex items-center justify-center rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              >
                ×
              </button>

              {/* 主标题 */}
              <h2 className="text-xl font-semibold dark:text-white mb-5 text-center">站点更新通知</h2>

              {/* 公告正文 - 缩小字号 */}
              <div className="bg-slate-50 dark:bg-slate-800/40 rounded-lg p-4 mb-6">
                <pre className="whitespace-pre-wrap text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-sans">
                  {UPDATE_CONTENT}
                </pre>
              </div>

              {/* 底部确认按钮 */}
              <button
                onClick={closeNotice}
                className="w-full py-3 rounded-lg bg-blue-500 hover:bg-blue-600 active:bg-blue-700 transition-all font-medium text-sm text-white"
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