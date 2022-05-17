FROM node:15.14.0

COPY . /src
WORKDIR /src

RUN npm install -g nodemon
RUN npm install express
RUN npm install body-parser
RUN npm install path

CMD ["npm", "start"]