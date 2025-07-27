import React from 'react';
import { SalesTarget } from '../../types';
import './Dashboard.css';

interface SalesTargetCardProps {
  salesTarget: SalesTarget;
}

const SalesTargetCard: React.FC<SalesTargetCardProps> = ({ salesTarget }) => {
  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  };

  return (
    <div className="sales-target-card">
      <h3 className="sales-target-title">Sales Target</h3>

      <div className="sales-target-content">
        <div className="sales-progress-section">
          <div className="progress-label">In Progress</div>
          <div className="progress-value">{formatCurrency(salesTarget.current)}</div>
        </div>

        <div className="sales-target-section">
          <div className="target-label">Sales Target</div>
          <div className="target-value">{formatCurrency(salesTarget.target)}</div>
        </div>

      </div>

      <div className="progress-bar-container">
        <div className="progress-bar">
          <div
            className="progress-fill"
            style={{ width: `${(salesTarget.current / salesTarget.target) * 100}%` }}
          ></div>
          <div
            className="progress-handle"
            style={{ left: `${Math.min((salesTarget.current / salesTarget.target) * 100, 95)}%` }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default SalesTargetCard;