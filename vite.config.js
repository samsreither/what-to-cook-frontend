import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/what-to-cook-frontend',
  server: {     
    port: 3000, // Change the port number to 3000
  },

});
