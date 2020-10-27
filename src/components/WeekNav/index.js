import React, { useState } from 'react';
import './WeekCalendar.scss';
import WeekCalendar from './WeekCalendar';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import { Dialog, DialogActions, DialogTitle, Button, TextField, Avatar } from '@material-ui/core';
import MiniCalendar from './MiniCalendar/MiniCalendar'


export default (props) => {
  const [open, setOpen] = useState(false);
  const openCalendar = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className='week__navigator'>
      
      <Button onClick={props.clickLeftCalendar} size='small' className='smaleft__navigator'>
        <ChevronLeftIcon />
      </Button>
      
      <Button onClick={openCalendar}>
        <WeekCalendar />
        <Dialog open={open} onClose={handleClose} maxWidth='lg'>
         <MiniCalendar></MiniCalendar>
        </Dialog>
      </Button>

      <Button onClick={props.clickRightCalendar} size='small' className='right__navigator'>
        <ChevronRightIcon />
      </Button>
    </div>
  );
};
