import React from 'react';
import './MiniCalendar.css';
import './index.css';
import { Calendar } from 'antd';

const MiniCalendar = () => {
  
  function onPanelChange(value, mode) {
    console.log(value, mode);
  }
  
  return (
    <div className="site-calendar-demo-card">
      <Calendar fullscreen={false} onPanelChange={onPanelChange} />
    </div>
  );
};

export default MiniCalendar;