import type { NextConfig } from "next";

const iphoneDomain = process.env.IPHONE_DOMAIN ?? "http://localhost:3001";
const ipadDomain = process.env.IPAD_DOMAIN ?? "http://localhost:3002";
const macbookDomain = process.env.MACBOOK_DOMAIN ?? "http://localhost:3003";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: "/iphone",
        destination: `${iphoneDomain}/iphone`,
      },
      {
        source: "/iphone/:path+",
        destination: `${iphoneDomain}/iphone/:path+`,
      },
      {
        source: "/iphone-static/:path+",
        destination: `${iphoneDomain}/iphone-static/:path+`,
      },
      {
        source: "/ipad",
        destination: `${ipadDomain}/ipad`,
      },
      {
        source: "/ipad/:path+",
        destination: `${ipadDomain}/ipad/:path+`,
      },
      {
        source: "/ipad-static/:path+",
        destination: `${ipadDomain}/ipad-static/:path+`,
      },
      {
        source: "/macbook",
        destination: `${macbookDomain}/macbook`,
      },
      {
        source: "/macbook/:path+",
        destination: `${macbookDomain}/macbook/:path+`,
      },
      {
        source: "/macbook-static/:path+",
        destination: `${macbookDomain}/macbook-static/:path+`,
      },
    ];
  },
};

export default nextConfig;
