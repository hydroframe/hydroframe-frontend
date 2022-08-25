/** @type {import('next').NextConfig} */

const nextConfig = {
    reactStrictMode: true,
    trailingSlash: true,
    env: {
        basePath: 'http://127.0.0.1:5000'
    },
};

module.exports = nextConfig;