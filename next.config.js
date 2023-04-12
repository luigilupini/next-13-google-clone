/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
    images: {
      allowFutureImage: true,
      domains: ['www.google.com'],
    },
  },
};

module.exports = nextConfig;
