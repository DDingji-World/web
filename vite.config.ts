import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { VitePWA } from 'vite-plugin-pwa'

// https://vitejs.dev/config/
export default ({ mode }) => {
  process.env = { ...process.env, ...loadEnv(mode, process.cwd()) }
  console.log('vite.config', process.env.VITE_RESTAURANT_SERVER_URL)
  return defineConfig({
    plugins: [
      react(),
      VitePWA({
        injectRegister: 'inline',
        registerType: 'autoUpdate',
        devOptions: {
          enabled: true,
        },
      }),
    ],
    server: {
      proxy: {
        '/restaurant': process.env.VITE_RESTAURANT_SERVER_URL,
      },
    },
  })
}
