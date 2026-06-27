import Head from "@/components/meta/Head";
import { getBaseUrl } from "@/helpers/url";
import IndexContents from "@/contents/index";

// 维护开关 true=全站关闭，false=正常访问博客
const MAINTENANCE = true;

function Index() {
  const baseUrl = getBaseUrl();

  // 维护页面UI
  if (MAINTENANCE) {
    return (
      <>
        <Head
          title="站点维护中"
          description="小冷书屋临时维护，稍后恢复访问"
          ogImage={`${baseUrl}/assets/images/og-image.png`}
          overrideTitle
        />
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
          <p style={{ color: "#666" }}>本站暂时关闭，稍后恢复访问</p>
        </div>
      </>
    );
  }

  // 不维护时正常展示首页
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "小冷书屋",
    description: "",
    url: "https://example.com/",
    publisher: {
      "@type": "Person",
      name: "小冷书屋",
      url: "https://example.com/about-me",
    },
    author: {
      "@type": "Person",
      name: "小冷书屋",
      url: "https://example.com/about-me",
    },
    sameAs: [],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Head
        title="小冷书屋"
        description=""
        ogImage={`${baseUrl}/assets/images/og-image.png`}
        overrideTitle
      />
      <IndexContents />
    </>
  );
}

export default Index;