import type { NextConfig } from "next";

const isGithubPages = process.env.GITHUB_PAGES === "true";

const nextConfig: NextConfig = {
  output: "export",
  basePath: isGithubPages ? `https://jgill.ie/etp-attendee-front` : "",
  assetPrefix: isGithubPages ? `https://jgill.ie/etp-attendee-front/` : "",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
