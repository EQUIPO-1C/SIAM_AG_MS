FROM node:carbon-slim

# Create app directory
WORKDIR /siam_ag

# Install app dependencies
COPY package.json /siam_ag/
RUN npm install

# Bundle app source
COPY . /siam_ag/
RUN npm run prepublish

CMD [ "npm", "run", "runServer" ]
