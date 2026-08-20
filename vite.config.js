// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// // https://vite.dev/config/
// export default defineConfig({
//   plugins: [react()],
// })

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import cssInjectedByJsPlugin from "vite-plugin-css-injected-by-js";
import { fileURLToPath, URL } from "node:url";

export default defineConfig({
  plugins: [
    react(),
    cssInjectedByJsPlugin(),
  ],
  define: {
    "process.env.NODE_ENV": JSON.stringify("production"),
  },
  build: {
    outDir: "dist",
    emptyOutDir: true,
    lib: {
      entry: fileURLToPath(
        new URL("./src/main.jsx", import.meta.url)
      ),
      name: "root",
      formats: ["iife"],
      fileName: () =>
        "static/js/bundle.js",
    },
  },
});