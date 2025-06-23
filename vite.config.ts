import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/dpsmultiservices.com.br/', // ← très important !
  plugins: [react()]
})
