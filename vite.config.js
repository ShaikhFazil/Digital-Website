import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        // Manual chunks keep vendor code cacheable and the main bundle small
        manualChunks: {
          react: ['react', 'react-dom', 'react-router-dom'],
          animation: ['gsap', 'framer-motion', 'lenis'],
          ui: ['swiper', 'lucide-react', 'react-countup', 'react-intersection-observer'],
        },
      },
    },
  },
});
