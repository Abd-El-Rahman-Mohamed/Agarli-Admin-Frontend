import React, { useState, useCallback } from 'react';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import Dashboard from './components/Dashboard/Dashboard';
import { User, NavigationItem, KPICard, SalesTarget, ChartDataPoint, Product, ProvinceData } from './types';
import storeIcon from './assets/store.png';
import './App.css';

// Fallback SVG home icon as data URL
const homeIcon = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='%23374151' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z'/%3E%3Cpolyline points='9,22 9,12 15,12 15,22'/%3E%3C/svg%3E";

const App: React.FC = () => {
  // State to track sidebar collapse status
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState<boolean>(false);

  // Handle sidebar toggle with useCallback to prevent unnecessary re-renders
  const handleSidebarToggle = useCallback((isCollapsed: boolean): void => {
    setIsSidebarCollapsed(isCollapsed);
  }, []);

  // Sample data
  const user: User = {
    id: '1',
    name: 'Guy Hawkins',
    role: 'Admin',
    avatar: '/api/placeholder/40/40'
  };

  const navigationItems: NavigationItem[] = [
    { id: 'dashboard', label: 'Dashboard', icon: homeIcon, iconType: 'image', isActive: true },
    {
      id: 'product',
      label: 'Product (19)',
      icon: storeIcon,
      iconType: 'image',
      children: [
        { id: 'sneakers', label: 'Sneakers' },
        { id: 'jacket', label: 'Jacket' },
        { id: 't-shirt', label: 'T-Shirt' },
        { id: 'bag', label: 'Bag' }
      ]
    },
    { id: 'transaction', label: 'Transaction (441)', icon: '💳' },
    { id: 'customers', label: 'Customers', icon: '👥' },
    { id: 'sales-report', label: 'Sales Report', icon: '📈' }
  ];

  const kpiCards: KPICard[] = [
    {
      id: '1',
      title: 'Total Revenue',
      value: '$81,000',
      change: { percentage: 10.6, period: 'From last week', isPositive: true },
      color: 'blue'
    },
    {
      id: '2',
      title: 'Total Customer',
      value: '5,000',
      change: { percentage: 1.8, period: 'From last week', isPositive: true },
      color: 'green'
    },
    {
      id: '3',
      title: 'Total Transactions',
      value: '12,000',
      change: { percentage: 3.6, period: 'From last week', isPositive: true },
      color: 'purple'
    },
    {
      id: '4',
      title: 'Total Product',
      value: '5,000',
      change: { percentage: 1.5, period: 'From last week', isPositive: false },
      color: 'orange'
    }
  ];

  const salesTarget: SalesTarget = {
    current: 231032444,
    target: 500000000,
    percentage: 46.2
  };

  const chartData: ChartDataPoint[] = [
    { month: 'Jan', averageSales: 180000000, targetSales: 200000000 },
    { month: 'Feb', averageSales: 190000000, targetSales: 210000000 },
    { month: 'Mar', averageSales: 170000000, targetSales: 195000000 },
    { month: 'Apr', averageSales: 220000000, targetSales: 230000000 },
    { month: 'Jun', averageSales: 240000000, targetSales: 250000000 },
    { month: 'Jul', averageSales: 210000000, targetSales: 220000000 },
    { month: 'Aug', averageSales: 280000000, targetSales: 270000000 },
    { month: 'Sep', averageSales: 300000000, targetSales: 290000000 },
    { month: 'Oct', averageSales: 320000000, targetSales: 310000000 },
    { month: 'Nov', averageSales: 340000000, targetSales: 330000000 },
    { month: 'Dec', averageSales: 360000000, targetSales: 350000000 }
  ];

  const popularProducts: Product[] = [
    {
      id: '02231-1',
      name: 'Kanky Kftadakate (Green)',
      image: '/api/placeholder/40/40',
      price: 20.00,
      sales: 3000,
      status: 'Success'
    },
    {
      id: '02231-2',
      name: 'Kanky Kftadakate (Green)',
      image: '/api/placeholder/40/40',
      price: 20.00,
      sales: 2311,
      status: 'Success'
    },
    {
      id: '02231-3',
      name: 'Kanky Kftadakate (Green)',
      image: '/api/placeholder/40/40',
      price: 20.00,
      sales: 2111,
      status: 'Success'
    },
    {
      id: '02231-4',
      name: 'Kanky Kftadakate (Green)',
      image: '/api/placeholder/40/40',
      price: 20.00,
      sales: 1661,
      status: 'Success'
    }
  ];

  const provinceData: ProvinceData[] = [
    { name: 'East Java', percentage: 50, color: '#22c55e' },
    { name: 'Kalimantan', percentage: 30, color: '#3b82f6' },
    { name: 'Bali', percentage: 65, color: '#1e40af' }
  ];

  const handleSearch = useCallback((query: string) => {
    console.log('Search query:', query);
  }, []);

  const handleNavigationClick = useCallback((itemId: string) => {
    console.log('Navigation clicked:', itemId);
  }, []);

  return (
    <div className="app">
      <Sidebar
        user={user}
        navigationItems={navigationItems}
        onNavigationClick={handleNavigationClick}
        onToggle={handleSidebarToggle}
      />
      <Header
        user={user}
        onSearch={handleSearch}
        className={isSidebarCollapsed ? 'header-sidebar-collapsed' : ''}
      />
      <Dashboard
        kpiCards={kpiCards}
        salesTarget={salesTarget}
        chartData={chartData}
        popularProducts={popularProducts}
        provinceData={provinceData}
        className={isSidebarCollapsed ? 'dashboard-sidebar-collapsed' : ''}
      />
    </div>
  );
};

export default App;