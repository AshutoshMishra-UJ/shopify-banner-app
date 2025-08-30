import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  define: {
    global: "globalThis",
  },
  resolve: {
    alias: {
      buffer: "buffer",
    },
  },
  server: {
    port: 3000,
    hmr: {
      port: 3001,
    },
    proxy: {
      "^/(\\?.*)?$": "http://localhost:3000",
      "^/api(/|(\\?.*)?$)": "http://localhost:3000",
    },
  },
})
