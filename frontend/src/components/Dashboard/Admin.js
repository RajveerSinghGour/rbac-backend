import React from 'react';
import './Admin.css';  // Import the CSS for styling

const Admin = () => {
  return (
    <div className="admin-dashboard">
      <div className="admin-header">
        <h1>Welcome, Admin!</h1>
        <p>Your dashboard provides an overview of the system's activity and quick links to manage users, moderators, and settings.</p>
      </div>

      <div className="dashboard-stats">
        <div className="stat-card">
          <h3>Total Users</h3>
          <p>245</p>
        </div>
        <div className="stat-card">
          <h3>Total Moderators</h3>
          <p>15</p>
        </div>
        <div className="stat-card">
          <h3>Total Admins</h3>
          <p>5</p>
        </div>
      </div>

      <div className="quick-links">
        <h3>Quick Links</h3>
        <div className="links-container">
          <div className="link-item">
            <h4>Manage Users</h4>
            <p>View and manage registered users in the system.</p>
          </div>
          <div className="link-item">
            <h4>Manage Moderators</h4>
            <p>Assign, remove, or view moderators.</p>
          </div>
          <div className="link-item">
            <h4>System Settings</h4>
            <p>Configure global settings for the system.</p>
          </div>
        </div>
      </div>

      <div className="recent-activity">
        <h3>Recent Activity</h3>
        <ul>
          <li>User John Doe registered.</li>
          <li>Moderator Jane Smith was added.</li>
          <li>Admin David Brown changed system settings.</li>
        </ul>
      </div>
    </div>
  );
};

export default Admin;
