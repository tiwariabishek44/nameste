import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Allow previewing the dev server from other devices on the local network
  // (e.g. your phone at 192.168.1.44) without the cross-origin HMR warning.
  allowedDevOrigins: ["192.168.1.44"],
};

export default nextConfig;
