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
  // Required for Cloudflare Pages via @cloudflare/next-on-pages
  experimental: {
    runtime: 'edge',
  },
};

export default withPayload(nextConfig);
