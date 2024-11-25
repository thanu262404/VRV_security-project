import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Login from './components/Login';
import Register from './components/Register';
import AdminPage from './pages/AdminPage';
import UserPage from './pages/UserPage';
import ProtectedRoute from './components/ProtectedRoute';

// Main App component that handles routing and protected routes
const App = () => {
  return (
    <Router>
      <Routes>
        {/* Public routes */}
        <Route exact path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        
        {/* Protected routes for Admin and User roles */}
        <Route element={<ProtectedRoute allowedRoles={['Admin']} />}>
        <Route path="/admin" element={<AdminPage />} />
      </Route>
      <Route element={<ProtectedRoute allowedRoles={['User']} />}>
        <Route path="/user" element={<UserPage />} />
      </Route>
        {/* <ProtectedRoute path="/admin" component={AdminPage} allowedRoles={['Admin']} /> */}
        {/* <ProtectedRoute path="/user" component={UserPage} allowedRoles={['User']} /> */}
      </Routes>
    </Router>
  );
};

export default App;