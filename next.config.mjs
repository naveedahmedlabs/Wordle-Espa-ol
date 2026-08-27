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
    config.resolve.alias["payload/dist/bin/loadEnv.js"] = path.resolve(dirname, "src/shims/loadEnv.js");
    config.resolve.alias["../bin/loadEnv.js"] = path.resolve(dirname, "src/shims/loadEnv.js");
    config.resolve.alias["node:sqlite"] = path.resolve(dirname, "src/shims/empty.js");
    config.resolve.alias["better-sqlite3"] = path.resolve(dirname, "src/shims/empty.js");
    config.resolve.alias["sqlite3"] = path.resolve(dirname, "src/shims/empty.js");

    if (isServer) {
      config.externals = config.externals || [];
      config.externals.push("pg-cloudflare", "drizzle-kit", "drizzle-kit/api", "jose");
    }
    return config;
  },
};

const finalConfig = withPayload(nextConfig);

// Ensure custom shims run on top of withPayload webpack modifications
const originalWebpack = finalConfig.webpack;
finalConfig.webpack = (config, options) => {
  if (originalWebpack) {
    config = originalWebpack(config, options);
  }
  config.resolve = config.resolve || {};
  config.resolve.alias = config.resolve.alias || {};
  config.resolve.alias["@next/env"] = path.resolve(dirname, "src/shims/next-env.js");
  config.resolve.alias["payload/dist/bin/loadEnv.js"] = path.resolve(dirname, "src/shims/loadEnv.js");
  config.resolve.alias["../bin/loadEnv.js"] = path.resolve(dirname, "src/shims/loadEnv.js");
  config.resolve.alias["node:sqlite"] = path.resolve(dirname, "src/shims/empty.js");
  config.resolve.alias["better-sqlite3"] = path.resolve(dirname, "src/shims/empty.js");
  config.resolve.alias["sqlite3"] = path.resolve(dirname, "src/shims/empty.js");

  if (options.isServer) {
    config.externals = config.externals || [];
    config.externals.push("pg-cloudflare", "drizzle-kit", "drizzle-kit/api", "jose");
  }
  return config;
};

export default finalConfig;
