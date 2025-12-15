import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  experimental: {
    optimizePackageImports: ["@chakra-ui/react"],
    serverActions: {
      bodySizeLimit: "3mb",
    },
  },
};

export default nextConfig;
