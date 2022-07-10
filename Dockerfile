# Image to download
FROM node:lts

# Folder where our files are located(remote)
WORKDIR /usr/app

# Copy the select file to the WORKDIR
COPY package.json ./

# Execute a command on remote 
RUN npm install

# Copy Everthing from local to remote 
COPY . . 

# Expose network port 3333 
EXPOSE 3333

# Run command line programs with paramters
CMD ["npm", "run", "dev" ]

# To run Docker
# $ docker build -t rentx .
