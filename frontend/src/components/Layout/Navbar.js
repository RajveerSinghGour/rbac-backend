import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();
  const isAuthenticated = !!localStorage.getItem('token');
  const role = localStorage.getItem('role');

  const handleLogout = () => {
    // Remove token and role from localStorage
    localStorage.removeItem('token');
    localStorage.removeItem('role');
    
    // Redirect to login page
    navigate('/login');
  };

  return (
    <nav style={styles.navbar}>
      <div style={styles.logo}>
        <h2>RBAC System</h2>
      </div>
      <div style={styles.links}>
        <Link to="/" style={styles.link}>Home</Link>

        {isAuthenticated ? (
          <>
            <Link to="/user" style={styles.link}>User Dashboard</Link>
            {role === 'Admin' && (
              <>
                <Link to="/admin" style={styles.link}>Admin Dashboard</Link>
                <Link to="/moderator" style={styles.link}>Moderator Dashboard</Link>
              </>
            )}
            {role === 'Moderator' && (
              <Link to="/moderator" style={styles.link}>Moderator Dashboard</Link>
            )}
            <button onClick={handleLogout} style={styles.logoutButton}>Logout</button>
          </>
        ) : (
          <>
            <Link to="/login" style={styles.link}>Login</Link>
            <Link to="/register" style={styles.link}>Register</Link>
          </>
        )}
      </div>
    </nav>
  );
};

const styles = {
  navbar: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px 20px',
    backgroundColor: '#333',
    color: 'white',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  },
  logo: {
    fontSize: '24px',
    fontWeight: 'bold',
  },
  links: {
    display: 'flex',
    gap: '15px',
  },
  link: {
    textDecoration: 'none',
    color: 'white',
    fontSize: '16px',
    transition: 'color 0.3s ease',
  },
  logoutButton: {
    padding: '5px 15px',
    backgroundColor: '#f44336',
    color: 'white',
    border: 'none',
    cursor: 'pointer',
    borderRadius: '4px',
    fontSize: '16px',
    transition: 'background-color 0.3s ease',
  },
};

export default Navbar;
