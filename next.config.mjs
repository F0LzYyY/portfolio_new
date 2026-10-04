/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/portfolio_new',
  assetPrefix: '/portfolio_new/',
  images: {
    remotePatterns: [],
    unoptimized: true,
  },
  // Ensure trailing slashes for GitHub Pages compatibility
  trailingSlash: true,
}

export default nextConfig
