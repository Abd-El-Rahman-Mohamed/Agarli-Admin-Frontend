import React from 'react';
import { User } from '../../types';
import './Header.css';

interface HeaderProps {
  user: User;
  onSearch: (query: string) => void;
}

const Header: React.FC<HeaderProps> = ({ user, onSearch }) => {
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onSearch(e.target.value);
  };

  return (
    <header className="header">
      <div className="header-content">
        <div className="search-section">
          <div className="search-container">
            <input
              type="text"
              placeholder="Search product"
              className="search-input"
              onChange={handleSearchChange}
            />
            <button className="search-button">
              🔍
            </button>
          </div>
        </div>

        <div className="header-actions">
          <div className="notification-icons">
            <div className="notification-item">
              <span className="notification-icon">🛒</span>
              <span className="notification-badge">3</span>
            </div>
            <div className="notification-item">
              <span className="notification-icon">🔔</span>
              <span className="notification-badge">1</span>
            </div>
          </div>

          <div className="user-section">
            <div className="user-avatar">
              {user.avatar ? (
                <img src={user.avatar} alt={user.name} />
              ) : (
                <div className="avatar-placeholder">{user.name.charAt(0)}</div>
              )}
            </div>
            <div className="user-info">
              <div className="user-name">{user.name}</div>
              <div className="user-role">{user.role}</div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;