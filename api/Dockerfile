FROM node:18

WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
EXPOSE 3100 3110 8081
CMD npm run mocks & npm run build && npm start
