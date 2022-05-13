/** @type {import('next').NextConfig} */

const nextConfig = {
    reactStrictMode: true,
    trailingSlash: true,
    basePath: '/pun/sys/pfclm-flask',
    assetPrefix: 'https://verde.princeton.edu/pun/sys/pfclm-flask',
    async rewrites() {
        return [
            {
                source: '/api/:path*',
                destination: 'https://verde.princeton.edu/pun/sys/pfclm-flask/api',
                basePath: false,
            }
        ]
    },
};

module.exports = nextConfig;