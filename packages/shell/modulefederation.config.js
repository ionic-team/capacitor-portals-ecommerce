const deps = require("./package.json").dependencies;

module.exports = {
  name: "shell",
  remotes: {
    account: "account@help-info@http://localhost:3002/remoteEntry.js",
    cart: "cart@http://localhost:3002/remoteEntry.js",
    'help-info': "help-info@http://localhost:3002/remoteEntry.js",
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