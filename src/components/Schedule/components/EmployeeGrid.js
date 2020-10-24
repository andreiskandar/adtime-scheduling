import React, { useEffect, useState } from 'react';
import './employeeGrid.scss';
import ShiftBlock from './ShiftBlock';
import axios from 'axios';
import weekCalendar from '../../../helpers/weekCalendar';

const EmployeeGrid = ({ shift_id }) => {
  /* david's pseudo code
    // 10 - 15 = 6 hours
    //user-id 
    // span data-id range = that belongs the day = date
    // start - time 
    // end - time
  */

  // const slotMap = shift.reduce((acc, cur) => {
  //   if (!acc[cur.event_date]) {
  //     acc[cur.event_date] = [];
  //     acc[cur.event_date].push(cur.shift_id);
  //   } else {
  //     acc[cur.event_date].push(cur.shift_id);
  //   }
  //   return acc;
  // }, {});

  const handleClick = (e) => {
    e.preventDefault();

    console.log(e.target.attributes[0].value);
  };

  // found date with range of span- data-id
  let i = 1;
  const renderSpan = Array.from({ length: 12 }, (x, i) => {
    return (
      <span data-id={i} className={shift_id && shift_id.includes(i + 1) ? 'color' : 'default'} onClick={handleClick} />
    );
  });

  return <div className='employee_grid'>{renderSpan}</div>;
};

export default EmployeeGrid;
