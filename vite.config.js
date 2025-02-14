import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    legacy({
      targets: ["defaults", "not IE 11"],
    }),
  ],
  base: "/", // Ensure base is set correctly
  assetsInclude: ["**/*.woff", "**/*.woff2", "**/*.ttf"],
});
