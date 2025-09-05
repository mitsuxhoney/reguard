import path from 'path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import proxyOptions from './proxyOptions'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss],
  server: {
    port: 7070,
    host: '0.0.0.0',
    proxy: proxyOptions,
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  build: {
    outDir: '../xray/public/reguard',
    emptyOutDir: true,
    target: 'es2015',
  },
})
