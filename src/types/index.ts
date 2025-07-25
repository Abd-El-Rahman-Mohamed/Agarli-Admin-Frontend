// Common types for the dashboard application

export interface User {
  id: string;
  name: string;
  role: string;
  avatar?: string;
}

export interface KPICard {
  id: string;
  title: string;
  value: string | number;
  change?: {
    percentage: number;
    period: string;
    isPositive: boolean;
  };
  color?: string;
}

export interface SalesTarget {
  current: number;
  target: number;
  percentage: number;
}

export interface ChartDataPoint {
  month: string;
  averageSales: number;
  targetSales: number;
}

export interface Product {
  id: string;
  name: string;
  image: string;
  price: number;
  sales: number;
  status: 'Success' | 'Pending' | 'Failed';
}

export interface ProvinceData {
  name: string;
  percentage: number;
  color: string;
}

export interface NavigationItem {
  id: string;
  label: string;
  icon?: string; // Can be emoji string or image path
  iconType?: 'emoji' | 'image'; // Explicitly specify icon type
  isActive?: boolean;
  children?: NavigationItem[];
}