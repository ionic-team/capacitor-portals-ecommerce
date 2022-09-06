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
        webDir: './build',
        liveUpdateConfig: {
          appId: "e9597b11",
          channel: "production",
          autoUpdateMethod: "none"
        }
      },
      apps: [
        {
          name: 'account',
          webDir: '../account/build',
          liveUpdateConfig: {
          appId: "3fde24f8",
          channel: "production",
            autoUpdateMethod: "none"
          }
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
