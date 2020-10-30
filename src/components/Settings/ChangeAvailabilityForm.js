import React from 'react';
import './ChangeAvailabilityForm.scss';
import { DialogActions, DialogTitle, Button, TextField, Avatar } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const ChangeAvailibilityForm = () => {
  const useStyles = makeStyles((theme) => ({
    small: {
      width: theme.spacing(3),
      height: theme.spacing(3),
    },
    profile__form: {
      display: 'flex',
      alignItems: 'center',
      margin: '8px',
    },
    name: {
      margin: '0 5px',
    },
    availability__form: {
      border: 'solid 2px #9e9e9e',
      borderRadius: '5px',
      margin: '8px',
      display: 'flex',
    },
    day_header__form: {
      borderBottom: 'solid 2px #9e9e9e',
      borderRight: 'solid 1px  #9e9e9e',
      display: 'flex',
      padding: '5px',
      justifyContent: 'center',
    },
    availability_time__form: {
      display: 'flex',
      flexDirection: 'column',
      borderRight: 'solid 1px  #9e9e9e',
      alignItems: 'center',
    },
    submit__form: {
      margin: '5px',
    },
    time__form: {
      width: '80%',
      marginBottom: '10px',
    },
  }));

  const classes = useStyles();

  const { username, avatar } = JSON.parse(localStorage.user);

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
