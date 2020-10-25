import React, { useEffect, useState } from 'react';
import './employeeGrid.scss';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import HOURS_DICT from '../../../helpers/dictionary';

const EmployeeGrid = (props) => {
  const { shift_id } = props;
  const [spanId, setSpanId] = useState(0);
  const [endTime, setEndTime] = useState('');
  const [open, setOpen] = useState(false);

  const handleClickOpen = (e) => {
    setOpen(true);
    const start_time = HOURS_DICT[parseInt(e.target.attributes[0].value) + 1];
    setSpanId(start_time);
  };

  const handleSubmit = () => {
    setOpen(false);
  };

  const handleTransfer = () => {
    setOpen(false);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const renderSpan = Array.from({ length: 12 }, (x, i) => {
    const paintGrid = shift_id && shift_id.includes(i + 1) ? 'color' : 'default';
    return <span key={i} data-id={i} className={paintGrid} onClick={handleClickOpen} />;
  });

  return (
    <>
      <div className='employee_grid'>{renderSpan}</div>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle id='form-dialog-title'>{props.name}</DialogTitle>
        <TextField autoFocus margin='dense' id='name' label='Start Time' value={spanId} type='email' />
        <TextField
          autoFocus
          margin='dense'
          id='name'
          label='End Time'
          value={endTime}
          onChange={(e) => setEndTime(e.target.value)}
          type='email'
        />
        <DialogActions>
          <Button onClick={handleTransfer} color='primary'>
            Transfer
          </Button>
          <Button onClick={handleSubmit} color='primary'>
            Submit
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default EmployeeGrid;
