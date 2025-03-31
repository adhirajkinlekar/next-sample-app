Ah, I see! You want to provide two approaches based on whether the user has Docker installed or not. Here’s an updated version of your instructions:

---

# Project Setup Instructions

## Running the Project

### Option 1: Using Docker (If Docker is installed)

If you have **Docker** installed, you can easily run the entire project (including frontend, backend, and MongoDB) using Docker Compose. This will spin up the required services in containers.

At the root of the project, run:

```sh
docker-compose up -d
```

This will:
- Start the **MongoDB** container
- Build and start the **Backend** (Nest.js) container
- Build and start the **Frontend** (React) container

### Option 2: Without Docker (If Docker is not installed or you prefer to run manually)

If you **don’t have Docker** installed or prefer running the services manually, you can follow these steps:

#### 1. Start MongoDB
You will need to have MongoDB running on your local machine or use a remote MongoDB instance.

Then, make sure to update the `.env` file inside the `backend` directory to reflect the correct MongoDB URI:

```env
MONGO_URI=your_mongo_uri
```

#### 2. Backend Setup
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

#### 3. Frontend Setup
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

### 3. Accessing the Application

- The **Backend API** should be running on `http://localhost:3001`
- The **Frontend** should be available on `http://localhost:5173`
 