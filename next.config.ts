import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: false,
  },
  output: "export",
  trailingSlash: true, // Ensures proper file-based routing
  images: {
    unoptimized: true, // Needed for Next.js Image component in static mode
  },
  basePath: "/etp-attendee-front",
};

export default nextConfig;
