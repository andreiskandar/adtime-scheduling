import React, { useEffect, useState } from 'react';
import './employeeGrid.scss';
import axios from 'axios';
import weekCalendar from '../../../helpers/weekCalendar';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

const EmployeeGrid = (props) => {
  const { shift_id } = props;

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleClick = (e) => {
    e.preventDefault();

    console.log(e.target.attributes[0].value);
  };

  // found date with range of span- data-id
  const renderSpan = Array.from({ length: 12 }, (x, i) => {
    const paintGrid = shift_id && shift_id.includes(i + 1) ? 'color' : 'default';
    return <span data-id={i} className={paintGrid} onClick={handleClickOpen} />;
  });

  return (
    <>
      <div className='employee_grid'>{renderSpan}</div>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle id='form-dialog-title'>{props.name}</DialogTitle>
        <TextField autoFocus margin='dense' id='name' label='Start Time' type='email' />
        <TextField autoFocus margin='dense' id='name' label='End Time' type='email' />
        <DialogActions>
          <Button onClick={handleClose} color='primary'>
            Transfer
          </Button>
          <Button onClick={handleClose} color='primary'>
            Submit
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default EmployeeGrid;
