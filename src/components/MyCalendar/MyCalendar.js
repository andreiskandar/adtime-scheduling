import React, { useState } from 'react';
import { Dialog, DialogActions, DialogTitle, Button, TextField, Avatar } from '@material-ui/core';
import './styles.scss';
import useStyles from './MyCalendarStyles';
import CalendarGrid from './CalendarGrid';

const MyCalendar = (props) => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };
  const openMyCalendar = () => {
    setOpen(true);
  };
  

  return (
    <>
      <a onClick={openMyCalendar} onClose={handleClose} className='myCalendar__secondary_navbar' >
        My Calendar
      </a>
      <Dialog open={open} onClose={handleClose} maxWidth='lg'>
        <CalendarGrid/>
      </Dialog>
    </>
  );
};

export default MyCalendar;
