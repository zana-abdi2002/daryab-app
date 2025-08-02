import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  serverExternalPackages: ["@stream-io/node-sdk"],
  images: {
    domains: ["localhost"],
  },
  env: {
    CUSTOM_KEY: process.env.CUSTOM_KEY,
  },
};

export default nextConfig;
