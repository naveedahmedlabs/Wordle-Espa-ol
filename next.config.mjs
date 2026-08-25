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
};

export default withPayload(nextConfig);
