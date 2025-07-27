import React from 'react';
import { ChartDataPoint } from '../../types';
import './Dashboard.css';

interface SalesChartProps {
  data: ChartDataPoint[];
}

const SalesChart: React.FC<SalesChartProps> = ({ data }) => {
  const maxValue = Math.max(...data.map(d => Math.max(d.averageSales, d.targetSales)));
  
  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  };

  return (
    <div className="sales-chart-card">
      <div className="chart-header">
        <h3 className="chart-title">Your Sales this year</h3>
        <button className="show-all-btn">Show All ↗</button>
      </div>

      <div className="chart-legend">
        <div className="legend-item">
          <div className="legend-dot legend-average"></div>
          <span>Average Sales Value</span>
        </div>
        <div className="legend-item">
          <div className="legend-dot legend-target"></div>
          <span>Average Target Forecast</span>
        </div>
      </div>

      <div className="chart-values">
        <div className="chart-value-item">
          <div className="value-label">Average item persale</div>
          <div className="value-amount">{formatCurrency(211411223)}</div>
        </div>
        <div className="chart-value-item highlight">
          <div className="value-label">Average year on year</div>
          <div className="value-amount">{formatCurrency(339091888)}</div>
        </div>
      </div>

      <div className="chart-container">
        <svg className="chart-svg" viewBox="0 0 600 200">
          {/* Grid lines */}
          {[0, 1, 2, 3, 4].map(i => (
            <line
              key={i}
              x1="50"
              y1={40 + i * 30}
              x2="550"
              y2={40 + i * 30}
              stroke="#f0f0f0"
              strokeWidth="1"
            />
          ))}
          
          {/* Chart lines */}
          <polyline
            fill="none"
            stroke="#4ade80"
            strokeWidth="3"
            points={data.map((d, i) => 
              `${50 + (i * 45)},${180 - (d.averageSales / maxValue) * 120}`
            ).join(' ')}
          />
          <polyline
            fill="none"
            stroke="#60a5fa"
            strokeWidth="3"
            strokeDasharray="5,5"
            points={data.map((d, i) => 
              `${50 + (i * 45)},${180 - (d.targetSales / maxValue) * 120}`
            ).join(' ')}
          />
          
          {/* Data points */}
          {data.map((d, i) => (
            <g key={i}>
              <circle
                cx={50 + (i * 45)}
                cy={180 - (d.averageSales / maxValue) * 120}
                r="4"
                fill="#4ade80"
              />
              <circle
                cx={50 + (i * 45)}
                cy={180 - (d.targetSales / maxValue) * 120}
                r="4"
                fill="#60a5fa"
              />
            </g>
          ))}
        </svg>
        
        <div className="chart-x-axis">
          {data.map((d, i) => (
            <div key={i} className="x-axis-label">{d.month}</div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SalesChart;