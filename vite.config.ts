import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
import tsConfigPaths from "vite-tsconfig-paths";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [tailwindcss(), tsConfigPaths({ projects: ["./tsconfig.json"] }), react()],
  server: { port: 5173 },
  resolve: {
    alias: { "@": `${process.cwd()}/src` },
  },
});
