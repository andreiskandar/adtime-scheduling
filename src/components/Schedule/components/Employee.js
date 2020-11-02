import React from 'react';
import EmployeeGrid from './EmployeeGrid';
import EmployeeHeader from './EmployeeHeader';
import './employee.scss';

const Employee = (props) => {
  const { id, name, avatar, shift, color, users, categories, results, setResults, term, setTerm } = props;

  const date_from_calendar = [
    new Date(props.mon).toISOString().split('T')[0],
    new Date(props.tues).toISOString().split('T')[0],
    new Date(props.wed).toISOString().split('T')[0],
    new Date(props.thurs).toISOString().split('T')[0],
    new Date(props.fri).toISOString().split('T')[0],
    new Date(props.sat).toISOString().split('T')[0],
    new Date(props.sun).toISOString().split('T')[0],
  ];
  //2020-11-02T00:00:00.000Z

  const testingSlotMap = shift.reduce((acc, cur) => {
    const currentDate = cur.event_date.split('T')[0];
    if (cur.user_id && cur.user_id === id) {
      if (!acc[currentDate]) {
        acc[currentDate] = {};
        if (cur.category_id === 5 && !acc[currentDate].unavailable) {
          acc[currentDate].unavailable = [];
          acc[currentDate].unavailable.push(cur.shift_id);
          return acc;
        } else if (cur.category_id === 5) {
          acc[currentDate].unavailable.push(cur.shift_id);
          return acc;
        }

        if (cur.category_id === 1 && !acc[currentDate].workingShift) {
          acc[currentDate].workingShift = [];
          acc[currentDate].workingShift.push(cur.shift_id);
          return acc;
        } else if (cur.category_id === 1) {
          acc[currentDate].workingShift.push(cur.shift_id);
          return acc;
        }

        if (cur.category_id === 2 && !acc[currentDate].lecture) {
          acc[currentDate].lecture = [];
          acc[currentDate].lecture.push(cur.shift_id);
          return acc;
        } else if (cur.category_id === 2) {
          acc[currentDate].lecture.push(cur.shift_id);
          return acc;
        }

        if (cur.category_id === 3 && !acc[currentDate].interview) {
          acc[currentDate].interview = [];
          acc[currentDate].interview.push(cur.shift_id);
          return acc;
        } else if (cur.category_id === 3) {
          acc[currentDate].interview.push(cur.shift_id);
          return acc;
        } else if (!acc[currentDate].breakout) {
          acc[currentDate].breakout = [];
          acc[currentDate].breakout.push(cur.shift_id);
          return acc;
        } else {
          acc[currentDate].breakout.push(cur.shift_id);
          return acc;
        }
      } else {
        if (cur.category_id === 5 && !acc[currentDate].unavailable) {
          acc[currentDate].unavailable = [];
          acc[currentDate].unavailable.push(cur.shift_id);
          return acc;
        } else if (cur.category_id === 5) {
          acc[currentDate].unavailable.push(cur.shift_id);
          return acc;
        }

        if (cur.category_id === 1 && !acc[currentDate].workingShift) {
          acc[currentDate].workingShift = [];
          acc[currentDate].workingShift.push(cur.shift_id);
          return acc;
        } else if (cur.category_id === 1) {
          acc[currentDate].workingShift.push(cur.shift_id);
          return acc;
        }

        if (cur.category_id === 2 && !acc[currentDate].lecture) {
          acc[currentDate].lecture = [];
          acc[currentDate].lecture.push(cur.shift_id);
          return acc;
        } else if (cur.category_id === 2) {
          acc[currentDate].lecture.push(cur.shift_id);
          return acc;
        }

        if (cur.category_id === 3 && !acc[currentDate].interview) {
          acc[currentDate].interview = [];
          acc[currentDate].interview.push(cur.shift_id);
          return acc;
        } else if (cur.category_id === 3) {
          acc[currentDate].interview.push(cur.shift_id);
          return acc;
        } else if (!acc[currentDate].breakout) {
          acc[currentDate].breakout = [];
          acc[currentDate].breakout.push(cur.shift_id);
          return acc;
        } else {
          acc[currentDate].breakout.push(cur.shift_id);
          return acc;
        }
      }
    }
    return acc;
  }, {});

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
  // for (const item in slotMap) {
  //   totalEvents++;
  //   totalHours += slotMap[item].length;
  // }

  for (const item in testingSlotMap) {
    const breakout = testingSlotMap[item].breakout ? testingSlotMap[item].breakout.length : 0;
    const interview = testingSlotMap[item].interview ? testingSlotMap[item].interview.length : 0;
    const lecture = testingSlotMap[item].lecture ? testingSlotMap[item].lecture.length : 0;
    totalEvents += breakout + interview + lecture;
    const workingShift = testingSlotMap[item].workingShift ? testingSlotMap[item].workingShift.length : 0;
    totalHours += totalEvents + workingShift;
  }

  // console.log('testingSlotMap:', testingSlotMap);
  // const totalHours = testingSlotMap ? testingSlotMap.workingShift.length : 0;
  // const totalEvents = testingSlotMap ? testingSlotMap.meetings.length : 0;

  const num_hours = totalHours === 1 ? '1 hr' : totalHours > 1 ? `${totalHours} hrs` : '';
  const num_event = totalEvents === 1 ? '1 event' : totalEvents > 1 ? `${totalEvents} events` : '';

  const renderEmployeeGridPerDay = date_from_calendar.map((date, idx) => {
    return (
      <EmployeeGrid
        key={Date.now() + idx}
        date={date}
        // shift_id={slotMap[date].workingShift}
        testingSlotMap={testingSlotMap[date]}
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
