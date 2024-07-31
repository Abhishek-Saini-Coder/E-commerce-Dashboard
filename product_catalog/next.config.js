const NextFederationPlugin = require("@module-federation/nextjs-mf");

module.exports = {
  webpack(config, options) {
    config.plugins.push(
      new NextFederationPlugin({
        name: "product_catalog",
        filename: "static/chunks/remoteEntry.js",
        exposes: {
          "./ProductList": "./components/ProductList.js",
        },
        shared: ["react", "react-dom"],
      })
    );
    return config;
  },
};
