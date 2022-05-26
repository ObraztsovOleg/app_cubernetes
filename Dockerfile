FROM nginx:latest
# COPY ./interface_app/public/index.html /usr/share/nginx/html/index.html
COPY ./default.conf /etc/nginx/conf.d/default.conf
