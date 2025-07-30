import React from 'react';
import './Dashboard.css';

const PromotionCard: React.FC = () => {
  return (
    <div className="promotion-card">
      {/* Decorative blur elements */}
      <div className="promotion-blur-1"></div>
      <div className="promotion-blur-2"></div>
      <div className="promotion-blur-3"></div>
      
      {/* Decorative vector elements */}
      <div className="promotion-vector-1"></div>
      <div className="promotion-vector-2"></div>
      <div className="promotion-vector-3"></div>
      
      {/* Content */}
      <div className="promotion-content">
        <h3 className="promotion-title">Increase your sales</h3>
        <p className="promotion-description">
          Discover the Proven Methods to Skyrocket Your Sales! Unleash the 
          Potential of Your Business and Achieve Remarkable Growth. Whether 
          you're a seasoned entrepreneur or just starting out.
        </p>
        <button className="promotion-button">
          <span className="promotion-button-text">Learn More</span>
        </button>
      </div>
    </div>
  );
};

export default PromotionCard;