import { defineCloudflareConfig } from "@opennextjs/cloudflare";

export default defineCloudflareConfig({
  edgeExternals: ["@next/env", "jose", "pg-cloudflare", "drizzle-kit"],
});
