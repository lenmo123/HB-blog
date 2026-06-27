import { Head, Html, Main, NextScript } from "next/document";

function Document() {
  return (
    <Html lang="zh-CN">
      <Head>
        {/* 禁止移动端双指放大页面 */}
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no"
        />
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
        <link rel="apple-touch-icon" href="/assets/images/cover.jpg" />
        {/* 引入思源宋体 */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Serif+SC:wght@400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body>
        <div id="skip-navigation" />
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

export default Document;
