import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import vike from "vike/plugin";
import { copyFileSync, existsSync, readFileSync, writeFileSync } from "fs";
import { join } from "path";

export default defineConfig({
  plugins: [
    react(),
    vike(),
    // Плагин для добавления viewport meta тега и проверки 404
    {
      name: "viewport-meta-and-404-check",
      transformIndexHtml(html) {
        let result = html;
        
        // Добавляем viewport meta тег
        if (!result.includes("viewport")) {
          result = result.replace(
            "<head>",
            '<head>\n    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0, user-scalable=yes" />'
          );
        }
        
        // Добавляем скрипт для проверки 404 перед загрузкой React
        const check404Script = `
          <script>
            (function() {
              const existingRoutes = ["/", "/privacy", "/services", "/404"];
              const currentPath = window.location.pathname;
              if (!existingRoutes.includes(currentPath) && currentPath !== "/404") {
                window.location.href = "/404";
              }
            })();
          </script>
        `;
        
        // Вставляем скрипт перед закрывающим тегом </head>, если его еще нет
        if (!result.includes("existingRoutes")) {
          result = result.replace("</head>", check404Script + "</head>");
        }
        
        return result;
      },
    },
    // Плагин для копирования .htaccess и добавления скрипта 404 в HTML файлы
    {
      name: "copy-htaccess-and-add-404-script",
      closeBundle() {
        const publicHtaccess = join(process.cwd(), "public", ".htaccess");
        const distHtaccess = join(process.cwd(), "dist", "client", ".htaccess");
        const distIndex = join(process.cwd(), "dist", "client", "index.html");
        const dist404 = join(process.cwd(), "dist", "client", "404.html");

        const check404Script = `
          <script>
            (function() {
              const existingRoutes = ["/", "/privacy", "/services", "/404"];
              const currentPath = window.location.pathname;
              if (!existingRoutes.includes(currentPath) && currentPath !== "/404") {
                window.location.href = "/404";
              }
            })();
          </script>
        `;

        try {
          // Копируем .htaccess
          copyFileSync(publicHtaccess, distHtaccess);
          console.log("✓ .htaccess copied to dist/client/");

          // Добавляем скрипт в index.html, если его еще нет
          if (existsSync(distIndex)) {
            let indexHtml = readFileSync(distIndex, "utf-8");
            if (!indexHtml.includes("existingRoutes")) {
              indexHtml = indexHtml.replace("</head>", check404Script + "</head>");
              writeFileSync(distIndex, indexHtml, "utf-8");
              console.log("✓ 404 check script added to index.html");
            }
          }

          // Проверяем, создал ли Vike файл 404/index.html или 404.html
          const dist404Index = join(process.cwd(), "dist", "client", "404", "index.html");
          if (existsSync(dist404Index)) {
            // Копируем содержимое из 404/index.html в 404.html для Apache
            let content404 = readFileSync(dist404Index, "utf-8");
            // Добавляем скрипт проверки в 404.html, если его еще нет
            if (!content404.includes("existingRoutes")) {
              content404 = content404.replace("</head>", check404Script + "</head>");
            }
            writeFileSync(dist404, content404, "utf-8");
            console.log("✓ 404.html created from 404/index.html with 404 check script");
          } else if (existsSync(dist404)) {
            // Если Vike уже создал 404.html напрямую, добавляем скрипт
            let content404 = readFileSync(dist404, "utf-8");
            if (!content404.includes("existingRoutes")) {
              content404 = content404.replace("</head>", check404Script + "</head>");
              writeFileSync(dist404, content404, "utf-8");
              console.log("✓ 404 check script added to existing 404.html");
            } else {
              console.log("✓ 404.html already exists with script");
            }
          } else {
            console.warn("⚠ 404.html not found - Vike should generate it for /404 route");
          }
        } catch (error) {
          console.warn("⚠ Could not process files:", error);
        }
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
