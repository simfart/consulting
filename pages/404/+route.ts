// Catch-all маршрут для обработки 404 ошибок
// Обрабатывает явный путь /404 и все остальные несуществующие URL
export default (pageContext: { urlOriginal: string }) => {
  const path = pageContext.urlOriginal;
  const existingRoutes = ["/", "/privacy", "/services"];
  
  // Обрабатываем явный путь /404 или любой несуществующий путь
  return path === "/404" || !existingRoutes.includes(path);
};
