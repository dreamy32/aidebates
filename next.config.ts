import { withPayload } from "@payloadcms/next/withPayload";
import { NextConfig } from "next";

const nextConfig: NextConfig = {
    reactStrictMode: true,
    eslint: {
        ignoreDuringBuilds: true,
    }
    // Add additional Next.js configuration options here.
};

export default withPayload(nextConfig);