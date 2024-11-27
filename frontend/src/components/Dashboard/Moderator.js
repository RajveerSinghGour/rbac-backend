import React from 'react';
import './Moderator.css';  // Import the CSS for styling

const Moderator = () => {
  return (
    <div className="moderator-dashboard">
      <div className="moderator-header">
        <h1>Welcome, Moderator!</h1>
        <p>Your dashboard provides tools to manage user content and oversee the platform's activities.</p>
      </div>

      <div className="moderator-stats">
        <div className="stat-card">
          <h3>Manage Content</h3>
          <p>Review and approve or reject user-submitted content.</p>
        </div>
        <div className="stat-card">
          <h3>User Reports</h3>
          <p>View and resolve user-reported issues and content violations.</p>
        </div>
        <div className="stat-card">
          <h3>Moderation History</h3>
          <p>Track your past moderation actions and decisions.</p>
        </div>
      </div>

      <div className="quick-links">
        <h3>Quick Links</h3>
        <div className="links-container">
          <div className="link-item">
            <h4>Content Dashboard</h4>
            <p>Manage submitted content and ensure compliance with platform guidelines.</p>
          </div>
          <div className="link-item">
            <h4>User Reports</h4>
            <p>Check and resolve reported issues and misconducts from users.</p>
          </div>
          <div className="link-item">
            <h4>Help & Support</h4>
            <p>Need assistance? Contact support or browse frequently asked questions.</p>
          </div>
        </div>
      </div>

      <div className="recent-activity">
        <h3>Recent Activity</h3>
        <ul>
          <li>Approved 3 user-submitted posts.</li>
          <li>Resolved a user complaint regarding inappropriate content.</li>
          <li>Reviewed 10 new reports from users.</li>
        </ul>
      </div>
    </div>
  );
};

export default Moderator;
