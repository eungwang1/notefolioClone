module.exports = {
  images: {
    domains: ["loremflickr.com", "via.placeholder.com", "cloudflare-ipfs.com"],
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });

    return config;
  },
};
