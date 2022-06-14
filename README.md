<div align="center">

# Hydroframe Frontend

<img src="https://img.shields.io/badge/Next.js-TypeScript-blue">
<img src="https://img.shields.io/github/last-commit/hydroframe/hydroframe-frontend">
<img src="https://img.shields.io/github/issues/hydroframe/hydroframe-frontend">
</div>

## Table of Contents:
- [Hydroframe Frontend](#hydroframe-frontend)
  - [Table of Contents:](#table-of-contents)
  - [Installation and Usage](#installation-and-usage)
    - [Requirements](#requirements)
    - [Downloading The Repo](#downloading-the-repo)
    - [Local Development (NPM)](#local-development-npm)
    - [Local Development (Docker)](#local-development-docker)
    - [Local Development (docker-compose)](#local-development-docker-compose)
      - [**Note: (node module installation)**](#note-node-module-installation)
  - [Static Deployment](#static-deployment)
  - [Deployment](#deployment)
    - [Deployment Requirements:](#deployment-requirements)
    - [Steps:](#steps)

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

1. Copy the `next.config.dev.js` file to one named `next.config.js`.

2. Install node modules using the command:
   ```bash
   npm install
   ```
3. Start the development server with the following command:
   ```bash
   npm run dev
   ```
4. Verify the application is running by clicking this link: [http://localhost:3000](http://localhost:3000)

5. Launch the HydroFrame Flask app by following the directions in the [README](https://github.com/hydroframe/pfclm-flask-app).

6. The frontend should be running locally at http://localhost:3000 along with the backend at http://localhost:5000. You can now develop the frontend interactively and it will send API requests to the locally hosted backend.

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

Currently the frontend code is exported as static files and served up by the Flask server on Verde. 

If you are running an export locally, first make sure you have the [Flask app repository](https://github.com/hydroframe/pfclm-flask-app) residing at the same level as this repository. Copy `next.config.dev.js` to `next.config.js`, and then run the following command:

```bash
npm run export:dev
```

If you are running an export on Verde, copy `next.config.prod.js` to `next.config.js` and then run the following command:
```bash
npm run export:prod
```

These commands will build the project, generate the static files, and copy them to the location of the Flask repository.

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