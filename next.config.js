/**
 * @typedef {import("next").NextConfig} NextConfig
 */

/**
 * @type {NextConfig} nextConfig
 */
const nextConfig = {
  experimental: {
    serverActions: true,
  }
}


module.exports = nextConfig