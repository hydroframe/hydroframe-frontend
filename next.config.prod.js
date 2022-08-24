/** @type {import('next').NextConfig} */

const nextConfig = {
    reactStrictMode: true,
    trailingSlash: true,
    basePath: '/pun/sys/app3',
    assetPrefix: 'https://verde.princeton.edu/pun/sys/pfclm-flask',
    env: {
        basePath: 'https://verde.princeton.edu/pun/sys/pfclm-flask'
    }
};

module.exports = nextConfig;
