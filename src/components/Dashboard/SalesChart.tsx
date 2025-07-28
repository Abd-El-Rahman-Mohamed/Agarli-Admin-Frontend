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
        <div className="chart-header-content">
          <div className="chart-title-container">
            <h3 className="chart-title">Your Sales this year</h3>
          </div>
          <div className="chart-legend">
            <div className="legend-item">
              <div className="legend-dot legend-average"></div>
              <span>Average Sale Value</span>
            </div>
            <div className="legend-item">
              <div className="legend-dot legend-target"></div>
              <span>Average item persale</span>
            </div>
          </div>
        </div>
        <button className="show-all-btn">
          <span>Show All</span>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M7 17L17 7M17 7H7M17 7V17" stroke="#020617" strokeWidth="1"/>
          </svg>
        </button>
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
        {/* Vertical indicator line */}
        <div className="vertical-line-container">
          <svg width="3" height="187" viewBox="0 0 3 187" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="0.5" y="0.5" width="2" height="228" rx="0.5" fill="url(#paint0_linear_122054_8527)" stroke="url(#paint1_linear_122054_8527)"/>
            <defs>
              <linearGradient id="paint0_linear_122054_8527" x1="1.5" y1="0" x2="1.5" y2="229" gradientUnits="userSpaceOnUse">
                <stop stopColor="#3652AD" stopOpacity="0.74"/>
                <stop offset="1" stopColor="#3BD0FF" stopOpacity="0.35"/>
              </linearGradient>
              <linearGradient id="paint1_linear_122054_8527" x1="1.5" y1="0" x2="1.5" y2="229" gradientUnits="userSpaceOnUse">
                <stop stopColor="#3652AD" stopOpacity="0.74"/>
                <stop offset="1" stopColor="#3BD0FF" stopOpacity="0.35"/>
              </linearGradient>
            </defs>
          </svg>
        </div>
        
        <svg className="chart-svg" viewBox="0 0 540 200">
          <defs>
            <linearGradient id="gradient-line" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#94B9FF" />
              <stop offset="100%" stopColor="#CEFDD9" />
            </linearGradient>
            <linearGradient id="vertical-gradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="rgba(54, 82, 173, 0.74)" />
              <stop offset="100%" stopColor="rgba(59, 208, 255, 0.35)" />
            </linearGradient>
          </defs>
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
          
          {/* Chart lines - exact SVG paths from design */}
          <path
            fill="none"
            stroke="url(#gradient-line)"
            strokeWidth="4"
            strokeLinecap="round"
            strokeDasharray="7 7"
            d="M2 103C26.1847 93.4082 37.1509 93.9325 46.1155 97.1253C54.5756 100.139 63.7921 99.3379 70.6241 93.5088L96.1691 71.7136C105.821 63.4785 120.425 65.121 128.006 75.2942V75.2942C133.859 83.1484 144.209 86.1719 153.37 82.7036L173.412 75.1157C177.081 73.7265 181.035 73.258 184.928 73.7514L201.652 75.8715C207.692 76.637 213.796 75.079 218.73 71.5129L235.472 59.4117C238.129 57.491 241.152 56.1351 244.353 55.4278L266.913 50.4436C275.858 48.4674 284.896 53.3661 288.122 61.9398V61.9398C293.254 75.5744 312.416 80.1909 324.278 71.7342C340.688 60.0354 360.055 47.8344 365 47C371.52 45.9001 390.923 48.5969 405.752 51.9062C415.417 54.063 426.165 51.9395 433.247 45.0175L463.193 15.7442C465.052 13.9268 467.194 12.4236 469.535 11.2933L481.974 5.28842C489.987 1.42024 499.482 2.30234 506.645 7.58032L510.464 10.3945C512.802 12.1172 515.433 13.4013 518.23 14.1843L539 20"
          />
          <path
            fill="none"
            stroke="#BCF328"
            strokeWidth="4"
            strokeLinecap="round"
            d="M2 86.5C34.3943 74.1206 53.7847 98.1766 68.2662 108.983C72.3656 112.043 77.6668 112.294 82.6116 110.985L122.077 100.538C124.674 99.851 127.137 98.7326 129.363 97.2298L163.002 74.5239C164.989 73.1822 167.167 72.146 169.462 71.4498L207.093 60.0336C209.352 59.3483 211.7 59 214.06 59H230.837C236.13 59 241.275 60.7498 245.47 63.977L265 79L290.196 96.1788C304.361 105.837 323.793 97.9562 327.229 81.1589L327.674 78.9836C328.542 74.7404 330.498 70.6943 334.176 68.4075C349.082 59.1407 381.89 51.8997 390.5 50.5C394.91 49.7831 408.471 52.4188 421.084 53.8377C437.005 55.6287 460.054 41.0381 475.58 37.0834L488.453 33.8045C494.272 32.3222 499.324 28.7124 502.612 23.6874L507.496 16.2221C510.148 12.1691 513.964 9.01324 518.443 7.16942L531 2"
          />
          
          {/* Vertical indicator line */}
          <line
            x1="365"
            y1="40"
            x2="365"
            y2="180"
            stroke="url(#vertical-gradient)"
            strokeWidth="3"
            strokeLinecap="round"
          />

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