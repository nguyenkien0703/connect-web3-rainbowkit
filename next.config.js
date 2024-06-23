/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack: config => {
    config.externals.push('pino-pretty', 'lokijs', 'encoding');
    return config;
  },
  
    // i18n: {
    //   locales: ['default', 'en', 'zh-CN'],
    //   defaultLocale: 'default',
    // },
  
};

module.exports = nextConfig;
