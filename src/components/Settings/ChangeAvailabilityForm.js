import React from 'react';
import { DialogActions, DialogTitle, Button, TextField, Avatar } from '@material-ui/core';
import useStyles from './ChangeAvailabilityFormStyles';
import axios from 'axios';

const ChangeAvailibilityForm = (props) => {
  const { startTimeState, setStartTimeState, endTimeState, setEndTimeState } = props;
  const classes = useStyles();

  const updateStartTimeAvailability = (e, day) => {
    setStartTimeState({ ...startTimeState, [day]: e.target.value });
  };

  const updateEndTimeAvailability = (e, day) => {
    setEndTimeState({ ...endTimeState, [day]: e.target.value });
  };
  const { username, avatar, user_id } = JSON.parse(localStorage.user);

  const submitUserAvailability = (e) => {
    e.preventDefault();
    props.handleClose();
    axios
      .put(`/api/categories/updateAvailability/${user_id}`, { startTimeState, endTimeState })
      .then(() => {})
      .catch(() => console.log('axios.put update Availability error', e));
  };

  const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

  const formElement = days.map((day, idx) => {
    return (
      <div key={idx}>
        <div className={classes.day_header__form}>{day}</div>
        <div className={classes.availability_time__form}>
          <TextField
            className={classes.time__form}
            label='Start Time'
            placeholder='HH:MM'
            value={startTimeState.day}
            onChange={(e) => updateStartTimeAvailability(e, day)}
          />
          <TextField
            className={classes.time__form}
            label='End Time'
            placeholder='HH:MM'
            value={endTimeState.day}
            onChange={(e) => updateEndTimeAvailability(e, day)}
          />
        </div>
      </div>
    );
  });
  return (
    <div>
      <DialogTitle className={classes.title__dialog}>Change Availibility</DialogTitle>
      <div className={classes.profile__form}>
        <Avatar src={avatar} alt={username} />
        <p className={classes.name}>{username}</p>
      </div>
      <p className={classes.info}>Shift are available from 9:00AM to 21:00PM</p>
      <p className={classes.info}>Availability changes will affect the following 4 weeks</p>
      <div className={classes.availability__form}>{formElement}</div>
      <DialogActions>
        <Button onClick={props.handleClose} color='default' variant='contained'>
          Back
        </Button>
        <Button onClick={submitUserAvailability} color='primary' variant='contained'>
          Submit
        </Button>
      </DialogActions>
    </div>
  );
};

export default ChangeAvailibilityForm;
