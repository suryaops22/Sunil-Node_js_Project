# Use the official Node.js runtime as the base image
FROM node

# Set the working directory to /app inside the Docker containery
WORKDIR /app

# Copy the package.json file from your host to your current location (i.e., /app directory) in the Docker image
COPY package.json /app/

# Install any dependencies for your Node app
# Changes to the other files won't cause npm install to rerun unless package.json has changed.
RUN npm install

# Copy the rest of your app's source code from your host to your image filesystem
COPY . /app

# Instruct Docker to listen on port 3000 at runtime
# This is the port that your application needs to be accessed from outside
EXPOSE 3000

# Define the command to run your app using CMD which defines your runtime
# Here we are using "node", followed by the name of the file, "server.js"
CMD ["node", "server.js"]
