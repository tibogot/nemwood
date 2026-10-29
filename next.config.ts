import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
      },
    ],
    formats: ["image/webp", "image/avif"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384, 512],
    minimumCacheTTL: 31536000, // 1 year
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    qualities: [75, 85], // Required in Next.js 16+: allowed image quality values
  },
  experimental: {
    optimizePackageImports: ["lucide-react", "gsap", "@gsap/react"],
    scrollRestoration: true,
  },
  compiler: {
    removeConsole: process.env.NODE_ENV === "production",
  },
  poweredByHeader: false,
  compress: true,
  generateEtags: false,
  // Redirects are handled by src/proxy.ts. Bundling is Turbopack's (default
  // since Next 16): no custom webpack config, whose forced "vendor" chunk used
  // to pull the Studio's multi-MB deps into every page of the site.
};

export default nextConfig;
