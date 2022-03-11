const deps = require("./package.json").dependencies;

module.exports = {
  name: "account",
  exposes: {
    "./AddressPage": "./src/pages/AddressPage/AddressPage",
    "./UserDetailPage": "./src/pages/UserDetailPage/UserDetailPage",
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