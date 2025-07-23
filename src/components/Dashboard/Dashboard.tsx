import React from 'react';
import { KPICard as KPICardType, SalesTarget, ChartDataPoint, Product, ProvinceData } from '../../types';
import KPICard from './KPICard';
import SalesTargetCard from './SalesTargetCard';
import SalesChart from './SalesChart';
import ProductTable from './ProductTable';
import CustomerGrowthMap from './CustomerGrowthMap';
import PromotionCard from './PromotionCard';
import './Dashboard.css';

interface DashboardProps {
  kpiCards: KPICardType[];
  salesTarget: SalesTarget;
  chartData: ChartDataPoint[];
  popularProducts: Product[];
  provinceData: ProvinceData[];
}

const Dashboard: React.FC<DashboardProps> = ({
  kpiCards,
  salesTarget,
  chartData,
  popularProducts,
  provinceData
}) => {
  return (
    <div className="dashboard">
      <div className="dashboard-header">
        <h1 className="dashboard-title">Dashboard</h1>
        <p className="dashboard-subtitle">Dashboard</p>
      </div>

      <div className="dashboard-content">
        {/* Top Row: Sales Target and KPI Cards */}
        <div className="dashboard-top-row">
          <div className="sales-target-container">
            <SalesTargetCard salesTarget={salesTarget} />
          </div>
          <div className="kpi-cards-container">
            {kpiCards.map(card => (
              <KPICard key={card.id} card={card} />
            ))}
          </div>
        </div>

        {/* Middle Row: Sales Chart and Promotion Card */}
        <div className="dashboard-middle-row">
          <div className="chart-container">
            <SalesChart data={chartData} />
          </div>
          <div className="promotion-container">
            <PromotionCard />
          </div>
        </div>

        {/* Bottom Row: Customer Growth Map and Product Table */}
        <div className="dashboard-bottom-row">
          <div className="customer-growth-container">
            <CustomerGrowthMap data={provinceData} />
          </div>
          <div className="product-table-container">
            <ProductTable products={popularProducts} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;