import React from 'react';
import './employeeGrid.scss';
import ShiftBlock from './ShiftBlock';
import axios from 'axios';

const EmployeeGrid = () => {
  const userShifts = [
    { id: 1, user_id: 1, shift_id: 1, ispublished: false, category_id: 1, date: '2020-10-23T10:00:00.000Z' },
    { id: 2, user_id: 1, shift_id: 2, ispublished: false, category_id: 1, date: '2020-10-23T15:00:00.000Z' },

    { id: 3, user_id: 1, shift_id: 3, ispublished: false, category_id: 1, date: '2020-10-25T19:00:00.000Z' },
    { id: 4, user_id: 1, shift_id: 4, ispublished: false, category_id: 1, date: '2020-10-25T21:00:00.000Z' },

    { id: 5, user_id: 1, shift_id: 5, ispublished: false, category_id: 1, date: '2020-10-26T12:00:00.000Z' },
    { id: 6, user_id: 1, shift_id: 6, ispublished: false, category_id: 1, date: '2020-10-26T09:00:00.000Z' },
  ];
  /* david's pseudo code
  

  // 10 - 15 = 6 hours
  //user-id 
  // span data-id range = that belongs the day = date
  // start - time 
  // end - time
  

*/
  const handleClick = (e) => {
    e.preventDefault();

    console.log(e.target.attributes[0].value);
  };

  const renderSpan = Array.from({ length: 91 }, (x, i) => {
    if (i > 6 && i < 11) {
      return <span data-id={i} className='color' onClick={handleClick} />;
    } else {
      return <span data-id={i} onClick={handleClick} />;
    }
  });

  return <div className='employee_grid'>{renderSpan}</div>;
};

export default EmployeeGrid;
