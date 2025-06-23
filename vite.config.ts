import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: 'dpsmultiservices.com.br', // ← correct pour domaine personnalisé comme dpsmultiservices.com.br
})
