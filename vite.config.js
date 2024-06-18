import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    // proxy: {
    //   "/api": {
    //     target: 'https://back-end-arunachalamwd55t-inventry.onrender.com',
    //     secure: false,
    //   },
    // },
  },

  plugins: [react()],
});

//
// 'https://back-end-arunachalamwd55t-inventry.onrender.com'
