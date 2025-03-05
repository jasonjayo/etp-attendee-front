import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/etp-attendee-front",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
