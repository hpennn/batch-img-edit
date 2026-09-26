FROM nginx:alpine
COPY index.html favicon.svg icon-192.png manifest.json robots.txt sitemap.xml sw.js /usr/share/nginx/html/
COPY icons/ /usr/share/nginx/html/icons/
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]