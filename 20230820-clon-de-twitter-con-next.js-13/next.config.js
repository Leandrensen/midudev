/** @type {import('next').NextConfig} */
// eslint-disable-next-line
// const nodeExternals = require('webpack-node-externals');

const nextConfig = {
  experimental: {
    serverActions: true,
  },
  // webpack: (config, { isServer }) => {
  //   if (!isServer) {
  //     config.externals = [nodeExternals()]; // in order to ignore all modules in node_modules folder
  //   }

  //   return config;
  // },
};

module.exports = nextConfig;
