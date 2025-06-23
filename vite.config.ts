import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '//www.dpsmultiservices.com.br', // ← correct pour domaine personnalisé comme dpsmultiservices.com.br

// ✅ correct pour domaine personnalisé ou root et pour ne pas avoir de conflit
})
