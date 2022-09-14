import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@shared': resolve(__dirname, 'src', 'shared'),
      '@components': resolve(__dirname, 'src', 'components'),
      '@services': resolve(__dirname, 'src', 'services'),
    },
  },
})
