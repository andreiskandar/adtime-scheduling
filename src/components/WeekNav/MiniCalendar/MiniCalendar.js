import React from 'react';
import './MiniCalendar.css';
import './index.css';
import { Calendar } from 'antd';
import DialogActions from '@material-ui/core/DialogActions';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';

const MiniCalendar = () => {
  
  function onPanelChange(value, mode) {
    console.log(value, mode);
  }
  
  const handleChange = (e) => {
    console.log(e.currentTarget)
  }

  return (
    <div className="site-calendar-demo-card">
      <Calendar onSelect = {handleChange} fullscreen={false} onPanelChange={onPanelChange} />
    </div>
  );
};

export default MiniCalendar;

