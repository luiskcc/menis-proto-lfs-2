/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'demoairbnbbucket.s3.us-east-2.amazonaws.com',
        port: '',
        pathname: '/matriz/**',
      },
      {
        protocol: 'https',
        hostname: 'demoairbnbbucket.s3.us-east-2.amazonaws.com',
        port: '',
        pathname: '/hero-carousel-landing/**',
      },
      {
        protocol: 'https',
        hostname: 'demoairbnbbucket.s3.us-east-2.amazonaws.com',
        port: '',
        pathname: '/6_MENIS+HATCHING/**',
      },
      {
        protocol: 'https',
        hostname: 'demoairbnbbucket.s3.us-east-2.amazonaws.com',
        port: '',
        pathname: '/menis-lab/**',
      },
      {
        protocol: 'https',
        hostname: 'demoairbnbbucket.s3.us-east-2.amazonaws.com',
        port: '',
        pathname: '/IMAGEN_PRINCIPAL_REAL/**',
      },
      {
        protocol: 'https',
        hostname: 'demoairbnbbucket.s3.us-east-2.amazonaws.com',
        port: '',
        pathname: '/section-1/**',
      },
      {
        protocol: 'https',
        hostname: 'demoairbnbbucket.s3.us-east-2.amazonaws.com',
        port: '',
        pathname: '/carousel/**',
      },
      {
        protocol: 'https',
        hostname: 'demoairbnbbucket.s3.us-east-2.amazonaws.com',
        port: '',
        pathname: '/section-3/**',
      },
      {
        protocol: 'https',
        hostname: 'demoairbnbbucket.s3.us-east-2.amazonaws.com',
        port: '',
        pathname: '/magma-project/**',
      },
    ],
    minimumCacheTTL: 60,
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    formats: ['image/webp'],
  },
  experimental: {
    serverActions: {
      bodySizeLimit: '10mb',
    },
  },
}

module.exports = nextConfig
