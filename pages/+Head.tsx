import { usePageContext } from "vike-react/usePageContext";

// Расширяем типы для мета-данных
interface PageMeta {
  title?: string;
  description?: string;
  keywords?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  twitterTitle?: string;
  twitterDescription?: string;
  twitterImage?: string;
}

interface ExtendedPageContext {
  meta?: PageMeta;
  urlPathname?: string;
}

export default function Head() {
  const pageContext = usePageContext() as ExtendedPageContext;
  const {
    title,
    description,
    keywords,
    ogTitle,
    ogDescription,
    ogImage,
    twitterTitle,
    twitterDescription,
    twitterImage,
  } = pageContext?.meta || {};

  return (
    <>
      {/* Основные мета-теги */}
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0, maximum-scale=5.0, user-scalable=yes"
      />
      <meta name="format-detection" content="telephone=no" />
      <meta name="theme-color" content="#998861" />
      <meta name="msapplication-TileColor" content="#998861" />

      {/* Динамические SEO мета-теги */}
      {title && <title>{title}</title>}
      {description && <meta name="description" content={description} />}
      {keywords && <meta name="keywords" content={keywords} />}

      {/* SEO мета-теги */}
      <meta
        name="robots"
        content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"
      />
      <meta name="googlebot" content="index, follow" />
      <meta name="bingbot" content="index, follow" />

      {/* Open Graph мета-теги */}
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="КонсалтЦентр" />
      <meta property="og:locale" content="ru_RU" />
      {ogTitle && <meta property="og:title" content={ogTitle} />}
      {ogDescription && (
        <meta property="og:description" content={ogDescription} />
      )}
      {ogImage && <meta property="og:image" content={ogImage} />}
      <meta
        property="og:url"
        content={`https://consultcenter.ru${pageContext?.urlPathname || ""}`}
      />

      {/* Twitter Card мета-теги */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@consultcenter" />
      {twitterTitle && <meta name="twitter:title" content={twitterTitle} />}
      {twitterDescription && (
        <meta name="twitter:description" content={twitterDescription} />
      )}
      {twitterImage && <meta name="twitter:image" content={twitterImage} />}

      {/* Дополнительные SEO мета-теги */}
      <meta name="author" content="КонсалтЦентр" />
      <meta name="copyright" content="© 2024 КонсалтЦентр" />
      <meta name="language" content="ru" />
      <meta name="geo.region" content="RU-KDA" />
      <meta name="geo.placename" content="Краснодар" />
      <meta name="geo.position" content="45.0448;38.976" />
      <meta name="ICBM" content="45.0448, 38.976" />

      {/* Канонический URL */}
      <link
        rel="canonical"
        href={`https://consultcenter.ru${pageContext?.urlPathname || ""}`}
      />

      {/* Favicon и иконки */}
      <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon-16x16.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-32x32.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="192x192"
        href="/android-chrome-192x192.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="512x512"
        href="/android-chrome-512x512.png"
      />
      <link rel="manifest" href="/site.webmanifest" />

      {/* Дополнительные мета-теги для favicon */}
      <meta
        name="msapplication-TileImage"
        content="/android-chrome-192x192.png"
      />
    </>
  );
}
