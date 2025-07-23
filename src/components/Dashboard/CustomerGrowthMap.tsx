import React from 'react';
import { ProvinceData } from '../../types';
import './Dashboard.css';

interface CustomerGrowthMapProps {
  data: ProvinceData[];
}

const CustomerGrowthMap: React.FC<CustomerGrowthMapProps> = ({ data }) => {
  return (
    <div className="customer-growth-card">
      <div className="growth-header">
        <h3 className="growth-title">Customer Growth</h3>
        <button className="show-all-btn">Show All ↗</button>
      </div>
      <div className="growth-subtitle">3 Province</div>

      <div className="growth-legend">
        {data.map((province, index) => (
          <div key={index} className="legend-item">
            <div 
              className="legend-dot"
              style={{ backgroundColor: province.color }}
            ></div>
            <span className="legend-text">
              {province.name} ({province.percentage}%)
            </span>
          </div>
        ))}
      </div>

      <div className="map-container">
        {/* Simplified Indonesia map representation */}
        <svg className="indonesia-map" viewBox="0 0 400 200">
          {/* Simplified map shapes */}
          <g className="map-regions">
            {/* East Java */}
            <path
              d="M200 120 L280 115 L285 135 L275 145 L195 140 Z"
              fill="#22c55e"
              className="region east-java"
            />
            <text x="240" y="132" className="region-label" fontSize="10" fill="white">
              East Java
            </text>
            
            {/* Kalimantan */}
            <path
              d="M150 80 L220 75 L225 110 L145 115 Z"
              fill="#3b82f6"
              className="region kalimantan"
            />
            <text x="180" y="95" className="region-label" fontSize="10" fill="white">
              Kalimantan
            </text>
            
            {/* Bali */}
            <path
              d="M290 140 L310 138 L312 155 L288 157 Z"
              fill="#1e40af"
              className="region bali"
            />
            <text x="300" y="150" className="region-label" fontSize="8" fill="white">
              Bali
            </text>
            
            {/* Other regions in lighter colors */}
            <path
              d="M100 100 L140 95 L145 130 L95 135 Z"
              fill="#e5e7eb"
              className="region other"
            />
            <path
              d="M320 100 L360 95 L365 140 L315 145 Z"
              fill="#e5e7eb"
              className="region other"
            />
          </g>
          
          {/* Location markers */}
          <circle cx="240" cy="130" r="3" fill="#fbbf24" className="location-marker" />
          <circle cx="180" cy="92" r="3" fill="#fbbf24" className="location-marker" />
          <circle cx="300" cy="148" r="3" fill="#fbbf24" className="location-marker" />
        </svg>
        
        <div className="map-labels">
          <div className="map-label java">
            <div className="label-dot" style={{ backgroundColor: '#22c55e' }}></div>
            <span>JAVA</span>
          </div>
          <div className="map-label kalimantan">
            <div className="label-dot" style={{ backgroundColor: '#3b82f6' }}></div>
            <span>KALIMANTAN</span>
          </div>
          <div className="map-label other-location">
            <div className="label-dot" style={{ backgroundColor: '#1e40af' }}></div>
            <span>Other Location</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerGrowthMap;