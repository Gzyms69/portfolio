import { defineConfig, Plugin } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { createServer } from "./server/index";
import { visualizer } from "rollup-plugin-visualizer";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  base: '/portfolio/', 
  root: "client",
  publicDir: "../public",
  envDir: "..",
  server: {
    host: "::",
    port: 8080,
    watch: {
      usePolling: true,
      interval: 100,
    },
    fs: {
      allow: [".."],
      deny: ["../.env", "../.env.*", "../**/.git/**", "../server/**"],
    },
  },
  build: {
    outDir: "../dist/spa",
    emptyOutDir: true,
    modulePreload: false,
    rollupOptions: {
      output: {
        // Let Vite/Rollup split chunks automatically
      },
    },
  },
  plugins: [
    react(),
    expressPlugin(),
    ...(mode === "analyze" ? [visualizer({ open: true, filename: "../dist/stats.html" })] : [])
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./client"),
      "@shared": path.resolve(__dirname, "./shared"),
    },
  },
}));

function expressPlugin(): Plugin {
  return {
    name: "express-plugin",
    apply: "serve", // Only apply during development (serve mode)
    configureServer(server) {
      const app = createServer();

      // Add Express app as middleware to Vite dev server
      server.middlewares.use(app);
    },
  };
}
