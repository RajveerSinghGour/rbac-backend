# RBAC System

This is a Role-Based Access Control (RBAC) system built with **React** on the frontend and **Node.js** with **Express** on the backend. The system provides role-based access to different dashboards (Admin, Moderator, and User) and includes authentication functionality.

---

## Features
- User authentication (Sign-up and Login)
- Role-based access control (Admin, Moderator, User)
- Dashboards for different roles
- Protected routes based on user roles
- Responsive design

---

## Tech Stack
### Frontend:
- React.js
- React Router DOM
- CSS

### Backend:
- Node.js
- Express.js
- MongoDB

---

## Setup Instructions

### Prerequisites
- **Node.js** (version 14.x or later)
- **npm** or **yarn**
- **MongoDB** installed and running locally or a MongoDB cloud connection URI

---

### Installation

#### 1. Clone the Repository
```bash
git clone https://github.com/RajveerSinghGour/rbac-backend.git
cd rbac-backend
```

#### 2. Backend Setup
1. Navigate to the `backend` directory:
   ```bash
   cd backend
   ```
2. Install dependencies:
   ```bash
   npm install express mongoose bcrypt jsonwebtoken dotenv cors
   npm install --save-dev nodemon
   ```
3. Create a `.env` file in the `backend` directory and add the following:
   ```env
   PORT=5000
   MONGO_URI=mongodb://localhost:27017/mydb
   JWT_SECRET=your_jwt_secret
   ```
   - Replace `your_jwt_secret` with a secure secret key.

4. Start the backend server:
   ```bash
   npm start
   ```
   By default, the server will run on `http://localhost:5000`.

#### 3. Frontend Setup
1. Navigate to the `frontend` directory:
   ```bash
   cd frontend
   ```
2. Install dependencies:
   ```bash
   npm install axios react-router-dom
   ```
3. Start the React development server:
   ```bash
   npm start
   ```
   The frontend will run on `http://localhost:3000`.

---

## Usage
1. Open the application in your browser at `http://localhost:3000`.
2. Register a new user or log in with existing credentials.
3. Access the respective dashboard based on your assigned role:
   - Admin Dashboard: `/admin`
   - Moderator Dashboard: `/moderator`
   - User Dashboard: `/user`

---

## Known Issue:
- **Login Glitch**: When logging in for the first time and clicking on the "Dashboard" option in the navbar, the app will redirect you to the login page instead of the dashboard. However, after refreshing the page, it works properly and redirects to the correct dashboard based on the user's role. This issue is under investigation.
  
---

## Dashboards Content:
Please note that the dashboards (Admin, Moderator, User) do not contain real data and are just placeholders to demonstrate the role-based routing functionality. The actual dashboard content will need to be implemented based on your application’s requirements.

---

## Directory Structure
```
repository-name/
│
├── backend/
│   ├── models/       # MongoDB schemas
│   ├── routes/       # API routes
│   ├── .env          # Environment variables
│   ├── server.js     # Express server entry point
│
├── frontend/
│   ├── src/
│   │   ├── components/  # React components
│   │   ├── App.js       # Main React app
│   │   ├── index.js     # React DOM entry point
│   │
│   ├── package.json  # Frontend dependencies
│
└── README.md
```
