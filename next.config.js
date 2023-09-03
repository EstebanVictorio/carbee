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

const nextConfig = {
  rewrites,
}


module.exports = nextConfig