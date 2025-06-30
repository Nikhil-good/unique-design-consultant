import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/udc/', // 👈 IMPORTANT: replace with your actual GitHub repo name

})
