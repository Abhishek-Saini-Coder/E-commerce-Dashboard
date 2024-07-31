const NextFederationPlugin = require("@module-federation/nextjs-mf");

module.exports = {
  webpack(config, options) {
    config.plugins.push(
      new NextFederationPlugin({
        name: "order-management",
        filename: "static/chunks/remoteEntry.js",
        exposes: {
          "./OrderList": "./components/OrderList.js",
        },
        shared: ["react", "react-dom"],
      })
    );
    return config;
  },
};
