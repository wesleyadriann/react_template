FROM node:12.4-alpine

WORKDIR /app

COPY ./package.json .

RUN npm i

COPY ./src/ ./src

COPY ./public/ ./public

EXPOSE 3000

ENTRYPOINT npm start
