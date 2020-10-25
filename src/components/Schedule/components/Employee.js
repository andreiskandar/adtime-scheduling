import React from 'react';
import EmployeeGrid from './EmployeeGrid';

import './employee.scss';

const Employee = (props) => {
  const { id, name, avatar, shift } = props;

  const date_from_calendar = [
    '2020-10-19T00:00:00.000Z',
    '2020-10-20T00:00:00.000Z',
    '2020-10-21T00:00:00.000Z',
    '2020-10-22T00:00:00.000Z',
    '2020-10-23T00:00:00.000Z',
    '2020-10-24T00:00:00.000Z',
    '2020-10-25T00:00:00.000Z',
  ];

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

  const renderEmployeeGridPerDay = date_from_calendar.map((date) => {
    return <EmployeeGrid shift_id={slotMap[date]} {...props} />;
  });

  return (
    <main className='employee_row'>
      <div className='employee'>
        <img className='avatar__employee' src={avatar} alt={name}></img>
        <div className='name_event__employee'>
          <div className='name__employee'>{name}</div>
          <div className='events__employee'>{num_event}</div>
          <div className='hours__employee'>{num_hours}</div>
        </div>
      </div>
      {renderEmployeeGridPerDay}
    </main>
  );
};

export default Employee;
