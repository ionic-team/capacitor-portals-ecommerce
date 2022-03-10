const deps = require("./package.json").dependencies;

module.exports = {
  name: "account",
  exposes: {
    "./CheckoutPage": "./src/pages/CheckoutPage",
    "./PaymentPage": "./src/pages/PaymentPage",
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