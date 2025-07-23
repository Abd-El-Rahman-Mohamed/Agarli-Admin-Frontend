import React from 'react';
import { NavigationItem, User } from '../../types';
import './Sidebar.css';

interface SidebarProps {
  user: User;
  navigationItems: NavigationItem[];
  onNavigationClick: (itemId: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ user, navigationItems, onNavigationClick }) => {
  const renderNavigationItem = (item: NavigationItem) => (
    <div key={item.id} className="nav-item-container">
      <div
        className={`nav-item ${item.isActive ? 'nav-item-active' : ''}`}
        onClick={() => onNavigationClick(item.id)}
      >
        {item.icon && <span className="nav-icon">{item.icon}</span>}
        <span className="nav-label">{item.label}</span>
      </div>
      {item.children && (
        <div className="nav-children">
          {item.children.map(child => (
            <div
              key={child.id}
              className="nav-child-item"
              onClick={() => onNavigationClick(child.id)}
            >
              <span className="nav-child-label">{child.label}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );

  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <div className="logo">
          <span className="logo-text">ایرانی</span>
        </div>
        <div className="store-info">
          <span className="store-icon">🏪</span>
          <span className="store-name">Kanky Store</span>
        </div>
      </div>

      <div className="sidebar-content">
        <div className="nav-section">
          <div className="nav-section-title">GENERAL</div>
          {navigationItems.map(renderNavigationItem)}
        </div>

        <div className="nav-section">
          <div className="nav-section-title">TOOLS</div>
          <div className="nav-item">
            <span className="nav-icon">⚙️</span>
            <span className="nav-label">Account & Settings</span>
          </div>
          <div className="nav-item">
            <span className="nav-icon">❓</span>
            <span className="nav-label">Help</span>
          </div>
          <div className="nav-item">
            <span className="nav-icon">🌙</span>
            <span className="nav-label">Dark Mode</span>
            <div className="toggle-switch">
              <input type="checkbox" id="darkMode" />
              <label htmlFor="darkMode" className="toggle-label"></label>
            </div>
          </div>
        </div>
      </div>

      <div className="sidebar-footer">
        <div className="user-profile">
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
          <div className="user-menu">⋮</div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;