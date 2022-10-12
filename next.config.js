// eslint-disable-next-line @typescript-eslint/no-var-requires
const withPWA = require("next-pwa");

const isProd = process.env.NODE_ENV === "production";

/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  pwa: {
    dest: "public",
    disabled: !isProd
  }
};

module.exports = () => {
  const plugins = [withPWA];
  const config = plugins.reduce((acc, next) => next(acc), {
    ...nextConfig
  });

  return config;
};
