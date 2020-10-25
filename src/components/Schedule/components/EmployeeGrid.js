import React, { useEffect, useState } from 'react';
import './employeeGrid.scss';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import HOURS_DICT from '../../../helpers/dictionary';
import useStyles from './styles/formStyles';
import Avatar from '@material-ui/core/Avatar';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Fade from '@material-ui/core/Fade';

const EmployeeGrid = (props) => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const openButton = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseButton = () => {
    setAnchorEl(null);
  };
  const { shift_id, users } = props;
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

  const handleSubmitTransfer = () => {
    setOpen(false);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const renderSpan = Array.from({ length: 12 }, (x, i) => {
    const paintGrid = shift_id && shift_id.includes(i + 1) ? 'color' : 'default';
    return <span key={i} data-id={i} className={paintGrid} onClick={handleClickOpen} />;
  });

  const transferTo = users.map((user) => {
    return (
      <MenuItem onClick={handleCloseButton}>
        <Avatar alt={user.name} src={user.avatar} />
        {user.name}
      </MenuItem>
    );
  });

  return (
    <>
      <div className='employee_grid'>{renderSpan}</div>
      <Dialog open={open} onClose={handleClose} maxWidth='lg'>
        <DialogTitle id='form-dialog-title'>
          <Avatar alt={props.name} src={props.avatar} />
          {props.name}
        </DialogTitle>

        <form>
          <div className={classes.root}>
            <TextField autoFocus margin='dense' id='start_time' label='Start Time' value={spanId} type='time' />
            <TextField
              autoFocus
              margin='dense'
              id='end_time'
              label='End Time'
              value={endTime}
              onChange={(e) => setEndTime(e.target.value)}
              type='text'
              placeholder='09:00'
            />
          </div>
        </form>
        <DialogActions>
          <Button onClick={handleSubmit} color='secondary' variant='contained'>
            Cancel
          </Button>
          <Button aria-controls='fade-menu' aria-haspopup='true' onClick={handleClick} variant='contained'>
            Transfer To
          </Button>
          <Menu
            id='fade-menu'
            anchorEl={anchorEl}
            keepMounted
            open={openButton}
            onClose={handleCloseButton}
            TransitionComponent={Fade}
          >
            {transferTo}
          </Menu>
          <Button onClick={handleSubmitTransfer} color='primary' variant='contained'>
            Submit
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default EmployeeGrid;
