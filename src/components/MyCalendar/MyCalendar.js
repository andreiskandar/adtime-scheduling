import React, { useState } from 'react';
import { makeStyles, Dialog, DialogActions, DialogTitle, Button, TextField, Avatar } from '@material-ui/core';
import './styles.scss';
import useStyles from './MyCalendarStyles';
import CalendarGrid from './CalendarGrid';
import Container from '@material-ui/core/Container'

const MyCalendar = (props) => {
  const useStyles = makeStyles({
    dialog: {
      position:'absolute',
      left: 200, 
      top:100
    }
  })
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
      <Dialog 
      classes={{paper: classes.dialog}}
      open={open} 
      onClose={handleClose} 
      maxWidth='lg'
      
      >
        <CalendarGrid/>
      </Dialog>
    </>
  );
};

export default MyCalendar;
