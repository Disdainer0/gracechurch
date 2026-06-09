import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  plugins: [],
  vite: {
    plugins: [],
  },
  tanstackStart: {
    server: {
      entry: "server",
    },
  },
});