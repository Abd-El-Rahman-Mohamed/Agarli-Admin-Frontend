# Dashboard App

A modern, responsive dashboard application built with React and TypeScript.

## Features

- **Modern UI Design**: Clean and professional dashboard interface
- **TypeScript**: Full type safety and better development experience
- **Responsive Layout**: Works seamlessly on desktop and mobile devices
- **Reusable Components**: Well-structured, modular component architecture
- **Interactive Elements**: Charts, progress bars, and data tables
- **Professional Styling**: Modern CSS with hover effects and animations

## Project Structure

```
src/
├── components/
│   ├── Dashboard/
│   │   ├── Dashboard.tsx          # Main dashboard container
│   │   ├── Dashboard.css          # Dashboard styles
│   │   ├── KPICard.tsx           # Key Performance Indicator cards
│   │   ├── SalesTargetCard.tsx   # Sales target progress card
│   │   ├── SalesChart.tsx        # Sales chart component
│   │   ├── ProductTable.tsx      # Popular products table
│   │   ├── CustomerGrowthMap.tsx # Customer growth map
│   │   └── PromotionCard.tsx     # Promotional content card
│   ├── Header/
│   │   ├── Header.tsx            # Top navigation header
│   │   └── Header.css            # Header styles
│   └── Sidebar/
│       ├── Sidebar.tsx           # Left navigation sidebar
│       └── Sidebar.css           # Sidebar styles
├── types/
│   └── index.ts                  # TypeScript type definitions
├── App.tsx                       # Main application component
├── App.css                       # Global app styles
├── index.tsx                     # Application entry point
└── index.css                     # Global CSS reset and utilities
```

## Components Overview

### Dashboard Components

1. **KPICard**: Displays key metrics with trend indicators
2. **SalesTargetCard**: Shows sales progress with visual progress bar
3. **SalesChart**: Interactive line chart for sales data visualization
4. **ProductTable**: Table displaying popular products with status badges
5. **CustomerGrowthMap**: Geographic visualization of customer distribution
6. **PromotionCard**: Call-to-action promotional content

### Layout Components

1. **Header**: Top navigation with search and user profile
2. **Sidebar**: Left navigation with menu items and user info
3. **Dashboard**: Main content area with responsive grid layout

## TypeScript Types

The application uses comprehensive TypeScript interfaces for:

- `User`: User profile information
- `KPICard`: Key performance indicator data
- `SalesTarget`: Sales target and progress data
- `ChartDataPoint`: Chart data structure
- `Product`: Product information for tables
- `ProvinceData`: Geographic data for maps
- `NavigationItem`: Navigation menu structure

## Key Features

### Responsive Design
- Mobile-first approach
- Flexible grid layouts
- Adaptive component sizing

### Type Safety
- Full TypeScript implementation
- Comprehensive interface definitions
- Proper prop typing for all components

### Modern Styling
- CSS Grid and Flexbox layouts
- Smooth animations and transitions
- Professional color scheme
- Hover effects and interactive elements

### Component Architecture
- Functional components with hooks
- Props-based data flow
- Reusable and modular design
- Separation of concerns

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the development server:
   ```bash
   npm start
   ```

3. Build for production:
   ```bash
   npm run build
   ```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Development Notes

- All components are functional components using React hooks
- CSS follows BEM-like naming conventions
- TypeScript strict mode enabled for better type checking
- Responsive breakpoints at 768px and 1200px
- Modern CSS features (Grid, Flexbox, Custom Properties)

## Future Enhancements

- Dark mode support
- Real-time data integration
- Advanced chart interactions
- Export functionality
- User preferences persistence