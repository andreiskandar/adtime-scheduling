import React, { useState } from 'react';
import { DialogActions, DialogTitle, Button, TextField, Avatar } from '@material-ui/core';
import useStyles from './ChangeAvailabilityFormStyles';

const ChangeAvailibilityForm = () => {
  const classes = useStyles();
  const [startTimeState, setStartTimeState] = useState({
    mon: 0,
    tue: 0,
    wed: 0,
    thu: 0,
    fri: 0,
    sat: 0,
    sun: 0,
  });

  const [endTimeState, setEndTimeState] = useState({
    mon: 0,
    tue: 0,
    wed: 0,
    thu: 0,
    fri: 0,
    sat: 0,
    sun: 0,
  });

  const { username, avatar, user_id } = JSON.parse(localStorage.user);

  const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

  const formElement = days.map((day, idx) => {
    return (
      <div key={idx}>
        <div className={classes.day_header__form}>{day}</div>
        <div className={classes.availability_time__form}>
          <TextField className={classes.time__form} label='Start Time' placeholder='HH:MM' />
          <TextField className={classes.time__form} label='End Time' placeholder='HH:MM' />
        </div>
      </div>
    );
  });
  return (
    <div>
      <DialogTitle>Change Availibility</DialogTitle>
      <div className={classes.profile__form}>
        <Avatar src={avatar} alt={username} />
        <p className={classes.name}>{username}</p>
      </div>
      <div className={classes.availability__form}>{formElement}</div>
      <DialogActions>
        <Button onClick={true} color='primary' variant='contained'>
          Submit
        </Button>
      </DialogActions>
    </div>
  );
};

export default ChangeAvailibilityForm;
