import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    // Relative to the root
    outDir: 'dist',
  },
  plugins: [react()]
});