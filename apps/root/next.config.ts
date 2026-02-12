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

      //-------------------------------
      // for served fallback UI
      {
        source: "/_zones/iphone",
        destination: `${iphoneDomain}/iphone`,
      },
      {
        source: "/_zones/iphone/:path+",
        destination: `${iphoneDomain}/iphone/:path+`,
      },


      // for route zone
      {
        source: "/iphone/:path+",
        destination: `${iphoneDomain}/iphone/:path+`,
      },
      {
        source: "/iphone-static/:path+",
        destination: `${iphoneDomain}/iphone-static/:path+`,
      },

      // for served fallback UI
      {
        source: "/_zones/ipad",
        destination: `${ipadDomain}/ipad`,
      },
      {
        source: "/_zones/ipad/:path+",
        destination: `${ipadDomain}/ipad/:path+`,
      },


      // for route zone
      {
        source: "/ipad/:path+",
        destination: `${ipadDomain}/ipad/:path+`,
      },
      {
        source: "/ipad-static/:path+",
        destination: `${ipadDomain}/ipad-static/:path+`,
      },

      // for served fallback UI
      {
        source: "/_zones/macbook",
        destination: `${macbookDomain}/macbook`,
      },
      {
        source: "/_zones/macbook/:path+",
        destination: `${macbookDomain}/macbook/:path+`,
      },

      // for route zone
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
