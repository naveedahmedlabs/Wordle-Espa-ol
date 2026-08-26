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
  outputFileTracingIncludes: {
    "/**": ["./node_modules/jose/**/*"],
  },
  serverExternalPackages: [
    "jose",
    "pg-cloudflare",
    "drizzle-kit",
    "@payloadcms/db-postgres",
    "pg",
  ],
  webpack: (config, { isServer }) => {
    if (isServer) {
      config.externals = config.externals || [];
      config.externals.push("pg-cloudflare", "drizzle-kit", "drizzle-kit/api", "jose");
    }
    return config;
  },
};

export default withPayload(nextConfig);
