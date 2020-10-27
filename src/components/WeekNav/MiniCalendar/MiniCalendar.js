import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import './MiniCalendar.scss';
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

  
