const config = {
  // Reference: https://blitzjs.com/docs/image-component#domains
  images: {
    domains: ["localhost"],
  },
  // Env vars defined here will be PUBLIC and included in the client JS bundle
  env: {
    DIRECTUS_URL: process.env.DIRECTUS_URL,
  },
  /* Uncomment this to customize the webpack config
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    // Note: we provide webpack above so you should not `require` it
    // Perform customizations to webpack config
    // Important: return the modified config
    return config
  },
  */
}
module.exports = config
