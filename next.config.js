/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  exportTrailingSlash: true,
  trailingSlash: true,
  experimental: {
    appDir: true,
  },
  images: { unoptimized: true }
};

module.exports = nextConfig;
