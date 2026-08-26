import { withPayload } from "@payloadcms/next/withPayload";

/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: true,
  compiler: {
    styledComponents: true,
  },
  images: {
    unoptimized: true,
  },
  serverExternalPackages: [
    "pg-cloudflare",
    "drizzle-kit",
    "@payloadcms/db-postgres",
    "pg",
  ],
  webpack: (config, { isServer }) => {
    if (isServer) {
      config.externals = config.externals || [];
      config.externals.push("pg-cloudflare", "drizzle-kit", "drizzle-kit/api");
    }
    return config;
  },
};

export default withPayload(nextConfig);
