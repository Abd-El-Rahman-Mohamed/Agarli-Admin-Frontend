import React from 'react';
import './Dashboard.css';

const PromotionCard: React.FC = () => {
  return (
    <div className="promotion-card">
      <div className="promotion-content">
        <h3 className="promotion-title">Increase your sales</h3>
        <p className="promotion-description">
          Discover the Proven Methods to Skyrocket Your Sales! Unleash the 
          Potential of Your Business and Achieve Remarkable Growth. Whether 
          you're a seasoned entrepreneur or just starting out.
        </p>
        <button className="promotion-button">Learn More</button>
      </div>
      <div className="promotion-visual">
        <div className="promotion-gradient"></div>
      </div>
    </div>
  );
};

export default PromotionCard;