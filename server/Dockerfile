FROM node:21-alpine

RUN npm install -g nodemon

WORKDIR /app

COPY package.json .
COPY yarn.lock .
COPY mocks /app/mocks

RUN yarn install
COPY . .

EXPOSE 4000

CMD ["npm", "run", "dev"]
