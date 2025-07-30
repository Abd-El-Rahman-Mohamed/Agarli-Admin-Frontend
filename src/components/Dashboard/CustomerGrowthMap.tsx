import React from 'react';
import { ProvinceData } from '../../types';
import './Dashboard.css';

interface CustomerGrowthMapProps {
  data: ProvinceData[];
}

const CustomerGrowthMap: React.FC<CustomerGrowthMapProps> = ({ data }) => {
  return (
    <div className="customer-growth-card">
      <div className="growth-header-section">
        <div className="growth-header">
          <div className="growth-title">
            <h3>Customer Growth 3 Province</h3>
          </div>
          <button className="growth-cta">
            <span>Show All</span>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M7 17L17 7M17 7H7M17 7V17" stroke="#020617" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>

        <div className="growth-legend">
          <div className="legend-item">
            <div className="legend-dot" style={{ backgroundColor: '#BCF328' }}></div>
            <span>East Java (50%)</span>
          </div>
          <div className="legend-item">
            <div className="legend-dot" style={{ backgroundColor: '#1A71F6' }}></div>
            <span>Kalimantan (50%)</span>
          </div>
          <div className="legend-item">
            <div className="legend-dot" style={{ backgroundColor: '#184190' }}></div>
            <span>Bali (65%)</span>
          </div>
        </div>
      </div>

      <div className="map-container">
        <div className="map-image">
          {/* Map markers positioned absolutely */}
          <div className="map-marker east-java-marker">
            <div className="marker-outer" style={{ backgroundColor: '#F3FFC8' }}>
              <div className="marker-inner" style={{ backgroundColor: '#BCF328' }}></div>
            </div>
          </div>
          <div className="map-marker kalimantan-marker">
            <div className="marker-outer" style={{ backgroundColor: '#57B2FF' }}>
              <div className="marker-inner" style={{ backgroundColor: '#1649B7' }}></div>
            </div>
          </div>
          <div className="map-marker bali-marker">
            <div className="marker-outer" style={{ backgroundColor: '#D9EDFF' }}>
              <div className="marker-inner" style={{ backgroundColor: '#3090FF' }}></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerGrowthMap;