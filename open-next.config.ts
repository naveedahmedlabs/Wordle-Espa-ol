import { defineCloudflareConfig } from "@opennextjs/cloudflare";

export default defineCloudflareConfig({
  edgeExternals: ["@next/env", "jose", "pg-cloudflare", "drizzle-kit", "node:sqlite", "sqlite3", "better-sqlite3"],
});
