import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import vike from "vike/plugin";

export default defineConfig({
  plugins: [
    react(),
    vike(),
    // Плагин для добавления viewport meta тега в режиме разработки
    {
      name: "viewport-meta",
      transformIndexHtml(html) {
        if (!html.includes("viewport")) {
          return html.replace(
            "<head>",
            '<head>\n    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0, user-scalable=yes" />'
          );
        }
        return html;
      },
    },
  ],
  resolve: {
    alias: {
      "@": "/src",
    },
  },
  css: {
    modules: {
      localsConvention: "camelCase",
    },
  },
});
