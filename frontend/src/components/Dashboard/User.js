import React from 'react';
import './User.css';  // Import the CSS for styling

const User = () => {
  return (
    <div className="user-dashboard">
      <div className="user-header">
        <h1>Welcome, User!</h1>
        <p>Your dashboard provides access to your profile, settings, and more.</p>
      </div>

      <div className="user-stats">
        <div className="stat-card">
          <h3>Profile Overview</h3>
          <p>View and edit your personal details.</p>
        </div>
        <div className="stat-card">
          <h3>Your Orders</h3>
          <p>Track your recent orders and activities.</p>
        </div>
        <div className="stat-card">
          <h3>Settings</h3>
          <p>Manage your account settings and preferences.</p>
        </div>
      </div>

      <div className="quick-links">
        <h3>Quick Links</h3>
        <div className="links-container">
          <div className="link-item">
            <h4>Profile</h4>
            <p>View and update your personal information.</p>
          </div>
          <div className="link-item">
            <h4>Order History</h4>
            <p>See all your past orders and track shipments.</p>
          </div>
          <div className="link-item">
            <h4>Help & Support</h4>
            <p>Need help? Contact support or browse FAQs.</p>
          </div>
        </div>
      </div>

      <div className="recent-activity">
        <h3>Recent Activity</h3>
        <ul>
          <li>Updated profile information.</li>
          <li>Placed a new order for "Wireless Headphones".</li>
          <li>Contacted support for an issue with an order.</li>
        </ul>
      </div>
    </div>
  );
};

export default User;
