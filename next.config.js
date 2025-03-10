/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["localhost", "aceternity.com"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
        port: "",
      },
      {
        protocol: "https",
        hostname: "assets.aceternity.com",
        port: "",
      },
    ],
  },
};

module.exports = nextConfig;
