import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    include: ['ogl']
  },
  build: {
    commonjsOptions: {
      include: [/ogl/, /node_modules/]
    }
  }
})
