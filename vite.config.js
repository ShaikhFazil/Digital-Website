import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',
    sourcemap: true,
    rollupOptions: {
      output: {
        manualChunks: {
          react: ['react', 'react-dom', 'react-router-dom'],
          animation: ['gsap', 'framer-motion', 'lenis'],
          ui: ['swiper', 'lucide-react', 'react-countup', 'react-intersection-observer'],
        },
      },
    },
  },
  server: {
    port: 3000,
  },
  optimizeDeps: {
    include: ['react', 'react-dom', 'react-router-dom'],
  },
  resolve: {
    extensions: ['.jsx', '.js', '.json'],
  },
});