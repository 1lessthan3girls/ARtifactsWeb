import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: './',   // or remove entirely if deploying at root
  assetsInclude: ['**/*.apk'],
  plugins: [react()],
  server: {
    host: '0.0.0.0',
    port: 5173,
  },
})
