// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],
//   server : {
//   hmr : true,
//   }
// })





import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
export default defineConfig({
  plugins: [react()],
  server: {
    hmr: {
      // Port can be customized if needed, especially if there's a port conflict
      port: 3001,
      overlay: true,  // Displays errors in the browser overlay
    },
    watch: {
      // Polling might help if file watchers are not working correctly on Windows
      usePolling: true,
    },
    // Optional: Increase the timeout for HMR if needed
    hmrTimeout: 30000,
    // Optional: In case of multiple IP interfaces, force Vite to bind to a specific one
    host: 'localhost',
    port: 5173,  // Port where the dev server runs
  },
});
