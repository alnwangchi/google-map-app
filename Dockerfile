FROM node:16.17.1-alpine

WORKDIR /app

COPY package.json .
RUN npm i

COPY . .

CMD npm run dev