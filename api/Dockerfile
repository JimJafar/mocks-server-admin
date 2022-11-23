FROM node:18

WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install && npm run build
COPY dist ./
EXPOSE 3100
CMD npm run mocks & npm start
