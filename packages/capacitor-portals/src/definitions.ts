import { CapacitorConfig } from '@capacitor/cli';

export interface CapacitorPortalsConfig extends CapacitorConfig {
  portals: {
    [key: string]: {
        webDir: string;
        appId: string;
    }
  }
}