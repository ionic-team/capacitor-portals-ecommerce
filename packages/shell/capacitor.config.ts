import { CapacitorPortalsConfig } from 'capacitor-portals';

const capacitorConfig: CapacitorPortalsConfig = {
  appId: 'io.ionic.portals.ecommercewebapp',
  appName: 'Portals Web App',
  webDir: 'build',
  bundledWebRuntime: false,
  portals: {
    account: {
      webDir: '../account/build',
      appId: '543543',
    },
    checkout: {
      webDir: '../cart/build',
      appId: '543544',
    },
    helpinfo: {
      webDir: '../helpinfo/build',
      appId: '543545',
    },
  },
};

export default capacitorConfig;
