# VRV Security Intern Assignment

This project is a comprehensive implementation of **Authentication**, **Authorization**, and **Role-Based Access Control (RBAC)** mechanisms as part of an internship assignment for VRV Security. The goal of this system is to provide secure access control based on user roles and integrate Google OAuth for authentication.

## Table of Contents
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation and Setup](#installation-and-setup)
- [API Endpoints](#api-endpoints)
- [Google OAuth Configuration](#google-oauth-configuration)
- [Usage](#usage)
- [Contributing](#contributing)

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

## Installation and Setup

### Prerequisites
- [Node.js](https://nodejs.org/) and npm (Node Package Manager)
- [MongoDB](https://www.mongodb.com/) installed locally or a cloud-based MongoDB instance

### Step-by-Step Setup

1. **Clone the repository**:
   ```bash
   git clone https://github.com/Manav2031/VRV-Security-Intern-Assignment.git
   cd VRV-Security-Intern-Assignment

2. **Server Setup**: Navigate to the server directory:

```bash
cd server

3. **Install server dependencies**:

```bash
npm install

4. **Create a .env file in the root of the server directory with the following variables**:

```bash
JWT_SECRET=your_jwt_secret
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret
MONGO_URI=your_mongodb_uri
SESSION_SECRET=your_session_secret
PORT=your_port_number

5. **Run the backend server**:

```bash
npm start

6. **Client Setup**: Open a new terminal, navigate to the client directory, and install dependencies:

```bash
cd client
npm install

7. **Run the frontend**:

```bash
npm start

8. **Access the Application**:

The backend will be running on http://localhost:5000/
The frontend will be running on http://localhost:3000/

## API Endpoints
1. Authentication Endpoints:
POST /api/auth/register: Register a new user
POST /api/auth/login: Log in with email and password
GET /auth/google: Initiate Google OAuth login
GET /auth/google/callback: Google OAuth callback handler
2. Role-Based Access Control:
GET /user: Will Welcome User with a message (User only)
GET /admin: Will Welcome Admin with a message (Admin only)

## Google OAuth Configuration
1. Go to the Google Developers Console.
2. Create a new project and enable the Google+ API and Google Identity API.
3. Create OAuth credentials (Client ID and Client Secret).
4. In your .env file, add the GOOGLE_CLIENT_ID and GOOGLE_CLIENT_SECRET.
5. Ensure your callback URL matches this format:
```bash
http://localhost:5000/auth/google/callback

## Usage
1. **User Registration**: Users can register via /register endpoint.
2. **Google Login**: Users can log in using Google OAuth by visiting /auth/google and following the login prompts.
3. **Access Admin Features**: Only users with the "Admin" role can access the /admin page.
4. **Access User Features**: Only users with the "User" role can access the /user page.

## Contributing
Contributions, issues, and feature requests are welcome!
1. Fork this repository.
2. Create a new branch (git checkout -b feature/your-feature-name).
3. Make your changes.
4. Commit your changes (git commit -m 'Add some feature').
5. Push to the branch (git push origin feature/your-feature-name).
6. Open a Pull Request.
