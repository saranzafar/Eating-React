import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  // setting proxy 
  server: {
    proxy: {
      '/api': 'http://localhost:3000'
    },
    //after adding proxy before '/api' 'http://localhost:3000' appends and server think that this request comes from same server/origin
  },
  plugins: [react()],
})
