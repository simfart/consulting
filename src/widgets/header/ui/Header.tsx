import { useState, useEffect, useRef } from "react";
import { usePageContext } from "vike-react/usePageContext";
import styles from "./Header.module.scss";
import { logoImg, phoneImg } from "@/shared/images";
import { PhoneLink } from "@/shared/ui/Phone";
import { SocialIcons } from "@/shared/ui";

const navigation = [
  { name: "+7 (915) 939-18-13", href: "tel:+79159391813" },
  { name: "Главная", href: "/" },
  { name: "Услуги и тарифы", href: "/services" },
];

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isPhoneMenuOpen, setIsPhoneMenuOpen] = useState(false);
  const pageContext = usePageContext();
  const currentPath = pageContext.urlPathname;
  const headerRef = useRef<HTMLElement>(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    if (!isMenuOpen) {
      setIsPhoneMenuOpen(false);
    }
  };

  const togglePhoneMenu = () => {
    setIsPhoneMenuOpen(!isPhoneMenuOpen);
    setIsMenuOpen(false);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    setIsPhoneMenuOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        headerRef.current &&
        !headerRef.current.contains(event.target as Node)
      ) {
        closeMenu();
      }
    };

    if (isMenuOpen || isPhoneMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMenuOpen, isPhoneMenuOpen]);

  return (
    <header ref={headerRef} className={styles.header}>
      <a href="/" className={styles.logo}>
        <img src={logoImg} alt="logo" />
        <div className={styles.headerTitleMobile}>
          <h3>Консалт</h3> <span>Центр</span>
        </div>
      </a>
      <div className={styles.headerContent}>
        <div className={styles.headerTitle}>
          <h3>Консалт</h3> <span>Центр</span>
        </div>
        <nav className={`${styles.nav} ${isMenuOpen ? styles.navOpen : ""}`}>
          <ul className={styles.navList}>
            {navigation.map((item) => {
              const isActive =
                currentPath === item.href ||
                (item.href !== "/" && currentPath?.startsWith(item.href));
              return (
                <li key={item.name} className={styles.navItem}>
                  <a
                    href={item.href}
                    className={`${styles.navLink} ${
                      isActive ? styles.navLinkActive : ""
                    }`}
                    onClick={closeMenu}
                  >
                    {item.name}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>

        <nav
          className={`${styles.nav} ${isPhoneMenuOpen ? styles.navOpen : ""} ${
            styles.navPhone
          }`}
        >
          <ul className={styles.navList}>
            <li className={styles.navPhoneItem}>
              <PhoneLink />
              <SocialIcons showText={false} variant="header" />
            </li>
          </ul>
        </nav>

        <button
          className={`${styles.phoneButton} ${
            isPhoneMenuOpen ? styles.phoneButtonOpen : ""
          }`}
          onClick={togglePhoneMenu}
          aria-label="Открыть телефонное меню"
        >
          <img src={phoneImg} alt="phone" />
        </button>

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

      <div className={styles.headerVline}></div>
    </header>
  );
}
