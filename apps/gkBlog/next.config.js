/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // 开启 WebP + AVIF 自动格式转换，体积砍半
    formats: ['image/avif', 'image/webp'],
    // 适配常用设备尺寸，自动生成响应式图片
    deviceSizes: [320, 480, 640, 750, 828, 1080],
    // 必须关闭，允许Next.js优化本地图片
    unoptimized: false
  },
  // 静态资源永久缓存，重复访问秒开
  async headers() {
    return [
      {
        source: '/_next/image/:path*',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' }
        ]
      },
      {
        source: '/assets/:path*',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=31536000' }
        ]
      }
    ]
  }
};

module.exports = nextConfig;
