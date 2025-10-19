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
        hostname: 'cdn3.imgkomik.xyz',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: '08.shinigami.asia',
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
    deviceSizes: [300],
    imageSizes: [300, 350, 400, 450, 500, 550, 600],
    formats: ['image/webp', 'image/avif'],
  },
}

module.exports = nextConfig
