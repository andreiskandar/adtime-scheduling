import React from 'react';
import EmployeeGrid from './EmployeeGrid';
import EmployeeHeader from './EmployeeHeader';
import { default as slotMapHelper } from 'helpers/slotMapHelper';
import { employeeMoreInfoHelper } from 'helpers/helper';
import './employee.scss';

const Employee = (props) => {
  const { id, name, avatar, shift, color, users, categories, results, setResults, term, setTerm } = props;

  const date_from_calendar = [
    new Date(props.mon - 86400000).toISOString().split('T')[0],
    new Date(props.tues - 86400000).toISOString().split('T')[0],
    new Date(props.wed - 86400000).toISOString().split('T')[0],
    new Date(props.thurs - 86400000).toISOString().split('T')[0],
    new Date(props.fri - 86400000).toISOString().split('T')[0],
    new Date(props.sat - 86400000).toISOString().split('T')[0],
    new Date(props.sun - 86400000).toISOString().split('T')[0],
  ];

  const groupCategorySlotMap = shift && id ? slotMapHelper(shift, id) : {};

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

  const num_hours = employeeMoreInfoHelper(groupCategorySlotMap).num_hours;
  const num_event = employeeMoreInfoHelper(groupCategorySlotMap).num_event;

  const renderEmployeeGridPerDay = date_from_calendar.map((date, idx) => {
    return (
      <EmployeeGrid
        key={Date.now() + idx}
        date={date}
        // shift_id={slotMap[date].workingShift}
        groupCategorySlotMap={groupCategorySlotMap[date]}
        shift_id={slotMap[date]}
        {...props}
        users={users}
        color={color}
        categories={categories}
        results={results}
        setResults={setResults}
        term={term}
        setTerm={setTerm}
        copyData={props.copyData}
        setCopyData={props.setCopyData}
      />
    );
  });
  // JOKE FOR DEMO REHEARSAL
  // if (role === 'employee') {
  //   return (
  //     <>
  //     <main className='employee_row'>
  //       <EmployeeHeader name={name}
  //       num_event={num_event}
  //       avatar={avatar} num_hours={num_hours}
  //       results = {results} setResults = {setResults}
  //       term= {term} setTerm = {setTerm}/>
  //     <img src={'https://raw.githubusercontent.com/andreiskandar/moment/david-fe2/public/images/Bradley.jpg'}/>
  //     </main>
  //     </>
  //   )
  // }

  return (
    <main className='employee_row'>
      <EmployeeHeader
        name={name}
        num_event={num_event}
        avatar={avatar}
        num_hours={num_hours}
        term={term}
        setTerm={setTerm}
      />
      {renderEmployeeGridPerDay}
    </main>
  );
};

export default Employee;
