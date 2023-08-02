import { defineConfig } from "astro/config";
import vercel from '@astrojs/vercel/serverless';

export default defineConfig({
  mode: "ssr",
  output: "server",
  adapter: vercel(),
});

