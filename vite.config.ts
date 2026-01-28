import { defineConfig } from "vite";

export default defineConfig({
  server: {
    allowedHosts: ["local.ft.com"],
  },
  define: {
    global: "globalThis",
  },
  optimizeDeps: {
    include: ["ef-runtime-client"]
  },
  resolve: {
    alias: {
      process: "process/browser",
      buffer: "buffer",
      util: "util",
    },
  },
});
