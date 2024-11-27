# VRV Security Intern Assignment

This project is a comprehensive implementation of **Authentication**, **Authorization**, and **Role-Based Access Control (RBAC)** mechanisms as part of an internship assignment for VRV Security. The goal of this system is to provide secure access control based on user roles and integrate Google OAuth for authentication.

## Table of Contents
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Project Structure](#project-structure)
- [Installation and Setup](#installation-and-setup)
- [API Endpoints](#api-endpoints)
- [Google OAuth Configuration](#google-oauth-configuration)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Features

- **User Registration**: Users can register by providing a username, email, and password. During registration, roles can be assigned.
- **User Login**: Users can log in with an email and password, receiving a JWT for authenticated requests.
- **Role-Based Access Control (RBAC)**: Different user roles (e.g., Admin, User) restrict access to specific parts of the application.
- **Google OAuth2 Login**: Users can log in via their Google accounts, with JWT tokens generated upon successful login.
- **Protected Routes**: Routes are protected based on user roles, ensuring that only authorized users can access certain resources.
- **JWT Authentication**: Secure token-based authentication using JWT to protect API endpoints.
- **Logout**: Users can log out and invalidate their session.
  
## Technologies Used

- **Backend**: Node.js, Express.js
- **Authentication**: Passport.js (Google OAuth), JWT (JSON Web Tokens)
- **Database**: MongoDB (Mongoose for modeling)
- **Password Encryption**: bcrypt.js
- **Frontend**: React.js, React Router for navigation
- **Version Control**: Git and GitHub

## Project Structure

|-- /client # Frontend code (React) |-- /src |-- /components # React components |-- /pages # Different pages (Login, Admin, User) |-- App.js # Main App component |-- OAuthCallback.js # Handles Google OAuth callback |-- /server # Backend code (Express.js) |-- /config # Configuration files (DB, Passport) |-- /controllers # Controller functions (auth, user) |-- /models # Mongoose models (User, Role) |-- /routes # API routes (auth, users) |-- app.js # Main server file |-- server.js # Server setup and configuration |-- .env # Environment variables |-- package.json # Dependencies and scripts

markdown
Copy code

## Installation and Setup

### Prerequisites
- [Node.js](https://nodejs.org/) and npm (Node Package Manager)
- [MongoDB](https://www.mongodb.com/) installed locally or a cloud-based MongoDB instance

### Step-by-Step Setup

1. **Clone the repository**:
   ```bash
   git clone https://github.com/Manav2031/VRV-Security-Intern-Assignment.git
   cd VRV-Security-Intern-Assignment
Server Setup: Navigate to the server directory:

bash
Copy code
cd server
Install server dependencies:

bash
Copy code
npm install
Create a .env file in the root of the server directory with the following variables:

bash
Copy code
JWT_SECRET=your_jwt_secret
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret
MONGO_URI=your_mongodb_uri
Run the backend server:

bash
Copy code
npm start
Client Setup: Open a new terminal, navigate to the client directory, and install dependencies:

bash
Copy code
cd client
npm install
Run the frontend:

bash
Copy code
npm start
Access the Application:

The backend will be running on http://localhost:5000/
The frontend will be running on http://localhost:3000/
API Endpoints
Authentication Endpoints:
POST /api/auth/register: Register a new user
POST /api/auth/login: Log in with email and password
GET /auth/google: Initiate Google OAuth login
GET /auth/google/callback: Google OAuth callback handler
Role-Based Access Control:
GET /api/users/:id: Get user details (Admin only)
GET /api/admin/dashboard: Access the admin dashboard (Admin only)
Google OAuth Configuration
Go to the Google Developers Console.
Create a new project and enable the Google+ API and Google Identity API.
Create OAuth credentials (Client ID and Client Secret).
In your .env file, add the GOOGLE_CLIENT_ID and GOOGLE_CLIENT_SECRET.
Ensure your callback URL matches this format:
bash
Copy code
http://localhost:5000/auth/google/callback
Usage
User Registration: Users can register via /register endpoint.
Google Login: Users can log in using Google OAuth by visiting /auth/google and following the login prompts.
Access Admin Features: Only users with the "Admin" role can access the /admin page.
Contributing
Contributions, issues, and feature requests are welcome!

To contribute:

Fork this repository.
Create a new branch (git checkout -b feature/your-feature-name).
Make your changes.
Commit your changes (git commit -m 'Add some feature').
Push to the branch (git push origin feature/your-feature-name).
Open a Pull Request.
