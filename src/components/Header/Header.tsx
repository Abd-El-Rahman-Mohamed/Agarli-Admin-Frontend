import React from 'react';
import { User } from '../../types';
import searchIcon from '../../assets/search.png';
import mailIcon from '../../assets/mail.png';
import notificationsIcon from '../../assets/notifications.png';
import adminAvatar from '../../assets/admin-avatar.png';
import './Header.css';

interface HeaderProps {
  user: User;
  onSearch: (query: string) => void;
  className?: string;
}

const Header: React.FC<HeaderProps> = ({ user, onSearch, className = '' }) => {
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onSearch(e.target.value);
  };

  return (
    <header className={`header ${className}`}>
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
              <img src={searchIcon} alt="Search" className="search-icon" />
            </button>
          </div>
        </div>

        <div className="header-actions">
          <div className="notification-icons">
            <div className="notification-item">
              <img src={mailIcon} alt="Mail" className="notification-icon" />
              <span className="notification-badge">2</span>
            </div>
            <div className="notification-item">
              <img src={notificationsIcon} alt="Notifications" className="notification-icon" />
              <span className="notification-badge">8</span>
            </div>
          </div>

          <div className="header-separator"></div>

          <div className="user-section">
            <div className="user-avatar-container">
              <div className="user-avatar">
                <img src={adminAvatar} alt={user.name} />
              </div>
              <div className="user-status-indicator"></div>
            </div>
            <div className="user-info-container">
              <div className="user-info">
                <div className="user-name">{user.name}</div>
                <div className="user-role">{user.role}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;