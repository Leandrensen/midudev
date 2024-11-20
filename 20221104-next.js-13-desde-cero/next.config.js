/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'api.dicebear.com',
        port: '',
        pathname: '/9.x/pixel-art/svg',
      },
    ],
    dangerouslyAllowSVG: true,
  },
  reactStrictMode: true,
};

module.exports = nextConfig;
