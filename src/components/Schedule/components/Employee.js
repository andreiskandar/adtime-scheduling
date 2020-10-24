import React from 'react';
import EmployeeGrid from '../../Schedule/components/EmployeeGrid';

import './employee.scss';

const Employee = ({ name, avatar, events, hours, shift }) => {
  const num_event = events === '1' ? '1 event' : events > '1' ? `${events} events` : '';

  const num_hours = hours === '1' ? '1 hr' : hours > '1' ? `${hours} hrs` : '';

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
    if (!acc[cur.event_date]) {
      acc[cur.event_date] = [];
      acc[cur.event_date].push(cur.shift_id);
    } else {
      acc[cur.event_date].push(cur.shift_id);
    }
    return acc;
  }, {});

  console.log('slotMap: from eomployee', slotMap);

  const renderEmployeeGridPerDay = () => {
    return date_from_calendar.map((date) => {
      return <EmployeeGrid shift_id={slotMap[date]} />;
    });
  };
  // receive props from the parents
  // pass appointment props to the grid to render appointment

  // create grid element for each day instead of the whole week
  // week date should match
  // grid should accept props: shift_date, date_from_calendar, shift_id, user_id
  //if shift_date doesnot match from date_from_calendar render empty grid
  //else paint grid

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
      {renderEmployeeGridPerDay()}
    </main>
  );
};

export default Employee;
