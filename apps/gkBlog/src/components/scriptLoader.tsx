// src/components/ScriptLoader.tsx
import React, { useEffect } from "react";

const ScriptLoader: React.FC = () => {
  useEffect(() => {
    // 在这里加载你的脚本
    const script = document.createElement("script");
    script.src = "https://example.com/some-script.js"; // 替换为你需要的脚本 URL
    script.async = true;
    document.body.appendChild(script);

    // 清理脚本
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return null; // 如果你不需要渲染任何UI元素，可以返回 null
};

export default ScriptLoader;