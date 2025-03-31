# Project Setup Instructions

## Prerequisites
Make sure you have the following installed:
- [Node.js](https://nodejs.org/) (Latest LTS version recommended)
- [Docker](https://www.docker.com/) (for MongoDB container, not needed if you are using your own instance)

## Running the Project

### 1. Start MongoDB with Docker
At the root of the project, run:
```sh
docker-compose up -d
```
This will start MongoDB in a Docker container. If you are using your own instance, update the `MONGO_URI` environment variable in the `.env` file in the backend app.

### 2. Backend Setup
Navigate to the backend directory:
```sh
cd backend
```
Install dependencies:
```sh
npm install
```
Start the backend server in development mode:
```sh
npm run start:dev
```

### 3. Frontend Setup
Open a new terminal and navigate to the frontend directory:
```sh
cd frontend
```
Install dependencies:
```sh
npm install
```
Start the frontend development server:
```sh
npm run dev
```

### 4. Accessing the Application
- The backend API should be running on `http://localhost:3001`
- The frontend should be available on `http://localhost:5173`
 
