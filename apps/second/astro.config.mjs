import { defineConfig } from "astro/config";
import node from "@astrojs/node";

export default defineConfig({
  mode: "ssr",
  output: "server",
  adapter: node({
    mode: "middleware",
  }),
});

