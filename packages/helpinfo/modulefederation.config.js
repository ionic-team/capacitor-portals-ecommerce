const deps = require("./package.json").dependencies;

module.exports = {
  name: "account",
  exposes: {
    "./HelpPage": "./src/pages/HelpPage/HelpPage",
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
    "@ionic/react": {
      singleton: true,
      requiredVersion: deps["@ionic/react"],
    },
    "@capacitor/core": {
      singleton: true,
      requiredVersion: deps["@capacitor/core"],
    }
  },
};