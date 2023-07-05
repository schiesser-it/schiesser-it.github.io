FROM ubuntu:latest

# Install Node 16
RUN apt-get update && apt-get install -y curl
RUN curl -sL https://deb.nodesource.com/setup_16.x | bash -
RUN apt-get install -y nodejs

# Copy project
COPY . /app
WORKDIR /app

# Build project
RUN npm ci
RUN npm run build
