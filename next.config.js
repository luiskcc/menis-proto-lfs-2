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
    ],
  },
}

module.exports = nextConfig
