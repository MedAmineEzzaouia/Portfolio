/** @type {import('next').NextConfig} */
const nextConfig = {
  output: process.env.NODE_ENV === 'production' ? 'export' : undefined, // Enable static export only for GitHub Pages
  images: { unoptimized: true },
  basePath: process.env.NODE_ENV === 'production' ? '/Portfolio' : '', // Your repository name only in production
  assetPrefix: process.env.NODE_ENV === 'production' ? '/Portfolio/' : '', // Your repository name only in production
  eslint: { ignoreDuringBuilds: true },
  typescript: { ignoreBuildErrors: true },
  trailingSlash: process.env.NODE_ENV === 'production', // Required for GitHub Pages only in production
}
export default nextConfig
