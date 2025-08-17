/** @type {import('next').NextConfig} */

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;

const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
        pathname: `**`,
      },
    ],
  },
};

export default nextConfig;
