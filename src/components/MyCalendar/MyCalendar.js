import React, { useState } from 'react';
import { Dialog, DialogActions, DialogTitle, Button, TextField, Avatar } from '@material-ui/core';
import './styles.scss';
import './calendarGrid.scss';
import CalendarGrid from './CalendarGrid';
import WeekNav from '../WeekNav/index';
import useStyles from './MyCalendarStyles';

const MyCalendar = (props) => {
  const classes = useStyles();

  const date_from_calendar = [
    new Date(props.mon).toISOString().split('T')[0],
    new Date(props.tues).toISOString().split('T')[0],
    new Date(props.wed).toISOString().split('T')[0],
    new Date(props.thurs).toISOString().split('T')[0],
    new Date(props.fri).toISOString().split('T')[0],
    new Date(props.sat).toISOString().split('T')[0],
    new Date(props.sun).toISOString().split('T')[0],
  ];
  const hours = ['09a', '10a', '11a', '12p', '01p', '02p', '03p', '04p', '05p', '06p', '07p', '08p'];
  const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  const { username, avatar } = JSON.parse(localStorage.user);
  const [open, setOpen] = useState(false);
  // const useStyles = makeStyles((theme) => ({
  //   dialog: {
  //     position: 'absolute',
  //     left: 200,
  //     top: 100,
  //   },
  // }));

  const handleClose = () => {
    setOpen(false);
  };
  const openMyCalendar = () => {
    setOpen(true);
  };

  const hourElement = hours.map((hour, idx) => {
    return (
      <div key={idx} className='hour'>
        {hour}
      </div>
    );
  });

  const slotMap = props.shift.reduce((acc, cur) => {
    const currentDate = cur.event_date.split('T')[0];
    if (cur.name && cur.name === username) {
      if (!acc[currentDate]) {
        acc[currentDate] = [];
        acc[currentDate].push(cur.shift_id);
      } else {
        acc[currentDate].push(cur.shift_id);
      }
      return acc;
    } else {
      return acc;
    }
  }, {});

  let totalHours = 0,
    totalEvents = 0;
  for (const item in slotMap) {
    totalEvents++;
    totalHours += slotMap[item].length;
  }

  const renderMyCalendarGrid = date_from_calendar.map((date, idx) => {
    return (
      <div className='calendar_grid'>
        {days[idx]}
        <CalendarGrid
          key={Date.now() + idx}
          date={date}
          username={username}
          users={props.users}
          setUsers={props.setUsers}
          mon={props.mon}
          sun={props.sun}
          shift={props.shift}
          shift_id={slotMap[date]}
        />
      </div>
    );
  });

  return (
    <>
      <a onClick={openMyCalendar} onClose={handleClose} className='myCalendar__secondary_navbar'>
        My Calendar
      </a>
      <Dialog classes={{ paper: classes.dialog }} open={open} onClose={handleClose} maxWidth='lg'>
        <DialogTitle className={classes.title__dialog}>My Calendar</DialogTitle>
        <div className={classes.flex}>
          <Avatar alt={username} src={avatar} className={classes.small} />
          <p className={classes.name}>{username}</p>
          <div className={classes.moreInfo}>
            <p>Total Weekly Hours = {totalHours}</p>
            <p>Total Weekly Events = {totalEvents}</p>
          </div>
        </div>
        <WeekNav
          clickLeftCalendar={props.clickLeftCalendar}
          clickRightCalendar={props.clickRightCalendar}
          mon={props.mon}
          tues={props.tues}
          wed={props.wed}
          thurs={props.thurs}
          fri={props.fri}
          sat={props.sat}
          sun={props.sun}
          setMon={props.setMon}
          setTues={props.setTues}
          setWed={props.setWed}
          setThurs={props.setThurs}
          setFri={props.setFri}
          setSat={props.setSat}
          setSun={props.setSun}
          shift={props.shift}
          setShift={props.setShift}
          search={props.term}
        />
        <div className='employee_name'></div>
        <div className='hours__header'>
          <div className='row__header'>Day of Week</div>
          {hourElement}
        </div>
        <div className='days__header'>{renderMyCalendarGrid}</div>
        <DialogActions>
          <Button onClick={handleClose} color='primary' variant='contained'>
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default MyCalendar;
