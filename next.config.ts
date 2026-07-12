import type { NextConfig } from "next";

// When deploying to GitHub Pages as a project site, assets live under
// /<repo>. The workflow sets GITHUB_PAGES=true so local dev is unaffected.
const isGithubPages = process.env.GITHUB_PAGES === "true";
const repo = "SpherearthCorp.Website";

const basePath = isGithubPages ? `/${repo}` : "";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  // next/image does not prepend basePath to `src`, so expose it for the
  // asset() helper used on all static images referenced from /public.
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
  ...(isGithubPages ? { basePath, assetPrefix: `${basePath}/` } : {}),
};

export default nextConfig;
