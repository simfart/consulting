# 🚀 Настройка сервера для продакшена

## ❌ Удален .htaccess файл

Файл `.htaccess` был удален, так как он предназначен только для Apache серверов и может вызывать проблемы на других хостингах.

## 🎯 Рекомендации по хостингу

### 1. **Vercel (рекомендуется)**

```bash
# Установка Vercel CLI
npm i -g vercel

# Деплой
vercel
```

**Преимущества:**

- ✅ Автоматическая оптимизация
- ✅ CDN по всему миру
- ✅ HTTPS из коробки
- ✅ Автоматические редиректы

### 2. **Netlify**

```bash
# Установка Netlify CLI
npm i -g netlify-cli

# Деплой
netlify deploy --prod
```

**Преимущества:**

- ✅ Простой деплой
- ✅ Автоматические формы
- ✅ CDN
- ✅ HTTPS

### 3. **GitHub Pages**

```yaml
# .github/workflows/deploy.yml
name: Deploy to GitHub Pages
on:
  push:
    branches: [main]
jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - uses: actions/setup-node@v2
        with:
          node-version: "18"
      - run: npm ci
      - run: npm run build
      - uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./dist
```

## 🔧 Настройки для разных серверов

### Nginx (если используете VPS)

```nginx
server {
    listen 80;
    server_name consultcenter.ru www.consultcenter.ru;

    # Редирект на HTTPS
    return 301 https://$server_name$request_uri;
}

server {
    listen 443 ssl;
    server_name consultcenter.ru www.consultcenter.ru;

    # SSL сертификат
    ssl_certificate /path/to/cert.pem;
    ssl_certificate_key /path/to/key.pem;

    # Сжатие
    gzip on;
    gzip_types text/plain text/css application/json application/javascript text/xml application/xml application/xml+rss text/javascript;

    # Кэширование
    location ~* \.(jpg|jpeg|png|gif|ico|css|js|woff|woff2)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }

    # Основные файлы
    location / {
        root /var/www/consultcenter/dist;
        try_files $uri $uri/ /index.html;
    }
}
```

### Apache (если нужен .htaccess)

```apache
# Создайте .htaccess в корне сайта
RewriteEngine On

# Редирект на HTTPS
RewriteCond %{HTTPS} off
RewriteRule ^(.*)$ https://%{HTTP_HOST}%{REQUEST_URI} [L,R=301]

# Редирект с www
RewriteCond %{HTTP_HOST} ^www\.(.*)$ [NC]
RewriteRule ^(.*)$ https://%1/$1 [R=301,L]

# Сжатие
<IfModule mod_deflate.c>
    AddOutputFilterByType DEFLATE text/plain text/html text/xml text/css application/javascript application/json
</IfModule>

# Кэширование
<IfModule mod_expires.c>
    ExpiresActive On
    ExpiresByType image/jpg "access plus 1 month"
    ExpiresByType image/png "access plus 1 month"
    ExpiresByType text/css "access plus 1 month"
    ExpiresByType application/javascript "access plus 1 month"
</IfModule>
```

## 📦 Подготовка к деплою

### 1. **Сборка проекта**

```bash
npm run build
```

### 2. **Проверка сборки**

```bash
npm run preview
```

### 3. **Оптимизация изображений**

- Сожмите изображения перед деплоем
- Используйте WebP формат
- Настройте lazy loading

## 🌐 DNS настройки

### A-записи:

```
@        A    IP_АДРЕС_СЕРВЕРА
www      A    IP_АДРЕС_СЕРВЕРА
```

### CNAME (для Vercel/Netlify):

```
www      CNAME    your-site.vercel.app
```

## 🔒 SSL сертификат

### Let's Encrypt (бесплатно):

```bash
# Установка certbot
sudo apt install certbot

# Получение сертификата
sudo certbot --nginx -d consultcenter.ru -d www.consultcenter.ru
```

### Cloudflare (рекомендуется):

1. Зарегистрируйтесь на cloudflare.com
2. Добавьте домен
3. Измените DNS серверы
4. Включите SSL/TLS

## 📊 Мониторинг

### Google Analytics:

```html
<!-- Добавьте в Head компонент -->
<script
  async
  src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"
></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag() {
    dataLayer.push(arguments);
  }
  gtag("js", new Date());
  gtag("config", "GA_MEASUREMENT_ID");
</script>
```

### Яндекс.Метрика:

```html
<!-- Добавьте в Head компонент -->
<script type="text/javascript">
  (function (m, e, t, r, i, k, a) {
    m[i] =
      m[i] ||
      function () {
        (m[i].a = m[i].a || []).push(arguments);
      };
    m[i].l = 1 * new Date();
    (k = e.createElement(t)),
      (a = e.getElementsByTagName(t)[0]),
      (k.async = 1),
      (k.src = r),
      a.parentNode.insertBefore(k, a);
  })(window, document, "script", "https://mc.yandex.ru/metrika/watch.js", "ym");

  ym(YOUR_COUNTER_ID, "init", {
    clickmap: true,
    trackLinks: true,
    accurateTrackBounce: true,
    webvisor: true,
  });
</script>
```

## 🎯 Чек-лист перед деплоем

- [ ] Удален .htaccess файл
- [ ] Проект собирается без ошибок
- [ ] Все изображения оптимизированы
- [ ] Настроены мета-теги
- [ ] Добавлены аналитики
- [ ] Настроен SSL сертификат
- [ ] Проверены редиректы
- [ ] Протестирована скорость загрузки

## 🚀 Готово к деплою!

Теперь ваш сайт готов к размещению на любом хостинге без проблем с .htaccess файлом.
