import { defineConfig } from "astro/config";
import node from "@astrojs/node";
import vercel from '@astrojs/vercel/serverless';

export default defineConfig({
  mode: "ssr",
  output: "server",
  adapter: vercel(),
});

