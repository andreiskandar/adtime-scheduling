import React, { useState } from 'react';
import WeekCalendar from './WeekCalendar';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import { Dialog, DialogActions, DialogTitle, Button, TextField, Avatar } from '@material-ui/core';
//import MiniCalendar from './MiniCalendar/MiniCalendar'
import './WeekCalendar.scss';

export default () => {
  const [open, setOpen] = useState(false);
  const openCalendar = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className='week__navigator'>
      
      <Button size='small' className='smaleft__navigator'>
        <ChevronLeftIcon />
      </Button>
      
      <Button onClick={openCalendar}>
        <WeekCalendar />
        <Dialog open={open} onClose={handleClose} maxWidth='lg'>
          
        </Dialog>
      </Button>

      <Button size='small' className='right__navigator'>
        <ChevronRightIcon />
      </Button>
    </div>
  );
};
