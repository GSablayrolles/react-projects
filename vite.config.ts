import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import deno from "@deno/vite-plugin";

import { exists } from "jsr:@std/fs/exists";

export default defineConfig(async ({ mode }) => {
  const root = await exists(`./${mode}`, { isDirectory: true })
    ? `./${mode}`
    : "./template";
  return {
    root: root,
    plugins: [
      react(),
      deno(),
    ],
    optimizeDeps: {
      include: ["react/jsx-runtime"],
    },
  };
});
