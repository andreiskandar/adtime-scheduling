import React, { useState } from 'react';
import './employeeGrid.scss';
import { Dialog, DialogActions, DialogTitle, Button, TextField, Avatar } from '@material-ui/core';
import { HOURS_DICT } from '../../../helpers/dictionary';
import TransferShiftMenuButton from './TransferShiftMenuButton';
import CategoryButton from './CategoryButton';
import useStyles from './styles/formStyles';
import useVisualMode from '../../../hooks/useVisualMode';
import { ERROR_MESSAGES_DICT } from '../../../helpers/dictionary';

const EmployeeGrid = (props) => {
  const classes = useStyles();
  const { shift_id, users, date, categories } = props;
  const event_date = date.split('T')[0];
  const [startTime, setStartTime] = useState(0);
  const [endTime, setEndTime] = useState('');
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState('');
  const [error, setError] = useState('');
  const [categorySelected, setCategorySelected] = useState({});

  const clickGrid = (e) => {
    // getting grid_id from user selection
    const grid_id = parseInt(e.target.attributes[0].value);

    // open modal
    setOpen(true);

    // convert grid_id to hours for database query
    const start_time = HOURS_DICT[grid_id + 1];

    setStartTime(start_time);

    // time validation when user selects time that has been booked
    if (shift_id && shift_id.includes(grid_id)) {
      setError(ERROR_MESSAGES_DICT['DOUBLE_BOOKED']);
      return;
    }
  };

  const cancel = () => {
    setError('');
    setSelected('');
    setOpen(false);
  };

  const validate = (e) => {
    if (!endTime) {
      setError(ERROR_MESSAGES_DICT['CANNOT_BE_BLANK']);
      return;
    }
    if (endTime > '21:01') {
      setError(ERROR_MESSAGES_DICT['AFTER_9PM']);
      return;
    }

    // // convert end_time to shift_id
    const endTimeShiftId = parseInt(endTime) - 8;
    // // FIX THIS LATER. BUG EXISTS
    if (shift_id.includes(endTimeShiftId)) {
      setError(ERROR_MESSAGES_DICT['DOUBLE_BOOKED']);
      return;
    }

    submit(date);
  };
  
  const submit = (event_date) => {
    const date = event_date.split('T')[0];
    const user_id = props.id;
    const start_time = startTime;
    const end_time = endTime;
    if (!selected) {
      props.submitShift(user_id, start_time, end_time, date);
    } else {
      props.transferShift();
    }
    setError('');
    setSelected('');
    setOpen(false);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleDelete = () => {
    remove(date);
  };

  const remove = (event_date) => {
    const date = event_date.split('T')[0];
    const user_id = props.id;
    const start_time = startTime;
    const end_time = endTime;

    props.removeShift(user_id, start_time, end_time, date);

    setError('');
    setSelected('');
    setOpen(false);
  };

  const renderSpan = Array.from({ length: 12 }, (x, i) => {
    const background = shift_id && shift_id.includes(i + 1) ? props.color : '#eeeeee';
    return <span key={i} data-id={i} onClick={clickGrid} style={{ backgroundColor: `${background}` }} />;
  });

  const errorElement = <section className={classes.error}>{error}</section>;

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
        {error && errorElement}
        {/* <section className={classes.error}>{error && errorElement}</section> */}
        {/* <section>{date}</section> */}
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
          <CategoryButton
            categories={categories}
            setCategorySelected={setCategorySelected}
            categorySelected={categorySelected}
          />
          <TransferShiftMenuButton users={users} setSelected={setSelected} />
          <Button onClick={cancel} variant='contained'>
            Back
          </Button>
          <Button onClick={handleDelete} color='secondary' variant='contained'>
            Delete
          </Button>
          {!error && (
            <Button onClick={validate} color='primary' variant='contained'>
              Submit
            </Button>
          )}
        </DialogActions>
      </Dialog>
    </>
  );
};

export default EmployeeGrid;
