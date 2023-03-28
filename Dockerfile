FROM node:16.17.1

WORKDIR /app

COPY . /app

RUN npm install

EXPOSE 3000

CMD ["node", "server"]