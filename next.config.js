/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  assetPrefix: 'https://verde.princeton.edu/pun/dev/pfclm-flask-app',
  basePath: '/pun/dev/pfclm-flask-app',
  trailingSlash: true,

  exportPathMap: async function (
    defaultPathMap,
    { dev, dir, outDir, distDir, buildId }
  ) {
    return {
      '/': { page: '/' },
      '/modeling': { page: '/modeling' },
      '/domain': { page: '/domain' },
    }
  },

}

module.exports = nextConfig
