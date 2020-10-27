import React from 'react';
import EmployeeGrid from './EmployeeGrid';
import EmployeeHeader from './EmployeeHeader';
import { default as WeekNav } from '../../WeekNav/index';

import './employee.scss';

const Employee = (props) => {
  const { id, name, avatar, shift, color, dateSelector } = props;

  const date_from_calendar = {
    1: [
      '2020-10-12T00:00:00.000Z',
      '2020-10-13T00:00:00.000Z',
      '2020-10-14T00:00:00.000Z',
      '2020-10-15T00:00:00.000Z',
      '2020-10-16T00:00:00.000Z',
      '2020-10-17T00:00:00.000Z',
      '2020-10-18T00:00:00.000Z'
    ],
    2: [
      '2020-10-19T00:00:00.000Z',
      '2020-10-20T00:00:00.000Z',
      '2020-10-21T00:00:00.000Z',
      '2020-10-22T00:00:00.000Z',
      '2020-10-23T00:00:00.000Z',
      '2020-10-24T00:00:00.000Z',
      '2020-10-25T00:00:00.000Z'
    ],  
    3: [
      '2020-10-26T00:00:00.000Z',
      '2020-10-27T00:00:00.000Z',
      '2020-10-28T00:00:00.000Z',
      '2020-10-29T00:00:00.000Z',
      '2020-10-30T00:00:00.000Z',
      '2020-10-31T00:00:00.000Z',
      '2020-11-01T00:00:00.000Z'
    ],  
  };

  const weekSelector = () => {
    props.setWeek(props.week)
    return date_from_calendar[props.week];
  } 
  const weekPicked = weekSelector();

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

  const renderEmployeeGridPerDay = weekPicked.map((date, idx) => {
    props.dateSelector(date)
    return (
      <EmployeeGrid
        key={idx + Date.now}
        date={date}
        shift_id={slotMap[date]}
        {...props}
        users={props.users}
        color={color}
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
