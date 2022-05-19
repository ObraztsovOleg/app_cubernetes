FROM node:15.14.0

COPY . /src
WORKDIR /src

RUN npm install -g nodemon
RUN npm install mongoose
RUN npm install express
RUN npm install body-parser

CMD ["npm", "start"]
