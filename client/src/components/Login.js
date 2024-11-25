import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { login } from '../services/authService';

// Component for user login
const Login = () => {
  // State to store the user's login credentials
  const [credentials, setCredentials] = useState({
    email: '',
    password: ''
  });

  const navigate = useNavigate();

  // Handle input change for form fields
  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  // Handle form submission to log the user in
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      // Call the login service to send the credentials and receive a JWT
      await login(credentials);
      // Redirect the user to the home page after successful login
      navigate('/');
    } catch (error) {
      console.error('Login failed', error);
    }
  };

  return (
    <form onSubmit={handleLogin}>
      <input 
        type="email" 
        name="email" 
        placeholder="Email" 
        onChange={handleChange} 
        required 
      />
      <input 
        type="password" 
        name="password" 
        placeholder="Password" 
        onChange={handleChange} 
        required 
      />
      <button type="submit">Login</button>
    </form>
  );
};

export default Login;