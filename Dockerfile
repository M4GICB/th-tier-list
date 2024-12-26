# Use a lightweight Node.js image as the base image
FROM node:23 AS build

# Set the working directory in the container
WORKDIR /app

# Copy the package.json and package-lock.json files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the entire Next.js app to the container, including .next and node_modules
COPY . .

# Build the Next.js app
RUN npm run build

# Expose the port that your Next.js app will run on (usually 3000)
EXPOSE 3000

# Start your Next.js app
CMD ["npm", "start"]
