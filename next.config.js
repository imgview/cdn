/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'fture.ngomik.org',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'delivery.shngm.id',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'kiryuu02.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: '**.ngomik.org',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'i.imgur.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        pathname: '/**',
      },
    ],
    // Unlimited optimization (default limit 1000 di free tier)
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    formats: ['image/webp', 'image/avif'],
  },
}

module.exports = nextConfig
