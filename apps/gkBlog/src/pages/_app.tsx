import { Component, ReactElement, ReactNode, useEffect } from "react";
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
      </RootLayout>
    </Provider>
  );
}

function getDefaultLayout(page: ReactElement): ReactNode {
  return <WithNavigationFooter>{page}</WithNavigationFooter>;
}

export default App;