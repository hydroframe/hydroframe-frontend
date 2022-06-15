/** @type {import('next').NextConfig} */

const nextConfig = {
    reactStrictMode: true,
    trailingSlash: true,
    basePath: '',
    assetPrefix: '',
    async rewrites() {
        return [
            {
                source: '/api/:path*',
                destination: 'http://127.0.0.1:5000/api/:path*',
                basePath: false,
            }
        ]
    },
};

module.exports = nextConfig;