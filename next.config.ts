import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/summerlyn-advisors',
  images: {
    unoptimized: true,
  },
  // Disable server-side features since we're exporting static
  trailingSlash: true,
};

export default nextConfig;
