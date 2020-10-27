import React, { useState } from 'react';
import TodayIcon from '@material-ui/icons/Today';
import './WeekCalendar.scss';
import { Dialog, DialogActions, DialogTitle, Button, TextField, Avatar } from '@material-ui/core';
//import MiniCalendar from './MiniCalendar/MiniCalendar'


const WeekCalendar = () => {
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className='weekCalendar'>
      <TodayIcon className='weekCalendar__icon' />
    </div>
  );
};

export default WeekCalendar;
