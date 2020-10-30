import React from 'react';
import './header.scss';

function Header(props) {
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  const DAYS = [
    (new Date (props.mon)).toLocaleDateString('en-US', options), 
    (new Date (props.tues)).toLocaleDateString('en-US', options), 
    (new Date (props.wed)).toLocaleDateString('en-US', options), 
    (new Date (props.thurs)).toLocaleDateString('en-US', options), 
    (new Date (props.fri)).toLocaleDateString('en-US', options), 
    (new Date (props.sat)).toLocaleDateString('en-US', options), 
    (new Date (props.sun)).toLocaleDateString('en-US', options)
  ];
  const hours = ['09a', '10a', '11a', '12p', '01p', '02p', '03p', '04p', '05p', '06p', '07p', '08p'];

  const hourElement = hours.map((hour, idx) => {
    return (
      <div key={idx} className='hour'>
        {hour}
      </div>
    );
  });

  const daysElement = DAYS.map((day, idx) => {
    return (
      <div key={idx} className='days__header'>
        <div className='day_date__header'>{day}</div>
        <div className='hours__header'>{hourElement}</div>
      </div>
    );
  });

  return (
    <div className='header'>
      <div className='row__header'>Employee</div>
      <div className='day__header'>{daysElement}</div>
    </div>
  );
}

export default Header;
