const deps = require("./package.json").dependencies;

module.exports = {
  name: "account",
  exposes: {
    "./AddressPage": "./src/pages/AddressPage",
    "./UserDetailPage": "./src/pages/UserDetailPage",
  },
  filename: "remoteEntry.js",
  shared: {
    ...deps,
    react: {
      singleton: true,
      requiredVersion: deps["react"],
    },
    "react-dom": {
      singleton: true,
      requiredVersion: deps["react-dom"],
    },
  },
};