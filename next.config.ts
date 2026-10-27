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
  // Redirects are now handled by middleware.ts for better performance
  // Optimize file watching for better performance
  webpack: (config, { dev }) => {
    if (dev) {
      config.watchOptions = {
        poll: 1000,
        aggregateTimeout: 300,
        ignored: /node_modules/,
      };
    }

    // Bundle splitting is left to Next's defaults: a single forced "vendor"
    // chunk would pull the Studio's multi-MB deps into every page of the site.

    return config;
  },
};

export default nextConfig;
