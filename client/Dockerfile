FROM node:21-alpine

WORKDIR /app

COPY package.json .
COPY yarn.lock .
COPY public/ /app/public
COPY src/ /app/src

RUN npm install

COPY . .

EXPOSE 3000

CMD ["npm", "start"]