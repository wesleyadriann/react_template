FROM node:12.4-alpine

RUN \
  echo "UPDATING SYSTEM" && \
  apk update && \
  apk add --update

WORKDIR /app

COPY ./package.json .

RUN npm i

COPY . .

EXPOSE 3000

ENTRYPOINT npm start
