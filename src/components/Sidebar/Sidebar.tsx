import React, { useState } from 'react';
import { NavigationItem, User } from '../../types';
import agarliLogo from '../../assets/agarli-logo.png';
import toggleIcon from '../../assets/toggle-icon.png';
import './Sidebar.css';

interface SidebarProps {
    user: User;
    navigationItems: NavigationItem[];
    onNavigationClick: (itemId: string) => void;
    onToggle?: (isCollapsed: boolean) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ user, navigationItems, onNavigationClick }) => {
    // State to track whether the sidebar is collapsed or expanded
    const [isCollapsed, setIsCollapsed] = useState<boolean>(false);

    // Toggle function to handle sidebar collapse/expand
    const handleToggle = (): void => {
        setIsCollapsed(prevState => !prevState);
    };

    const renderNavigationItem = (item: NavigationItem) => (
        <div key={item.id} className="nav-item-container">
            <div
                className={`nav-item ${item.isActive ? 'nav-item-active' : ''}`}
                onClick={() => onNavigationClick(item.id)}
                title={isCollapsed ? item.label : undefined}
            >
                {item.icon && <span className="nav-icon">{item.icon}</span>}
                {!isCollapsed && <span className="nav-label">{item.label}</span>}
            </div>
            {item.children && (
                <div className="nav-children">
                    {item.children.map(child => (
                        <div
                            key={child.id}
                            className="nav-child-item"
                            onClick={() => onNavigationClick(child.id)}
                            title={isCollapsed ? child.label : undefined}
                        >
                            {!isCollapsed && <span className="nav-child-label">{child.label}</span>}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );

    return (
        <div className={`sidebar ${isCollapsed ? 'sidebar-collapsed' : 'sidebar-expanded'}`}>
            <div className="sidebar-header">
                <div className="logo">
                    <img src={agarliLogo} alt="Agarli Logo" className="logo-image" />
                </div>
                {!isCollapsed && (
                    <div className="store-info">
                        <span className="store-icon">🏪</span>
                        <span className="store-name">Kanky Store</span>
                    </div>
                )}
                {/* Toggle button - only visible when sidebar is expanded */}
                {!isCollapsed && (
                    <button
                        className="sidebar-toggle"
                        onClick={handleToggle}
                        aria-label="Collapse sidebar"
                        title="Collapse sidebar"
                        type="button"
                    >
                        <img src={toggleIcon} alt="Toggle sidebar" className="toggle-icon" />
                    </button>
                )}
            </div>

            <div className="sidebar-content">
                <div className="nav-section">
                    {!isCollapsed && <div className="nav-section-title">GENERAL</div>}
                    {navigationItems.map(renderNavigationItem)}
                </div>

                <div className="nav-section">
                    {!isCollapsed && <div className="nav-section-title">TOOLS</div>}
                    <div className="nav-item" title={isCollapsed ? "Account & Settings" : undefined}>
                        <span className="nav-icon">⚙️</span>
                        {!isCollapsed && <span className="nav-label">Account & Settings</span>}
                    </div>
                    <div className="nav-item" title={isCollapsed ? "Help" : undefined}>
                        <span className="nav-icon">❓</span>
                        {!isCollapsed && <span className="nav-label">Help</span>}
                    </div>
                    <div className="nav-item" title={isCollapsed ? "Dark Mode" : undefined}>
                        <span className="nav-icon">🌙</span>
                        {!isCollapsed && <span className="nav-label">Dark Mode</span>}
                        {!isCollapsed && (
                            <div className="toggle-switch">
                                <input type="checkbox" id="darkMode" />
                                <label htmlFor="darkMode" className="toggle-label"></label>
                            </div>
                        )}
                    </div>
                </div>
            </div>

            <div className="sidebar-footer">
                <div className="user-profile">
                    <div className="user-avatar" title={isCollapsed ? user.name : undefined}>
                        {user.avatar ? (
                            <img src={user.avatar} alt={user.name} />
                        ) : (
                            <div className="avatar-placeholder">{user.name.charAt(0)}</div>
                        )}
                    </div>
                    {!isCollapsed && (
                        <div className="user-info">
                            <div className="user-name">{user.name}</div>
                            <div className="user-role">{user.role}</div>
                        </div>
                    )}
                    {!isCollapsed && <div className="user-menu">⋮</div>}
                </div>
                {/* Expand button - only visible when sidebar is collapsed */}
                {isCollapsed && (
                    <button
                        className="sidebar-expand"
                        onClick={handleToggle}
                        aria-label="Expand sidebar"
                        title="Expand sidebar"
                        type="button"
                    >
                        <img src={toggleIcon} alt="Expand sidebar" className="toggle-icon" />
                    </button>
                )}
            </div>
        </div>
    );
};

export default Sidebar;