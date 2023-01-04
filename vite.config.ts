import {defineConfig} from 'vite'
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
            }
        })],
    server: {
        proxy: {
            '/restaurants': 'http://localhost:8080',
        }
    }
})