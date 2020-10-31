import React, { useState } from 'react';
import './calendarGrid.scss';
import { Dialog, DialogActions, DialogTitle, Button, TextField, Avatar } from '@material-ui/core';
import { HOURS_DICT, ERROR_MESSAGES_DICT } from '../../../src/helpers/dictionary';
import TransferShiftMenuButton from '../Schedule/components/TransferShiftMenuButton';
import CategoryButton from '../Schedule/components/CategoryButton';
import useStyles from '../Schedule/components/styles/formStyles';
import Transfer from '../Schedule/components/confirm/Confirmtransfer';
import Delete from '../Schedule/components/confirm/Confirmdelete';
import { user } from '../../../src/controllers';
import EmployeeGrid from '../Schedule/components/EmployeeGrid'

const CalendarGrid = (props) => {
  
  return (
    <div className='employee_grid'>Hello!</div>
  );
};

export default CalendarGrid;
