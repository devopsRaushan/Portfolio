# Build frontend using Node.js
FROM node:22-alpine AS build
WORKDIR /app

# Copy and install dependencies first for better caching
COPY package*.json ./
RUN npm ci

# Copy the rest of the project files and build
COPY . .
RUN npm run build

# Use volume to persist build files
VOLUME /vite-build
CMD [ "sh", "-c", "cp -r /app/dist/* /vite-build" ]