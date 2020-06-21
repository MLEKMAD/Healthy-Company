# Docker Image which is used as foundation to create
# a custom Docker Image with this Dockerfile
FROM node:10.19.0-alpine as build
# A directory within the virtualized Docker environment
# Becomes more relevant when using Docker Compose later
WORKDIR /app
# Copies package.json and package-lock.json to Docker environment
COPY package*.json ./
# Installs all node packages
RUN npm install --silent
# Copies everything over to Docker environment
COPY . ./
ARG REACT_APP_API_BASE_URL
ENV REACT_APP_API_BASE_URL=${REACT_APP_API_BASE_URL}
RUN npm run build
# Uses port which is used b²y the actual application
FROM nginx:1.17.0-alpine

# Copy the react build from Stage 1
COPY --from=build /app/build /var/www

# Copy our custom nginx config
COPY nginx.conf /etc/nginx/nginx.conf

# Expose port 80 to the Docker host, so we can access it
# from the outside.
EXPOSE 3000

ENTRYPOINT ["nginx","-g","daemon off;"]