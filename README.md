VRV Security Intern Assignment
==============================

This project is a comprehensive implementation of **Authentication**, **Authorization**, and **Role-Based Access Control (RBAC)** mechanisms as part of an internship assignment for VRV Security. The goal of this system is to provide secure access control based on user roles and integrate Google OAuth for authentication.

Table of Contents
-----------------

*   [Features](#features)
    
*   [Technologies Used](#technologies-used)
    
*   [Project Structure](#project-structure)
    
*   [Installation and Setup](#installation-and-setup)
    
*   [API Endpoints](#api-endpoints)
    
*   [Google OAuth Configuration](#google-oauth-configuration)
    
*   [Usage](#usage)
    
*   [Contributing](#contributing)
    
*   [License](#license)
    

Features
--------

*   **User Registration**: Users can register by providing a username, email, and password. During registration, roles can be assigned.
    
*   **User Login**: Users can log in with an email and password, receiving a JWT for authenticated requests.
    
*   **Role-Based Access Control (RBAC)**: Different user roles (e.g., Admin, User) restrict access to specific parts of the application.
    
*   **Google OAuth2 Login**: Users can log in via their Google accounts, with JWT tokens generated upon successful login.
    
*   **Protected Routes**: Routes are protected based on user roles, ensuring that only authorized users can access certain resources.
    
*   **JWT Authentication**: Secure token-based authentication using JWT to protect API endpoints.
    
*   **Logout**: Users can log out and invalidate their session.
    

Technologies Used
-----------------

*   **Backend**: Node.js, Express.js
    
*   **Authentication**: Passport.js (Google OAuth), JWT (JSON Web Tokens)
    
*   **Database**: MongoDB (Mongoose for modeling)
    
*   **Password Encryption**: bcrypt.js
    
*   **Frontend**: React.js, React Router for navigation
    
*   **Version Control**: Git and GitHub
    

Project Structure
-----------------

Plain textANTLR4BashCC#CSSCoffeeScriptCMakeDartDjangoDockerEJSErlangGitGoGraphQLGroovyHTMLJavaJavaScriptJSONJSXKotlinLaTeXLessLuaMakefileMarkdownMATLABMarkupObjective-CPerlPHPPowerShell.propertiesProtocol BuffersPythonRRubySass (Sass)Sass (Scss)SchemeSQLShellSwiftSVGTSXTypeScriptWebAssemblyYAMLXML`   bashCopy code|-- /client                  # Frontend code (React)      |-- /src          |-- /components      # React components          |-- /pages           # Different pages (Login, Admin, User)          |-- App.js           # Main App component          |-- OAuthCallback.js # Handles Google OAuth callback  |-- /server                   # Backend code (Express.js)      |-- /config               # Configuration files (DB, Passport)      |-- /controllers          # Controller functions (auth, user)      |-- /models               # Mongoose models (User, Role)      |-- /routes               # API routes (auth, users)      |-- app.js                # Main server file      |-- server.js             # Server setup and configuration  |-- .env                      # Environment variables  |-- package.json              # Dependencies and scripts   `

Installation and Setup
----------------------

### Prerequisites

*   [Node.js](https://nodejs.org/) and npm (Node Package Manager)
    
*   [MongoDB](https://www.mongodb.com/) installed locally or a cloud-based MongoDB instance
    

### Step-by-Step Setup

1.  bashCopy codegit clone https://github.com/Manav2031/VRV-Security-Intern-Assignment.gitcd VRV-Security-Intern-Assignment
    
2.  bashCopy codecd serverInstall server dependencies:bashCopy codenpm installCreate a .env file in the root of the server directory with the following variables:bashCopy codeJWT\_SECRET=your\_jwt\_secretGOOGLE\_CLIENT\_ID=your\_google\_client\_idGOOGLE\_CLIENT\_SECRET=your\_google\_client\_secretMONGO\_URI=your\_mongodb\_uriRun the backend server:bashCopy codenpm start
    
3.  bashCopy codecd clientnpm installRun the frontend:bashCopy codenpm start
    
4.  **Access the Application**:
    
    *   The backend will be running on http://localhost:5000/
        
    *   The frontend will be running on http://localhost:3000/
        

API Endpoints
-------------

### Authentication Endpoints:

*   **POST /api/auth/register**: Register a new user
    
*   **POST /api/auth/login**: Log in with email and password
    
*   **GET /auth/google**: Initiate Google OAuth login
    
*   **GET /auth/google/callback**: Google OAuth callback handler
    

### Role-Based Access Control:

*   **GET /api/users/:id**: Get user details (Admin only)
    
*   **GET /api/admin/dashboard**: Access the admin dashboard (Admin only)
    

Google OAuth Configuration
--------------------------

1.  Go to the Google Developers Console.
    
2.  Create a new project and enable the **Google+ API** and **Google Identity API**.
    
3.  Create OAuth credentials (Client ID and Client Secret).
    
4.  In your .env file, add the GOOGLE\_CLIENT\_ID and GOOGLE\_CLIENT\_SECRET.
    
5.  bashCopy codehttp://localhost:5000/auth/google/callback
    

Usage
-----

*   **User Registration**: Users can register via /register endpoint.
    
*   **Google Login**: Users can log in using Google OAuth by visiting /auth/google and following the login prompts.
    
*   **Access Admin Features**: Only users with the "Admin" role can access the /admin page.
    

Contributing
------------

Contributions, issues, and feature requests are welcome!

To contribute:

1.  Fork this repository.
    
2.  Create a new branch (git checkout -b feature/your-feature-name).
    
3.  Make your changes.
    
4.  Commit your changes (git commit -m 'Add some feature').
    
5.  Push to the branch (git push origin feature/your-feature-name).
    
6.  Open a Pull Request.
    

License
-------

This project is licensed under the MIT License. See the LICENSE file for details.
