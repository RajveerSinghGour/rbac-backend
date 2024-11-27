import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import Navbar from './components/Layout/Navbar';
import Admin from './components/Dashboard/Admin';
import Moderator from './components/Dashboard/Moderator';
import User from './components/Dashboard/User';
import './App.css';  // Import the CSS for global styling

const App = () => {
  const [loading, setLoading] = useState(true);  // Track loading state
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [role, setRole] = useState(null);

  // Check authentication state when the component mounts
  useEffect(() => {
    const token = localStorage.getItem('token');
    const userRole = localStorage.getItem('role');

    if (token && userRole) {
      setIsAuthenticated(true);
      setRole(userRole);
    }

    setLoading(false);  // After state is set, stop loading
  }, []);

  // Protected route component
  const ProtectedRoute = ({ roleRequired, children }) => {
    if (loading) return <div className="loading">Loading...</div>; // Wait until loading is complete
    if (!isAuthenticated) return <Navigate to="/login" />; // Redirect to login if not authenticated
    if (!roleRequired.includes(role)) return <Navigate to="/not-authorized" />; // Redirect if role mismatch
    return children;
  };

  // Function to handle logout
  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('role');
    setIsAuthenticated(false); // Update React state
    setRole(null); // Clear role
  };

  return (
    <Router>
      <Navbar isAuthenticated={isAuthenticated} role={role} handleLogout={handleLogout} />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login setIsAuthenticated={setIsAuthenticated} setRole={setRole} />} />
          <Route path="/register" element={<Register />} />

          {/* Admin Dashboard */}
          <Route
            path="/admin"
            element={
              <ProtectedRoute roleRequired={['Admin']}>
                <Admin />
              </ProtectedRoute>
            }
          />

          {/* Moderator Dashboard */}
          <Route
            path="/moderator"
            element={
              <ProtectedRoute roleRequired={['Admin', 'Moderator']}>
                <Moderator />
              </ProtectedRoute>
            }
          />

          {/* User Dashboard */}
          <Route
            path="/user"
            element={
              <ProtectedRoute roleRequired={['Admin', 'Moderator', 'User']}>
                <User />
              </ProtectedRoute>
            }
          />

          {/* Access Denied Page */}
          <Route
            path="/not-authorized"
            element={<h1 className="access-denied">Access Denied: You do not have permission to view this page</h1>}
          />
        </Routes>
      </div>
    </Router>
  );
};

// Home Page with added content and design improvements
const Home = () => {
  return (
    <div className="home-page">
      <h1 className="home-title">Welcome to the Role-Based Access Control (RBAC) System</h1>
      <p className="home-description">
        This system is designed to manage users and their roles. With our RBAC system, you can efficiently manage who has access to various parts of the application based on their role (Admin, Moderator, User).
        <br />
        Select your role and start managing your dashboard based on permissions.
      </p>

      <section className="feature-section">
        <div className="feature-card">
          <h3>Admin Dashboard</h3>
          <p>Admins have full control over the system, managing users and moderating content. Create and manage new user roles and permissions.</p>
        </div>
        <div className="feature-card">
          <h3>Moderator Dashboard</h3>
          <p>Moderators have the ability to review and moderate user-generated content, ensuring that it complies with system guidelines and regulations.</p>
        </div>
        <div className="feature-card">
          <h3>User Dashboard</h3>
          <p>Users can view and manage their profiles, interact with content, and access areas of the system based on the permissions given by their roles.</p>
        </div>
      </section>

      <section className="cta-section">
        <h2>Get Started Today</h2>
        <p>
          Create an account, log in, and explore your personalized dashboard. Choose your role and enjoy a seamless experience with role-based access.
        </p>
        <div className="cta-buttons">
          <button className="cta-btn" onClick={() => window.location.href = '/register'}>
            Sign Up Now
          </button>
          <button className="cta-btn" onClick={() => window.location.href = '/login'}>
            Log In
          </button>
        </div>
      </section>
    </div>
  );
};

export default App;
