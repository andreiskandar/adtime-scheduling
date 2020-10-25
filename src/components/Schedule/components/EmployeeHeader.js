import React from 'react';
import './employee.scss';

const EmployeeHeader = ({ name, num_event, num_hours, avatar }) => {
  return (
    <div className='employee'>
      <img className='avatar__employee' src={avatar} alt={name}></img>
      <div className='name_event__employee'>
        <div className='name__employee'>{name}</div>
        <div className='events__employee'>{num_event}</div>
        <div className='hours__employee'>{num_hours}</div>
      </div>
    </div>
  );
};

export default EmployeeHeader;
