<div align="center">

# Hydroframe Frontend

<img src="https://img.shields.io/badge/Next.js-TypeScript-blue">
<img src="https://img.shields.io/github/last-commit/hydroframe/hydroframe-frontend">
<img src="https://img.shields.io/github/issues/hydroframe/hydroframe-frontend">
</div>

## Table of Contents:
- [Hydroframe Frontend](#hydroframe-frontend)
  - [Table of Contents](#table-of-contents)
  - [Installation and Usage](#installation-and-usage)
    - [Requirements](#requirements)
    - [Downloading The Repo](#downloading-the-repo)
    - [Local Development (NPM)](#local-development-npm)
    - [Local Development (Docker)](#local-development-docker)
    - [Local Development (docker-compose)](#local-development-docker-compose)
  - [Deployment](#deployment)
    - [Deployment Requirements](#deployment-requirements)
    - [Steps](#steps)

## Installation and Usage
**Please first follow the instructions for downloading the repository locally and then follow the section that best suits your development environment.**

### Requirements
- Windows/Unix Environment
- One of the following installed locally
  - NPM v16
  - Docker
  - Docker w/ docker-compose
- An internet connection

### Downloading The Repo
1. Clone the repository locally with the command:
   ```bash
   git clone git@github.com:hydroframe/hydroframe-frontend.git
   ```
2. Change directory to the cloned repository using the following command
   ```bash
   cd hydroframe-frontend
   ```
3. Follow one of the following instruction sets based on your preferred dev environment:
   - [NPM](#local-development-npm)
   - [Docker](#local-development-docker)
   - [docker-compose](#local-development-docker-compose)
   - [Note: (node module installation)](#note-node-module-installation)

### Local Development (NPM)

1. Install node modules using the command:
   ```bash
   npm install
   ```
2. Start the development server with the following command:
   ```bash
   npm run dev
   ```
3. Verify the application is running by clicking this link: [http://localhost:3000](http://localhost:3000)

### Local Development (Docker)

1. Build the docker container using the following command (Replace tag_name with your own unique name):
   ```bash
   docker build -f Dockerfile-dev -t {tag_name}
   ```
2. Run the docker container with the following command (Replace tag_name with that chosen in Step 1 and replace port_number with your chosen port number (*usually 3000)):
   ```bash
   docker run -p {port_number}:{port_number} {tag_name}
   ```
3. Verify the application is running by clicking this link (Default port is 3000): [http://localhost:{chosen_port_number}](http://localhost:3000)

### Local Development (docker-compose)

1. Build and run the application using the following command:
   ```bash
   docker-compose build
   ```
2. Start the container with the following command:
   ```bash
   docker-compose up
   ```
3. Verify the application is running by clicking this link: [http://localhost:3000](http://localhost:3000)
#### **Note: (node module installation)**
For *npm install* changes to take effect, the container must be destroyed and rebuilt with the following command:
   ```bash
   docker-compose down -v && docker-compose build
   ```

## Static Deployment

Currently the frontend code is exported as static files and served up by the flask server on Verde. To do this, first make
sure you have the [flask app repo](https://github.com/hydroframe/pfclm-flask-app) residing at the same level as this repo. 

```bash
npm run export
```

This will build the project, generate the static files, and copy them to the flask repo.

## Deployment

The following steps should be taken to build and deploy the application container.

### Deployment Requirements:
- Docker

### Steps:
1. Build the container image with the following command:
   ```bash
   docker build -f Dockerfile-prod -t {tag_name}
   ```
2. Run the image using the following command:
   ```bash
   docker run -p {port_number}:{port_number} {tag_name}
   ```