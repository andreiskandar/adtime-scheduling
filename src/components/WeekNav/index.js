import React, { useState } from 'react';
import './WeekCalendar.scss';
import WeekCalendar from './WeekCalendar';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import { Dialog, Button } from '@material-ui/core';
import MiniCalendar from './MiniCalendar/MiniCalendar';
import useStyles from './styles';

export default (props) => {
  const classes = useStyles();

  const [open, setOpen] = useState(false);
  const openCalendar = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className='week__navigator'>
      <Button onClick={props.clickLeftCalendar} size='small' className={classes.navigation_arrow__btn}>
        <ChevronLeftIcon />
      </Button>

      <Button onClick={openCalendar} className={classes.weekCalendar}>
        <WeekCalendar mon={props.mon} sun={props.sun} />
      </Button>
      <Dialog open={open} onClose={handleClose} maxWidth='lg'>
        <MiniCalendar
          mon={props.mon}
          sun={props.sun}
          setMon={props.setMon}
          setTues={props.setTues}
          setWed={props.setWed}
          setThurs={props.setThurs}
          setFri={props.setFri}
          setSat={props.setSat}
          setSun={props.setSun}
          handleClose={handleClose}
          setShift={props.setShift}
        />
      </Dialog>

      <Button onClick={props.clickRightCalendar} size='small' className={classes.navigation_arrow__btn}>
        <ChevronRightIcon />
      </Button>
    </div>
  );
};
