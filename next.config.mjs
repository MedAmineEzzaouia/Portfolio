/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Enable static export for GitHub Pages
  images: { unoptimized: true },
  basePath: '/Portfolio', // Your repository name
  assetPrefix: '/Portfolio/', // Your repository name
  eslint: { ignoreDuringBuilds: true },
  typescript: { ignoreBuildErrors: true },
  trailingSlash: true, // Required for GitHub Pages
}
export default nextConfig
