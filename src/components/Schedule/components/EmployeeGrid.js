import React, { useEffect, useState } from 'react';
import './employeeGrid.scss';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import HOURS_DICT from '../../../helpers/dictionary';
import TransferShiftMenuButton from './TransferShiftMenuButton';
import useStyles from './styles/formStyles';
import Avatar from '@material-ui/core/Avatar';
import useVisualMode from '../../../hooks/useVisualMode';
import addShift from 'helpers/addShift';
import cancelShift from 'helpers/cancelShift';
import axios from 'axios';

const EmployeeGrid = (props) => {
  const classes = useStyles();
  const { shift_id, users, date } = props;
  const event_date = date.split('T')[0];
  const [startTime, setStartTime] = useState(0);
  const [endTime, setEndTime] = useState('');
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState('');
  const [error, setError] = useState('');

  const handleClickOpen = (e) => {
    setOpen(true);
    const start_time = HOURS_DICT[parseInt(e.target.attributes[0].value) + 1];
    setStartTime(start_time);
  };

  const cancel = () => {
    setError('');
    setSelected('');
    setOpen(false);
  };

  const validate = () => {
    if (!endTime) {
      setError('End time cannot be blank');
      return;
    }
    if (endTime > '20:59') {
      setError('End time can not be after 21:00');
      return;
    }

    submit(date);
  };

  const submit = (event_date) => {
    const date = event_date.split('T')[0];
    const user_id = props.id;
    const start_time = startTime;
    const end_time = endTime;

    axios.post('/api/events/add', addShift(user_id, start_time, end_time, date))
      .catch((e) => {
        console.log("ShiftADD ERROR in AXIOS", e);
      });
    
    setError('');
    setSelected('');
    setSelected('');
    setOpen(false);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleDelete = () => {
    const user_id = props.id;
    const start_time = startTime;
    const end_time = endTime;
    cancelShift(event_date);
  };

  const renderSpan = Array.from({ length: 12 }, (x, i) => {
    const background = shift_id && shift_id.includes(i + 1) ? props.color : '#eeeeee';
    return <span key={i} data-id={i} onClick={handleClickOpen} style={{ backgroundColor: `${background}` }} />;
  });

  const transferShiftSelected = (
    <>
      <img src='images/swap.png' alt='swap' className={classes.swap_img__menu}></img>
      <div className={classes.flex}>
        <Avatar alt={selected.name} src={selected.avatar} />
        <p className={classes.name}>{selected.name}</p>
      </div>
    </>
  );

  return (
    <>
      <div className='employee_grid'>{renderSpan}</div>
      <Dialog open={open} onClose={handleClose} maxWidth='lg'>
        <DialogTitle>Add / Transfer Shift</DialogTitle>
        <div className={classes.flex}>
          <div className={classes.flex}>
            <Avatar alt={props.name} src={props.avatar} />
            <p className={classes.name}>{props.name}</p>
          </div>
          {selected && transferShiftSelected}
        </div>
        <section className={classes.error}>{error}</section>
        <section>{date}</section>
        <form>
          <div className={classes.root}>
            <TextField autoFocus margin='dense' id='start_time' label='Start Time' value={startTime} type='time' />
            <TextField
              autoFocus
              margin='dense'
              id='end_time'
              label='End Time'
              value={endTime}
              onChange={(e) => setEndTime(e.target.value)}
              type='text'
              placeholder={parseInt(startTime) + 1 + ':00'}
            />
          </div>
        </form>
        <DialogActions>
          <TransferShiftMenuButton users={users} setSelected={setSelected} />
          <Button onClick={cancel} variant='contained'>
            Back
          </Button>
          <Button onClick={handleDelete} color='secondary' variant='contained'>
            Delete
          </Button>
          <Button onClick={validate} color='primary' variant='contained'>
            Submit
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default EmployeeGrid;
