FROM nginx:latest
COPY ./interface_app/public/index.html /srv/www/static/index.html
