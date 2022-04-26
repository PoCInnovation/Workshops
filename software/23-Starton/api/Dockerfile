FROM node:17.9.0

WORKDIR /app

COPY package.json /app

RUN npm install

COPY . /app

CMD npm run start

EXPOSE 3000