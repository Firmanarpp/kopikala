/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
  // Enable React Strict Mode for better development experience
  reactStrictMode: true,
  // Optimize for production
  swcMinify: true,
};

export default nextConfig;
