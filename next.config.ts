import type { NextConfig } from "next";

const isGithubPages = process.env.GITHUB_PAGES === "true";

const nextConfig: NextConfig = {
  output: "export",
  basePath: isGithubPages ? `/etp-attendee-front` : "",
  assetPrefix: isGithubPages ? `/etp-attendee-front/` : "",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  publicRuntimeConfig: {
    basePath: isGithubPages ? `/etp-attendee-front` : "",
  },
};

export default nextConfig;
