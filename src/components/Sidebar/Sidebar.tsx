import React, { useState, useEffect } from 'react';
import { NavigationItem, User } from '../../types';
import agarliLogo from '../../assets/agarli-logo.png';
import okkankyLogo from '../../assets/okkanky-logo.png';
import toggleIcon from '../../assets/toggle-icon.png';
import './Sidebar.css';

interface SidebarProps {
    user: User;
    navigationItems: NavigationItem[];
    onNavigationClick: (itemId: string) => void;
    onToggle?: (isCollapsed: boolean) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ user, navigationItems, onNavigationClick, onToggle }) => {
    // State to track whether the sidebar is collapsed or expanded
    const [isCollapsed, setIsCollapsed] = useState<boolean>(false);

    // Internal toggle function for state management
    const toggleSidebar = (): void => {
        console.log('Toggle triggered, current state:', isCollapsed); // Debug log
        setIsCollapsed(prevState => !prevState);
    };

    // Toggle function to handle mouse clicks
    const handleToggle = (event: React.MouseEvent<HTMLButtonElement>): void => {
        event.preventDefault();
        event.stopPropagation();
        toggleSidebar();
    };

    // Effect to notify parent component when state changes
    useEffect(() => {
        onToggle?.(isCollapsed);
    }, [isCollapsed, onToggle]);

    // Handle keyboard navigation for accessibility
    const handleKeyDown = (event: React.KeyboardEvent): void => {
        if (event.key === 'Escape' && !isCollapsed) {
            toggleSidebar();
        }
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
        <div
            className={`sidebar ${isCollapsed ? 'sidebar-collapsed' : 'sidebar-expanded'}`}
            onKeyDown={handleKeyDown}
            role="navigation"
            aria-label="Main navigation"
        >
            <div className="sidebar-header">
                <div className="logo">
                    <img src={agarliLogo} alt="Agarli Logo" className="logo-image" />
                </div>
                {!isCollapsed && (
                    <div className="store-info">
                        <div className="store-logo">
                            <img src={okkankyLogo} alt="Kanky Logo" className="store-logo-image" />
                        </div>
                        <div className="store-details">
                            <div className="store-label">Company</div>
                            <div className="store-name">Kanky Store</div>
                        </div>
                    </div>
                )}
                {/* Toggle button - always visible but positioned differently */}
                <button
                    className={`sidebar-toggle ${isCollapsed ? 'sidebar-toggle-collapsed' : 'sidebar-toggle-expanded'}`}
                    onClick={handleToggle}
                    onMouseDown={(e) => e.preventDefault()} // Prevent focus issues
                    aria-label={isCollapsed ? "Expand sidebar" : "Collapse sidebar"}
                    title={isCollapsed ? "Expand sidebar" : "Collapse sidebar"}
                    type="button"
                    aria-expanded={!isCollapsed}
                    tabIndex={0}
                >
                    {toggleIcon ? (
                        <img
                            src={toggleIcon}
                            alt=""
                            className={`toggle-icon ${isCollapsed ? 'toggle-icon-collapsed' : 'toggle-icon-expanded'}`}
                            draggable={false}
                            onError={(e) => {
                                // Fallback to text if image fails to load
                                e.currentTarget.style.display = 'none';
                                e.currentTarget.parentElement!.innerHTML = isCollapsed ? '→' : '←';
                            }}
                        />
                    ) : (
                        <span className="toggle-icon-fallback">
                            {isCollapsed ? '→' : '←'}
                        </span>
                    )}
                </button>
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

            </div>
        </div>
    );
};

export default Sidebar;