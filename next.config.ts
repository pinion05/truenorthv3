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
  env: {
    NEXT_PUBLIC_BASE_PATH: repo ? `/${repo}` : "",
  },
  images: {
    unoptimized: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  }
} as any;

export default nextConfig;
