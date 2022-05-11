/** @type {import('next').NextConfig} */

const isProd = process.env.DEPLOY_STAGE === 'production'

const nextConfig = {
    reactStrictMode: true,
    assetPrefix: isProd ? 'https://verde.princeton.edu/pun/sys/pfclm-flask' : 'http://127.0.0.1:5000',
    basePath: isProd ? '/pun/sys/pfclm-flask' : '',
    trailingSlash: true
};

module.exports = nextConfig;
