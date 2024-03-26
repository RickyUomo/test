/** @type {import('next').NextConfig} */
import path from "path";

const nextConfig = {
  webpack: (config, { isServer, dev }) => {
    // Add the module rule to remove code blocks
    config.module.rules.push({
      test: /\.js$/, // files we want to process
      exclude: /(node_modules|bower_components|\.spec\.js)/, // files we want to exclude
      use: [
        {
          loader: "webpack-remove-code-blocks", // use the loader
        },
      ],
    });

    return config;
  },
};

export default nextConfig;
