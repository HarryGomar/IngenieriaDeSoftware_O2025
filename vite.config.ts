import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/IngenieriaDeSoftware_O2025/", // <--- MUST match your repo name exactly
})