# Start from official Node 20 image (alpine = small size)
FROM node:20-alpine

# Set working directory inside the container
# All commands after this run from /app
WORKDIR /app

# Copy package files first (before copying all code)
# This is a Docker optimization — if package.json hasn't changed,
# Docker reuses the cached node_modules layer (faster rebuilds)
COPY package*.json ./

# Install dependencies inside the container
RUN npm install

# Copy the rest of your source code into the container
COPY . .

# Tell Docker this container listens on port 4000
EXPOSE 4000

# Command that runs when container starts
CMD ["npm", "run", "dev"]
