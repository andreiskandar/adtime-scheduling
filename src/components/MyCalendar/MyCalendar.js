import React, { useState } from 'react';
import { Dialog, DialogActions, DialogTitle, Button, Avatar } from '@material-ui/core';
import './styles.scss';
import './calendarGrid.scss';
import CalendarGrid from './CalendarGrid';
import WeekNav from '../WeekNav/index';
import useStyles from './MyCalendarStyles';
import { default as slotMapHelper } from 'helpers/slotMapHelper';
import { employeeMoreInfoHelper } from 'helpers/helper';
import { HOURS_STRING_DICT as hours, DAYS_DICT as days } from 'helpers/dictionary';

const MyCalendar = (props) => {
  const { shift } = props;
  const classes = useStyles();

  const date_from_calendar = [
    new Date(props.mon - 86400000).toISOString().split('T')[0],
    new Date(props.tues - 86400000).toISOString().split('T')[0],
    new Date(props.wed - 86400000).toISOString().split('T')[0],
    new Date(props.thurs - 86400000).toISOString().split('T')[0],
    new Date(props.fri - 86400000).toISOString().split('T')[0],
    new Date(props.sat - 86400000).toISOString().split('T')[0],
    new Date(props.sun - 86400000).toISOString().split('T')[0],
  ];

  const { username, avatar, user_id } = JSON.parse(localStorage.user);
  const [open, setOpen] = useState(false);

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

  const groupCategorySlotMap = shift && user_id ? slotMapHelper(shift, user_id) : {};

  const totalEvents = employeeMoreInfoHelper(groupCategorySlotMap).num_event;
  const totalHours = employeeMoreInfoHelper(groupCategorySlotMap).num_hours;

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

  const renderMyCalendarGrid = date_from_calendar.map((date, idx) => {
    return (
      <div key={idx} className='calendar_grid__myCalendar'>
        <div className='day_header__myCalendar'>{days[idx]}</div>
        <div className='wrapper_grid__myCalendar'>
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
            className={classes.calendarGrid__myCalendar}
          />
        </div>
      </div>
    );
  });

  return (
    <>
      <p onClick={openMyCalendar} onClose={handleClose} className='myCalendar__secondary_navbar'>
        My Calendar
      </p>
      <Dialog classes={{ paper: classes.dialog }} open={open} onClose={handleClose} maxWidth='lg'>
        <DialogTitle className={classes.title__dialog}>My Calendar</DialogTitle>
        <div className={classes.flex}>
          <Avatar alt={username} src={avatar} className={classes.small} />
          <p className={classes.name}>{username}</p>
          <div className={classes.moreInfo}>
            <p>Total Weekly Hours = {totalHours}</p>
            <p>Work Days This Week  = {totalEvents}</p>
          </div>
        </div>
        <div className={classes.weeknav__myCalendar}>
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
        </div>
        <div className={classes.wrapper__myCalendar}>
          <div className='hours__header__myCalendar'>
            <div className='row_header'>
              <p>Days of Week</p>
            </div>
            <div className='hour_header'>{hourElement}</div>
          </div>
          {renderMyCalendarGrid}
        </div>
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
