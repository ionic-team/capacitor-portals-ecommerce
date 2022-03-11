import { CapacitorConfig } from '@capacitor/cli';

interface NewCapacitorConfig extends CapacitorConfig {
  // new config key
  portals: {
    // given portal name => path to the build directory
    [key: string]: string;
  }
}

const config: NewCapacitorConfig = {
  appId: 'io.ionic.portals.ecommercewebapp',
  appName: 'Portals Web App',
  webDir: 'build',
  bundledWebRuntime: false,
  portals: {
    account: '../account/build',
    cart: '../cart/build',
    helpinfo: '../helpinfo/build'
  }
};

export default config;
