import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    proxy: {
      '/api': {
        target: 'https://localhost:7001/api/patient',  // Backend server
        changeOrigin: true,               // Adjust origin header
        secure: true,                    // Use false if your backend doesn't use HTTPS
        rewrite: (path) => path.replace(/^\/api/, ''), // Rewrite if needed
      },
    },
  },
});
