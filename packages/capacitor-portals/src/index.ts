export * from './definitions';
import { CapacitorPortalsConfig } from './definitions';

function loadCapConfig(): CapacitorPortalsConfig {
  return {
    "appId": "io.ionic.portals.ecommercewebapp",
    "appName": "Portals Web App",
    "webDir": "build",
    "bundledWebRuntime": false,
    "portals": {
        "account": {
        "webDir": "../account/build",
        "appId": "543543"
        },
        "checkout": {
        "webDir": "../cart/build",
        "appId": "543544"
        },
        "helpinfo": {
        "webDir": "../helpinfo/build",
        "appId": "543545"
        }
    }
  }
}

const getPortalLocation = (portalName: string) => {
    const config = loadCapConfig();
    return config.portals[portalName].appId;
};
export {
    getPortalLocation
}