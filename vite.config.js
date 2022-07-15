import { defineConfig } from "vite";

// Without this config, vitejs will import links, scripts with wrong path
export default defineConfig({
  base: "",
  publicPath: "",
});
