const NextFederationPlugin = require("@module-federation/nextjs-mf");

module.exports = {
  webpack(config, options) {
    config.plugins.push(
      new NextFederationPlugin({
        name: "user_profile",
        filename: "static/chunks/remoteEntry.js",
        exposes: {
          "./ProfileInfo": "./components/ProfileInfo.js",
        },
        shared: ["react", "react-dom"],
      })
    );
    return config;
  },
};
