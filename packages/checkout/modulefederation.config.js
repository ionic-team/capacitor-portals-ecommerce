const deps = require("./package.json").dependencies;

module.exports = {
  name: "checkout",
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
    },
    "provider-lib": {
      singleton: true,
      requiredVersion: deps["provider-lib"]
    }
  },
};