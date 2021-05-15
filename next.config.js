module.exports = {
  future: {
    webpack5: true,
  },
  reactStrictMode: true,
  poweredByHeader: false,
  webpack: (config, {dev, isServer}) => {
    if (isServer) {
      require('./utils/generate-sitemap')
    }

    return config
  },
}
