import { withPayload } from "@payloadcms/next/withPayload";
import path from "path";
import { fileURLToPath } from "url";

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

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
    config.resolve = config.resolve || {};
    config.resolve.alias = config.resolve.alias || {};
    config.resolve.alias["@next/env"] = path.resolve(dirname, "src/shims/next-env.js");

    if (isServer) {
      config.externals = config.externals || [];
      config.externals.push("pg-cloudflare", "drizzle-kit", "drizzle-kit/api", "jose");
    }
    return config;
  },
};

export default withPayload(nextConfig);
