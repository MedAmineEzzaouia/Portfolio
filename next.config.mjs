/** @type {import('next').NextConfig} */
const nextConfig = {
  // output: 'export', // Comment out for development
  images: { unoptimized: true },
  // basePath: '/amine-portfolio', // Comment out for local development
  // assetPrefix: '/amine-portfolio/', // Comment out for local development
  eslint: { ignoreDuringBuilds: true },
  typescript: { ignoreBuildErrors: true },
  // trailingSlash: true, // Comment out for development
}
export default nextConfig
