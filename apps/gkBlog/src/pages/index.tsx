import Head from "@/components/meta/Head";

import { getBaseUrl } from "@/helpers/url";

import IndexContents from "@/contents/index";

function Index() {
  const baseUrl = getBaseUrl();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "小冷书屋",
    description:
      "",
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
        // eslint-disable-next-line react/no-danger
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
