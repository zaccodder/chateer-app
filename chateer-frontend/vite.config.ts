import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  build: {
    outDir: '../chateer-backend/dist',
  },
  server: {
    proxy: {
      '/api/v1': {
        target: 'htpp://localhost:3001',
        changeOrigin: true,
      },
    },
  },
});
