// vite.config.js  or vite.config.ts
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'   // ← official v4+ plugin
import path from 'path'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),          // can also pass options: tailwindcss({ optimize: true })
  ],

  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})