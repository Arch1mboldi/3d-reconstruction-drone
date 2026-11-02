import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/api": "http://192.168.1.105:8000",
      "/stream": "http://192.168.1.105:8000",
      "/ws": { target: "ws://192.168.1.105:8000", ws: true },
    },
  },
});
