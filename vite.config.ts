import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// A3 Studios is served as a static SPA from C:\inetpub\wwwroot\a3.ke.
// IIS rewrites all non-file routes to /index.html so BrowserRouter paths work.
export default defineConfig({
  base: '/',
  plugins: [react()],
  build: {
    outDir: 'dist',
    sourcemap: false,
    target: 'es2020',
    chunkSizeWarningLimit: 1200,
  },
  server: {
    port: 5180,
    host: true,
  },
});
