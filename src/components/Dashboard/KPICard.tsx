import React from 'react';
import { KPICard as KPICardType } from '../../types';
import './Dashboard.css';

interface KPICardProps {
  card: KPICardType;
}

const KPICard: React.FC<KPICardProps> = ({ card }) => {
  return (
    <div className={`kpi-card ${card.color ? `kpi-card-${card.color}` : ''}`}>
      <div className="kpi-header">
        <h3 className="kpi-title">{card.title}</h3>
        {card.change && (
          <div className="kpi-trend">
            <span className={`trend-icon ${card.change.isPositive ? 'trend-up' : 'trend-down'}`}>
              {card.change.isPositive ? '↗' : '↘'}
            </span>
          </div>
        )}
      </div>
      
      <div className="kpi-value">{card.value}</div>
      
      {card.change && (
        <div className="kpi-change">
          <span className={`change-percentage ${card.change.isPositive ? 'change-positive' : 'change-negative'}`}>
            {card.change.isPositive ? '+' : ''}{card.change.percentage}%
          </span>
          <span className="change-period">{card.change.period}</span>
        </div>
      )}
    </div>
  );
};

export default KPICard;