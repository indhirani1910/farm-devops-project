# Use Node.js base image
FROM node:20

#Set working directory
WORKDIR /app

#Copy package files
COPY package*.json ./

#Install dependencies
RUN npm install

#Copy all files
COPY . .

#Expose port
EXPOSE 3000

#Start application
CMD ["node", "node_modules/server.js"]