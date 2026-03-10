import type { NextConfig } from "next";

const isGithubActions = process.env.GITHUB_ACTIONS || false;
let repo = "";
if (isGithubActions) {
  const repoFullName = process.env.GITHUB_REPOSITORY || "";
  repo = repoFullName.split("/")[1] || "";
}

const nextConfig: NextConfig = {
  output: "export",
  basePath: repo ? `/${repo}` : undefined,
  images: {
    unoptimized: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  }
};

export default nextConfig;
