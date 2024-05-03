import React from 'react';
import './ChartBar.css';
const ChartBar = ({ label, currentValue, totalValue }) => {
  let barFillHeigh = '0%';

  if (totalValue > 0) {
    const percentage = (currentValue / totalValue) * 100;
    barFillHeigh = percentage + '%';
  }

  return (
    <div className="chart-bar">
      <div className="chart-bar__inner">
        <div className="chart-bar__fill" style={{ height: barFillHeigh }}></div>
      </div>
      <div className="chart-bar__label">{label}</div>
    </div>
  );
};

export default ChartBar;
