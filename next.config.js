/**
 * @typedef {import("next").NextConfig} NextConfig
 */

/**
 * @type {NextConfig['rewrites']} rewrites
 */
const rewrites = async () => {
  return [
    { source: "/login", destination: process.env.API_URL },
  ]
}

/**
 * @type {NextConfig} nextConfig
 */
const nextConfig = {
  rewrites,
  experimental: {
    serverActions: true,
  }
}


module.exports = nextConfig