import React from 'react';
import EmployeeGrid from './EmployeeGrid';
import EmployeeHeader from './EmployeeHeader';
import { user } from '../../../controllers';
import './employee.scss';

const Employee = (props) => {
<<<<<<< HEAD
  const { id, name, avatar, shift, color, users, categories } = props;
  const role = user.getRole();
  
=======
  const { id, name, avatar, shift, color, users, categories, results, setResults, term, setTerm } = props;

>>>>>>> feature/search
  const date_from_calendar = [
    new Date(props.mon - 86400000).toISOString().split('T')[0],
    new Date(props.tues - 86400000).toISOString().split('T')[0],
    new Date(props.wed - 86400000).toISOString().split('T')[0],
    new Date(props.thurs - 86400000).toISOString().split('T')[0],
    new Date(props.fri - 86400000).toISOString().split('T')[0],
    new Date(props.sat - 86400000).toISOString().split('T')[0],
    new Date(props.sun - 86400000).toISOString().split('T')[0],
  ];
  //2020-11-02T00:00:00.000Z

  const slotMap = shift.reduce((acc, cur) => {
    const currentDate = cur.event_date.split('T')[0];
    if (cur.user_id && cur.user_id === id) {
      if (!acc[currentDate]) {
        acc[currentDate] = [];
        acc[currentDate].push(cur.shift_id);
      } else {
        acc[currentDate].push(cur.shift_id);
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
  const num_event = totalEvents === 1 ? '1 event' : totalEvents > 1 ? `${totalEvents} events` : '';

  const renderEmployeeGridPerDay = date_from_calendar.map((date, idx) => {
    return (
      <EmployeeGrid
        key={Date.now() + idx}
        date={date}
        shift_id={slotMap[date]}
        {...props}
        users={users}
        color={color}
        categories={categories}
        results = {results}
        setResults = {setResults}
        term={term}
        setTerm={setTerm}        
      />
    );
  });

  return (
    <main className='employee_row'>
      <EmployeeHeader name={name} num_event={num_event} avatar={avatar} num_hours={num_hours} results = {results} setResults = {setResults} term= {term} setTerm = {setTerm}/>
      {renderEmployeeGridPerDay}
    </main>
  );
};

export default Employee;
