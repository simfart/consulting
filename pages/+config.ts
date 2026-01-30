import vikeReact from "vike-react/config";

export default {
  // Включаем пререндеринг
  prerender: true,

  // Включаем клиентский роутинг для обработки 404
  clientRouting: true,

  // Настройки для React
  extends: [vikeReact],

  // Настройки для гидратации
  hydrationCanBeAborted: true,

  // Мета-настройки
  meta: {
    title: {
      env: { server: true, client: true },
    },
    description: {
      env: { server: true, client: true },
    },
    keywords: {
      env: { server: true, client: true },
    },
    ogTitle: {
      env: { server: true, client: true },
    },
    ogDescription: {
      env: { server: true, client: true },
    },
    ogImage: {
      env: { server: true, client: true },
    },
    twitterTitle: {
      env: { server: true, client: true },
    },
    twitterDescription: {
      env: { server: true, client: true },
    },
    twitterImage: {
      env: { server: true, client: true },
    },
    viewport: {
      env: { server: true, client: true },
    },
  },
};
