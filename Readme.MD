npm init
npm i express

--Create 'app.js' file

const express = require('express');
const app = express();

app.get('/',(req,res)=>{
	res.send('Hello World');
});

app.listen(3000,()=>{
	console.log('Server is running on port 3000')
});

--Create file name called "Dockerfile" (this file name dont change)

FROM node:14
WORKDIR /
COPY package.json package-lock.json /
RUN npm install
COPY . /
EXPOSE 3000
CMD ["node","app.js"]

--Build and run docker image at root folder
docker build . -t <give image name>
docker images
docker run -p 3000:3000 <give image name>
docker ps






docker tag cruddocker dilupacontainers.azurecr.io/cruddocker:latest
docker login dilupacontainers.azurecr.io
username:
paswword:
login succseed
docker push








***az login (if not logged)
***GROUP NAME - CTSE
***registry_name - ctseproject1
***<image_name>  - (use docker ps or docker image to findout) 
***<tag> - v1

az group create --name CTSE --location eastus

az acr create --name ctseproject1 --resource-group CTSE --sku Basic --admin-enabled true

az acr login --name ctseproject1

docker tag <image_name> ctseproject1.azurecr.io/<image_name>:v1

docker push ctseproject1.azurecr.io/<image_name>:v1
