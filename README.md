# Hydroframe Frontend
<div align="center">
![main workflow](https://github.com/hydroframe/hydroframe-frontend/actions/workflows/hydroframe-frontend-ci.yml/badge.svg)
<img src="https://img.shields.io/badge/Made with-React-61dbfb" alt="Website shields.io">
</div>



## Quickstart 

### Requirements:
- [nodejs](https://nodejs.org/en/download/) (16.x)
- Windows/Linux/Mac Dev Environment

### Build and Run
- Clone this repository to your local machine 
  - ```$ git clone git@github.com:hydroframe/hydroframe-frontend.git ```
- Change directory to the project folder
  - ```$ cd hydroframe-frontend/```
- Install app dependencies
  - ```$ npm install```
  - *Note: any vulnerabilities warnings produced by 'npm install' can be diregarded as this is a problem with NPM*
- Start the development server
  - ```$ npm start```
- Open a browser and access the app at [http://localhost:3000](http://localhost:3000)

## Quickstart with docker-compose

### Requirements:
- [docker](https://www.docker.com/products/docker-desktop)
- [docker-compose](https://docs.docker.com/compose/install/)
- Windows Pro/Linux/Mac Dev Environment

### Build and Run
- Clone this repository to your local machine 
  - ```$ git clone git@github.com:hydroframe/hydroframe-frontend.git ```
- Change directory to the project folder
  - ```$ cd hydroframe-frontend/```
- Build the container and bring it online
  - **Windows**
    - ```$ docker-compose up --build```
  - **Linux/Mac**
    - ```$ sudo docker-compose up --build```
- Open a browser and access the app at [http://localhost:3000](http://localhost:3000)


## Common Maintenance and Tasks

### Installing a new node module
- Run the following command to install a new node module
  - ```$ npm install <module-name>```

### Installing a new node module (with Docker)
Run the following commands to install a new module with docker-compose.

- Bring down the existing container
  - **Windows**
    - ```$ docker-compose down -v```
  - **Linux/Mac**
    - ```$ sudo docker-compose down -v```

- Install the node module
  - ```$ npm install <module-name>```

- Rebuild and bring the container online
  - **Windows**
    - ```$ docker-compose up --build```
  - **Linux/Mac**
    - ```$ sudo docker-compose up --build```

- Open a browser and access the app at [http://localhost:3000](http://localhost:3000)