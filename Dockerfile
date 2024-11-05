# Use an official Node.js image as the base
FROM node:18 as build-stage

# Set working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to install dependencies
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of your application code
COPY . .

# Build the Angular app
RUN npm run build -- --prod

# Use an NGINX image to serve the app in production
FROM nginx:alpine

# Copy built files from the build stage to NGINX public directory
COPY --from=build-stage /app/dist/5SAE6-G1-KADDEM-FRONTEND /usr/share/nginx/html

# Expose port 80 to access the application
EXPOSE 80

# Start NGINX
CMD ["nginx", "-g", "daemon off;"]
