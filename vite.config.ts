import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import {VitePWA} from "vite-plugin-pwa";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(),
    VitePWA({
      injectRegister: 'inline',
      registerType: 'autoUpdate',
      devOptions: {
        enabled: true
      }})],
  server: {
    proxy: {
      '/restaurant': 'http://3.36.253.255:8080',
    },
  },
})
