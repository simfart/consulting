import { useState } from "react";
import { usePageContext } from "vike-react/usePageContext";
import styles from "./Header.module.scss";
import { logoImg } from "@/shared/images";

const navigation = [
  { name: "Главная", href: "/" },
  { name: "О нас", href: "/about" },
  { name: "Новости", href: "/news" },
];

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pageContext = usePageContext();
  const currentPath = pageContext.urlPathname;

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={styles.header}>
      <div className="container">
        <a href="/" className={styles.logo}>
          <img src={logoImg} alt="logo" />
        </a>
        <div className={styles.headerContent}>
          <nav className={`${styles.nav} ${isMenuOpen ? styles.navOpen : ""}`}>
            <ul className={styles.navList}>
              {navigation.map((item) => {
                const isActive =
                  currentPath === item.href ||
                  (item.href !== "/" && currentPath.startsWith(item.href));
                return (
                  <li key={item.name} className={styles.navItem}>
                    <a
                      href={item.href}
                      className={`${styles.navLink} ${
                        isActive ? styles.navLinkActive : ""
                      }`}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.name}
                    </a>
                  </li>
                );
              })}
            </ul>
          </nav>

          <button
            className={`${styles.menuButton} ${
              isMenuOpen ? styles.menuButtonOpen : ""
            }`}
            onClick={toggleMenu}
            aria-label="Открыть меню"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </header>
  );
}
