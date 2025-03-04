FROM nginx:latest
COPY nginx.conf /etc/nginx/nginx.conf
WORKDIR /usr/share/nginx/html
VOLUME /usr/share/nginx/html  # Use the shared volume
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
