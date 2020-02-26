# pull from the node.js docker image
FROM node:10

#create a directory
WORKDIR /usr/src/app

#install dependencies
COPY package*.json ./
RUN npm install

#bring in the app
COPY . .

#run
CMD [ "node", "index.js" ]
