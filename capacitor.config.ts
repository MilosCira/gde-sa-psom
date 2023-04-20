import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.example.app',
  appName: 'gde-sa-psom',
  webDir: 'dist/gde-sa-psom',
  bundledWebRuntime: false,
  server: {
    url: 'http://497g122.mars2.mars-hosting.com',
    cleartext: true
  }
};

export default config;
