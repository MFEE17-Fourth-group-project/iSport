FROM node:14
WORKDIR /app

COPY package.json .
RUN npm install

COPY . .

RUN npm run build

RUN mv public/dist/* public/
CMD [ "mv", "public/index.js", "public/index.css", "public/dist/" ]