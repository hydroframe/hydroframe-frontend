/** @type {import('next').NextConfig} */
const nextConfig = {
reactStrictMode: true,
trailingSlash: true,
basePath: '/pun/dev/pfclm-flask-app',
assetPrefix: 'https://verde.princeton.edu/pun/dev/pfclm-flask-app',
env: {
basePath: 'https://verde.princeton.edu/pun/dev/pfclm-flask-app'
}
};
module.exports = nextConfig;
