import React from 'react';
import './employee.scss';

const EmployeeHeader = (props) => {
  const backendQuery = props.name.split(" ").slice(0,-1).join(' ');
  const userSearch = props.term

  return (
    <div className='employee'>
      <img className='avatar__employee' src={props.avatar} alt={props.name}></img>
      <div className='name_event__employee'>
        <div className='name__employee'>{props.name}</div>
        <div className='events__employee'>{props.num_event}</div>
        <div className='hours__employee'>{props.num_hours}</div>
      </div>
    </div>
  );
};

export default EmployeeHeader;
