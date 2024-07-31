const NextFederationPlugin = require("@module-federation/nextjs-mf");

module.exports = {
  webpack(config, options) {
    config.plugins.push(
      new NextFederationPlugin({
        name: "main",
        remotes: {
          "product-catalog":
            "product_catalog@http://localhost:3001/_next/static/chunks/remoteEntry.js",
          "order-management":
            "order_management@http://localhost:3002/_next/static/chunks/remoteEntry.js",
          "user-profile":
            "user_profile@http://localhost:3003/_next/static/chunks/remoteEntry.js",
        },
        filename: "static/chunks/remoteEntry.js",
      })
    );
    return config;
  },
};
