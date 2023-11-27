import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 6002,
  },
  resolve: {
    alias: {
      assets: `${path.resolve(__dirname, './src/assets/')}`,
      'base-components': `${path.resolve(__dirname, './src/base-components/')}`,
      components: `${path.resolve(__dirname, './src/components/')}`,
      config: `${path.resolve(__dirname, './src/config/')}`,
      contexts: `${path.resolve(__dirname, './src/contexts/')}`,
      features: `${path.resolve(__dirname, './src/features/')}`,
      hooks: `${path.resolve(__dirname, './src/hooks/')}`,
      layout: `${path.resolve(__dirname, './src/layout/')}`,
      'menu-items': `${path.resolve(__dirname, './src/menu-items/')}`,
      pages: `${path.resolve(__dirname, './src/pages/')}`,
      router: `${path.resolve(__dirname, './src/router/')}`,
      routes: `${path.resolve(__dirname, './src/routes/')}`,
      services: `${path.resolve(__dirname, './src/services/')}`,
      sections: `${path.resolve(__dirname, './src/sections/')}`,
      store: `${path.resolve(__dirname, './src/store/')}`,
      stores: `${path.resolve(__dirname, './src/stores/')}`,
      types: `${path.resolve(__dirname, './src/types/')}`,
      themes: `${path.resolve(__dirname, './src/themes/')}`,
      utils: `${path.resolve(__dirname, './src/utils/')}`,
    },
  },
});
