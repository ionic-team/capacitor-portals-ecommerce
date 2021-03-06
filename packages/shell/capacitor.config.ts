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
        appId: '1321320',
      },
      apps: [
        {
          name: 'account',
          webDir: '../account/build',
          appId: '1321321',
        },
        {
          name: 'checkout',
          webDir: '../checkout/build',
          appId: '1321322',
        },
        {
          name: 'helpinfo',
          webDir: '../helpinfo/build',
          appId: '1321323',
        },
      ],
    },
  },
};

export default capacitorConfig;
