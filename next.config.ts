import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "d8it4huxumps7.cloudfront.net",
      },
    ],
  },
};

export default nextConfig;
