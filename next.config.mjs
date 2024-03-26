/** @type {import('next').NextConfig} */
import path from "path";

const nextConfig = {
  webpack: (config, { isServer }) => {
    // Add the loader configuration for JavaScript files
    config.module.rules.push({
      test: /\.(js|jsx|ts|tsx)$/,
      exclude: /node_modules/,
      use: [
        // Use the webpack-remove-block-loader
        {
          loader: "webpack-remove-block-loader",
          options: {
            blocks: [
              // Specify the comment blocks to be removed
              {
                start: "/* remove-block-start */",
                end: "/* remove-block-end */",
              },
            ],
          },
        },
      ],
    });

    return config;
  },
};

export default nextConfig;
