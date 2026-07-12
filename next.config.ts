import type { NextConfig } from "next";

// When deploying to GitHub Pages as a project site, assets live under
// /<repo>. The workflow sets GITHUB_PAGES=true so local dev is unaffected.
const isGithubPages = process.env.GITHUB_PAGES === "true";
const repo = "SpherearthCorp.Website";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  ...(isGithubPages
    ? { basePath: `/${repo}`, assetPrefix: `/${repo}/` }
    : {}),
};

export default nextConfig;
