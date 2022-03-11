const deps = require("./package.json").dependencies;

module.exports = {
  name: "account",
  exposes: {
    "./CheckoutPage": "./src/pages/CheckoutPage/CheckoutPage",
    "./PaymentPage": "./src/pages/PaymentPage/PaymentPage",
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