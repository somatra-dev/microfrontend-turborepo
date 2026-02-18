import type { NextConfig } from "next";

const iphoneDomain = process.env.IPHONE_DOMAIN ?? "http://localhost:3001";
const ipadDomain = process.env.IPAD_DOMAIN ?? "http://localhost:3002";
const macbookDomain = process.env.MACBOOK_DOMAIN ?? "http://localhost:3003";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i.pinimg.com",
      },
    ],
  },
  async rewrites() {
    return [

      // for profile routing
      {
        source: "/iphone/profile",
        destination: "/profile",
      },
      {
        source: "/iphone/profile/:path+",
        destination: "/profile/:path+",
      },
      {
        source: "/ipad/profile",
        destination: "/profile",
      },
      {
        source: "/ipad/profile/:path+",
        destination: "/profile/:path+",
      },
      {
        source: "/macbook/profile",
        destination: "/profile",
      },
      {
        source: "/macbook/profile/:path+",
        destination: "/profile/:path+",
      },

      //------------------------------
      {
        source: "/iphone-static/:path+",
        destination: `${iphoneDomain}/iphone-static/:path+`,
      },

      {
        source: "/ipad-static/:path+",
        destination: `${ipadDomain}/ipad-static/:path+`,
      },

      {
        source: "/macbook-static/:path+",
        destination: `${macbookDomain}/macbook-static/:path+`,
      },
    ];
  },
};

export default nextConfig;
