# Use Node image as base
FROM node:lts-alpine

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install --legacy-peer-deps

# Copy remaining project files
COPY . . .

# Expose React development server port (default 3000)
EXPOSE 3000

# Start the development server
CMD [ "npm", "run", "start" ]
