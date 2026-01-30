// Указываем явный URL для пререндеринга страницы 404
export const onBeforePrerenderStart = () => {
  return ["/404"];
};

