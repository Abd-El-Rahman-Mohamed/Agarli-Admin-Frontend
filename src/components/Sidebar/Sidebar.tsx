import React, { useState, useEffect } from 'react';
import { NavigationItem, User } from '../../types';
import agarliLogo from '../../assets/agarli-logo.png';
import okkankyLogo from '../../assets/okkanky-logo.png';
import toggleIcon from '../../assets/toggle-icon.png';
import arrowIcon from '../../assets/arrow-up-simple.png';
import settingsIcon from '../../assets/settings.png';
import helpIcon from '../../assets/help.png';
import moonIcon from '../../assets/moon.png';
import adminAvatar from '../../assets/admin-avatar.png';
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

    // State to track which navigation items are expanded
    const [expandedItems, setExpandedItems] = useState<Record<string, boolean>>(() => {
        const initial: Record<string, boolean> = {};
        navigationItems.forEach(item => {
            if (item.isExpanded !== undefined) {
                initial[item.id] = item.isExpanded;
            }
        });
        return initial;
    });

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

    // Toggle expansion state for navigation items with children
    const toggleItemExpansion = (itemId: string, event: React.MouseEvent): void => {
        event.stopPropagation(); // Prevent triggering the main navigation click
        setExpandedItems(prev => ({
            ...prev,
            [itemId]: !prev[itemId]
        }));
    };

    // Helper function to render icon (emoji or image)
    const renderIcon = (icon: string, iconType?: 'emoji' | 'image') => {
        console.log('Rendering icon:', icon, 'Type:', iconType); // Debug log

        // Check if it's explicitly marked as an image or if it looks like an image path
        if (iconType === 'image' || icon.includes('.png') || icon.includes('.jpg') || icon.includes('.svg') || icon.includes('.jpeg') || icon.startsWith('/') || icon.includes('static/')) {
            return (
                <img
                    src={icon}
                    alt="Navigation icon"
                    className="nav-icon-image"
                    draggable={false}
                    onError={(e) => {
                        console.error('Failed to load icon:', icon);
                        // Fallback to a simple house emoji if image fails
                        e.currentTarget.style.display = 'none';
                        e.currentTarget.parentElement!.innerHTML = '<span class="nav-icon-text">🏠</span>';
                    }}
                    onLoad={() => console.log('Icon loaded successfully:', icon)}
                />
            );
        }
        // Otherwise, treat as emoji or text
        return <span className="nav-icon-text">{icon}</span>;
    };

    const renderNavigationItem = (item: NavigationItem) => {
        const isExpanded = expandedItems[item.id] ?? item.isExpanded ?? true;

        return (
            <div key={item.id} className="nav-item-container">
                <div
                    className={`nav-item ${item.isActive ? 'nav-item-active' : ''}`}
                    onClick={() => onNavigationClick(item.id)}
                    title={isCollapsed ? item.label : undefined}
                >
                    {item.icon && <span className="nav-icon">{renderIcon(item.icon, item.iconType)}</span>}
                    {!isCollapsed && <span className="nav-label">{item.label}</span>}

                    {/* Expand/Collapse Arrow for items with children */}
                    {item.hasExpandIcon && item.children && !isCollapsed && (
                        <button
                            className={`nav-expand-btn ${isExpanded ? 'expanded' : 'collapsed'}`}
                            onClick={(e) => toggleItemExpansion(item.id, e)}
                            aria-label={isExpanded ? 'Collapse' : 'Expand'}
                            type="button"
                        >
                            <img
                                src={arrowIcon}
                                alt="Expand/Collapse"
                                className="nav-expand-icon"
                                draggable={false}
                            />
                        </button>
                    )}
                </div>

                {/* Children items - only show if expanded */}
                {item.children && isExpanded && (
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
    };

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
                        <span className="nav-icon">{renderIcon(settingsIcon, 'image')}</span>
                        {!isCollapsed && <span className="nav-label">Account & Settings</span>}
                    </div>
                    <div className="nav-item" title={isCollapsed ? "Help" : undefined}>
                        <span className="nav-icon">{renderIcon(helpIcon, 'image')}</span>
                        {!isCollapsed && <span className="nav-label">Help</span>}
                    </div>
                    <div className="nav-item" title={isCollapsed ? "Dark Mode" : undefined}>
                        <span className="nav-icon">{renderIcon(moonIcon, 'image')}</span>
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
                    <div className="user-info-container">
                        <div className="user-avatar" title={isCollapsed ? user.name : undefined}>
                            <img src={adminAvatar} alt={user.name} />
                        </div>
                        {!isCollapsed && (
                            <div className="user-info">
                                <div className="user-name">{user.name}</div>
                                <div className="user-role">{user.role}</div>
                            </div>
                        )}
                    </div>
                    {!isCollapsed && (
                        <div className="user-dropdown">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M6 9L12 15L18 9" stroke="#454545" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </div>
                    )}
                </div>

            </div>
        </div>
    );
};

export default Sidebar;