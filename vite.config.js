// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/unique-design-consultant/', // ✅ Your repo name here
  plugins: [react()],
})
