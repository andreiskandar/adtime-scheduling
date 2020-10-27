import React from 'react';
import './MiniCalendar.scss';
import { Calendar } from 'antd';
//import 'antd/dist/antd.css';


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

  
