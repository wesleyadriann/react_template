FROM node:12.4-alpine

LABEL maintainer="Wesley Adriann - wesleyadriann@gmail.com"

RUN \
  echo "UPDATING SYSTEM" && \
  apk update && \
  apk add --update

RUN apk add yarn

WORKDIR /app

COPY ./package.json .

RUN yarn install

COPY . .

EXPOSE 3000

ENTRYPOINT yarn start
