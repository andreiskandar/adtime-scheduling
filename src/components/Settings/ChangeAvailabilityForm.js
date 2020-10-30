import React from 'react';
import './ChangeAvailabilityForm.scss';
import { DialogActions, DialogTitle, Button, TextField, Avatar, Dialog } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const ChangeAvailibilityForm = () => {
  const useStyles = makeStyles((theme) => ({
    small: {
      width: theme.spacing(3),
      height: theme.spacing(3),
    },
    flex: {
      display: 'flex',
      alignItems: 'center',
      margin: '5px',
    },
    name: {
      margin: '0 5px',
    },
  }));

  const classes = useStyles();

  const { username, avatar } = JSON.parse(localStorage.user);

  return (
    <div>
      <DialogTitle>Change Availibility</DialogTitle>
      <div className={classes.flex}>
        <Avatar src={avatar} alt={username} />
        <p className={classes.name}>{username}</p>
      </div>
      <TextField autoFocus margin='dense' id='start_time' label='Start Time' value={() => true} type='time' />
      <TextField
        autoFocus
        margin='dense'
        id='end_time'
        label='End Time'
        value={'end -time'}
        onChange={(e) => true}
        type='text'
        placeholder={'end time'}
      />
    </div>
  );
};

export default ChangeAvailibilityForm;
