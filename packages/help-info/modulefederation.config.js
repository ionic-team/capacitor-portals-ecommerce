const deps = require("./package.json").dependencies;

module.exports = {
  name: "account",
  exposes: {
    "./HelpPage": "./src/pages/HelpPage",
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