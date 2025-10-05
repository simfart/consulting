import { useEffect } from "react";

export const useScrollToAnchor = () => {
  useEffect(() => {
    const handleScrollToAnchor = () => {
      const hash = window.location.hash;
      if (hash) {
        // Увеличиваем задержку для полной загрузки компонентов
        setTimeout(() => {
          const element = document.querySelector(hash);
          if (element) {
            console.log("Scrolling to element:", hash, element);
            element.scrollIntoView({
              behavior: "smooth",
              block: "start",
            });
          } else {
            console.log("Element not found:", hash);
          }
        }, 300);
      }
    };

    // Обработка при загрузке страницы
    handleScrollToAnchor();

    // Обработка при изменении hash
    const handleHashChange = () => {
      handleScrollToAnchor();
    };

    window.addEventListener("hashchange", handleHashChange);

    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);
};
