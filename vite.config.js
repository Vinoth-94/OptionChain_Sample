import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    // This section tells Vite to proxy requests starting with /api/nse
    proxy: {
      "/api/nse": {
        target: "https://www.nseindia.com", // The domain you want to reach
        changeOrigin: true, // Must be true for virtual hosting
        // Rewrite the path so the target server only sees the correct API path
        rewrite: (path) => path.replace(/^\/api\/nse/, ""),
        secure: true, // Use HTTPS
      },
    },
  },
});
