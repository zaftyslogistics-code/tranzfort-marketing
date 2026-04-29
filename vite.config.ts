import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
import tsConfigPaths from "vite-tsconfig-paths";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [
    tailwindcss(),
    tsConfigPaths({ projects: ["./tsconfig.json"] }),
    react(),
  ],
  server: { port: 5173 },
  resolve: {
    alias: { "@": `${process.cwd()}/src` },
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          // Bundle framer-motion separately to prevent it from being in every route chunk
          "framer-motion": ["framer-motion"],
          // Bundle other large vendors
          "vendor-react": ["react", "react-dom", "react-router-dom"],
          "vendor-ui": ["lucide-react"],
        },
      },
    },
  },
});
