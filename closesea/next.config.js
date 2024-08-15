/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["gateway.pinata.cloud"],
  },
  experimental: {
    missingSuspenseWithCSRBailout: false,
  },
};

module.exports = nextConfig;
