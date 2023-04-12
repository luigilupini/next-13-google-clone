/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
    images: {
      allowFutureImage: true,
    },
  },
  images: {
    domains: ['www.google.com', 'i.gifer.com', 'ipgeolocation.io'],
  },
};

module.exports = nextConfig;
