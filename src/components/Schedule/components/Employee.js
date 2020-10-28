import React from 'react';
import EmployeeGrid from './EmployeeGrid';
import EmployeeHeader from './EmployeeHeader';
import { default as WeekNav } from '../../WeekNav/index';

import './employee.scss';

const Employee = (props) => {
  const { id, name, avatar, shift, color, users, categories, dateSelector } = props;
 
  const date_from_calendar = [
      new Date (props.mon).toISOString(),
      new Date (props.tues).toISOString(),
      new Date (props.wed).toISOString(),
      new Date (props.thurs).toISOString(),
      new Date (props.fri).toISOString(),
      new Date (props.sat).toISOString(),
      new Date (props.sun).toISOString()
  ]
  
  const slotMap = shift.reduce((acc, cur) => {
    if (cur.user_id && cur.user_id === id) {
      if (!acc[cur.event_date]) {
        acc[cur.event_date] = [];
        acc[cur.event_date].push(cur.shift_id);
      } else {
        acc[cur.event_date].push(cur.shift_id);
      }
      return acc;
    } else {
      return acc;
    }
  }, {});

  let totalHours = 0,
    totalEvents = 0;
  for (const item in slotMap) {
    totalEvents++;
    totalHours += slotMap[item].length;
  }

  const num_hours = totalHours === 1 ? '1 hr' : totalHours > 1 ? `${totalHours} hrs` : '';
  const num_event = totalEvents === '1' ? '1 event' : totalEvents > '1' ? `${totalEvents} events` : '';

  const renderEmployeeGridPerDay = date_from_calendar.map((date, idx) => {
    props.dateSelector(date)
    return (
      <EmployeeGrid
        key={Date.now() + idx}
        date={date}
        shift_id={slotMap[date]}
        {...props}
        users={users}
        color={color}
        categories={categories}
      />
    );
  });

  return (
    <main className='employee_row'>
      <EmployeeHeader name={name} num_event={num_event} avatar={avatar} num_hours={num_hours} />
      {renderEmployeeGridPerDay}
    </main>
  );
};

export default Employee;
