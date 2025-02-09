import { NextConfig } from "next";

const nextConfig: NextConfig = {
    reactStrictMode: true,
    eslint: {
        ignoreDuringBuilds: true,
    }
    // Add additional Next.js configuration options here.
};

export default nextConfig;