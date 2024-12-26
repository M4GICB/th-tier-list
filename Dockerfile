# Use a lightweight Node.js image as the base image
FROM node:23 AS build

# Set the working directory in the container
WORKDIR /app

# Accept build arguments for environment variables
ARG MONGODB_URL
ARG DB_NAME
ARG NEXTAUTH_SECRET
ARG GOOGLE_CLIENT_ID
ARG GOOGLE_CLIENT_SECRET

# Set environment variables for the build process
ENV MONGODB_URL=$MONGODB_URL
ENV DB_NAME=$DB_NAME
ENV NEXTAUTH_SECRET=$NEXTAUTH_SECRET
ENV GOOGLE_CLIENT_ID=$GOOGLE_CLIENT_ID
ENV GOOGLE_CLIENT_SECRET=$GOOGLE_CLIENT_SECRET

# Copy the package.json and package-lock.json files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the entire Next.js app to the container
COPY . .

# Build the Next.js app
RUN npm run build

# Expose the port that your Next.js app will run on (usually 3000)
EXPOSE 3000

# Start your Next.js app
CMD ["npm", "start"]
