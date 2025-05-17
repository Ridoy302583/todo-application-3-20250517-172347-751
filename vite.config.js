import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  esbuild: {
    // Reduce complexity to avoid esbuild errors
    logOverride: { 'this-is-undefined-in-esm': 'silent' }
  },
  server: {
    hmr: false // Disable HMR to avoid timeout issues
  }
})
