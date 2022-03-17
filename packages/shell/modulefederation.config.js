const deps = require('./package.json').dependencies;
const getPortalLocation = require('capacitor-portals').getPortalLocation;
const isCapBuild = process.env.CAP_BUILD;

const remotes =
  isCapBuild == null
    ? {
        account: 'account@http://localhost:3004/remoteEntry.js',
        checkout: 'checkout@http://localhost:3005/remoteEntry.js',
        helpinfo: 'helpinfo@http://localhost:3006/remoteEntry.js',
      }
    : {
        account: `account@${getPortalLocation('account')}/remoteEntry.js`,
        checkout: `checkout@${getPortalLocation('checkout')}/remoteEntry.js`,
        helpinfo: `helpinfo@${getPortalLocation('helpinfo')}/remoteEntry.js`,
      };

module.exports = {
  name: 'shell',
  remotes,
  filename: 'remoteEntry.js',
  shared: {
    ...deps,
    react: {
      singleton: true,
      requiredVersion: deps['react'],
    },
    'react-dom': {
      singleton: true,
      requiredVersion: deps['react-dom'],
    },
    '@ionic/react': {
      singleton: true,
      requiredVersion: deps['@ionic/react'],
    },
    '@capacitor/core': {
      singleton: true,
      requiredVersion: deps['@capacitor/core'],
    },
    'provider-lib': {
      singleton: true,
      requiredVersion: deps['provider-lib'],
    },
  },
};
