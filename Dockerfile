# Base image
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install all dependencies
RUN npm install

RUN npm cache clean --force

# Copy the rest of the application
COPY . .

# Expose the React dev server port
EXPOSE 3000

# Start the React development server
CMD ["npm", "start"]