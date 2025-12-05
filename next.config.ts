import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "picsum.photos",
      },
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
  webpack: (config, { dev, isServer }) => {
    if (dev) {
      config.watchOptions = {
        poll: 1000,
        aggregateTimeout: 300,
        ignored: /node_modules/,
      };
    }

    // Optimize bundle splitting
    if (!isServer) {
      config.optimization.splitChunks = {
        chunks: "all",
        cacheGroups: {
          default: false,
          vendors: false,
          // GSAP bundle
          gsap: {
            name: "gsap",
            chunks: "all",
            test: /[\\/]node_modules[\\/](gsap|@gsap)[\\/]/,
            priority: 40,
          },
          // Three.js bundle
          three: {
            name: "three",
            chunks: "all",
            test: /[\\/]node_modules[\\/](three|@react-three)[\\/]/,
            priority: 35,
          },
          // Other vendor libraries
          vendor: {
            name: "vendor",
            chunks: "all",
            test: /[\\/]node_modules[\\/]/,
            priority: 30,
          },
        },
      };
    }

    return config;
  },
};

export default nextConfig;
