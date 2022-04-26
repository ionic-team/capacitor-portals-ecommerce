import { CapacitorConfig } from '@capacitor/cli';

const capacitorConfig: CapacitorConfig = {
  appId: 'io.ionic.portals.ecommercewebapp',
  appName: 'Portals Web App',
  webDir: '../shell/build',
  bundledWebRuntime: false,
  plugins: {
    Portals: {
      shell: {
        name: 'shell',
        webDir: '../shell/build',
      },
      apps: [
        {
          name: 'account',
          webDir: '../account/build',
        },
        {
          name: 'checkout',
          webDir: '../checkout/build',
        },
        {
          name: 'helpinfo',
          webDir: '../helpinfo/build',
        },
      ],
    },
  },
};

export default capacitorConfig;
