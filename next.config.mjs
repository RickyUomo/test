/** @type {import('next').NextConfig} */
import path from "path";

const nextConfig = {
  webpack: (config) => {
    config.module.rules.push({
      test: /\.(js|jsx|ts|tsx)$/,
      include: [path.resolve(process.cwd(), "app")],
      use: [
        {
          loader: "webpack-remove-block-loader",
        },
      ],
    });

    return config;
  },
};

export default nextConfig;
