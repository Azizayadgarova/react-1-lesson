// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/react-1-lesson/', // bu yerda repo nomi bo'lishi shart!
  plugins: [react()],
})
