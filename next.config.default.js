/** @type {import('next').NextConfig} */

const isProd = process.env.DEPLOY_STAGE === 'production'

const nextConfig = {
    reactStrictMode: true,
    trailingSlash: true,
    basePath: isProd ? '/pun/sys/pfclm-flask' : '',
    assetPrefix: isProd ? 'https://verde.princeton.edu/pun/sys/pfclm-flask' : '',
    async rewrites() {
        return [
            {
                source: '/api/:path*',
                destination: isProd ? 'https://verde.princeton.edu/pun/sys/pfclm-flask/api' : 'http://127.0.0.1:5000/api',
                basePath: false,
            }
        ]
    }
};

module.exports = nextConfig;