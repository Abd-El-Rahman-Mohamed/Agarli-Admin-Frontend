import React from 'react';
import { KPICard as KPICardType } from '../../types';
import './Dashboard.css';
import ArrowUpRightIcon from '../../assets/arrow-up-right.svg';
import StatisticUpIcon from '../../assets/statistic-up.svg';
import StatisticDownIcon from '../../assets/statistic-down.svg';

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
            <img 
              src={ArrowUpRightIcon} 
              alt="Arrow up right" 
              className="trend-icon arrow-up-right"
            />
          </div>
        )}
      </div>
      
      {card.change && (
        <div className="kpi-change">
          <div className="kpi-value">{card.value}</div>
          <div className="change-stats">
            <div className="change-row">
              <img 
                src={card.change.isPositive ? StatisticUpIcon : StatisticDownIcon} 
                alt={card.change.isPositive ? "Statistic up" : "Statistic down"} 
                className={`trend-icon ${card.change.isPositive ? 'statistic-up' : 'statistic-down'}`}
              />
              <span className={`change-percentage ${card.change.isPositive ? 'change-positive' : 'change-negative'}`}>
                {card.change.percentage}%
              </span>
            </div>
            <span className="change-period">{card.change.period}</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default KPICard;