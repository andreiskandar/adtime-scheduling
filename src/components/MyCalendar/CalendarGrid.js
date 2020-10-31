import React, { useState } from 'react';
import './calendarGrid.scss';
import Container from '@material-ui/core/Container'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import WeekCalendar from '../WeekNav/WeekCalendar'
import useStyles from '../Schedule/components/styles/formStyles';

const CalendarGrid = (props) => {
  const classes = useStyles();
  console.log(props.shift)
  
  const hours = ['09a', '10a', '11a', '12p', '01p', '02p', '03p', '04p', '05p', '06p', '07p', '08p'];
  const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
  const shift_id = [1, 2, 3, 4, 5, 6, 7]
  
  const hourElement = hours.map((hour, idx) => {
    return (
      <div key={idx} className='hour'>
        {hour}
      </div>
    );
  });

  const renderSpan = Array.from({ length: 12 }, (x, i) => {
    const background = shift_id && shift_id.includes(i + 1) ? '#6D4C41' : '#eeeeee';
    return (
      <span
        key={i}
        className={`grid__${i + 1}`}
        data-id={i}
        //onClick={clickGrid}
        style={{ backgroundColor: `${background}` }}
      />
    );
  });

  const daysElement = days.map((day, idx) => {
    return (
      <div key={idx} className='day'>
        {day}
        <div className="mycalendar_grid">{renderSpan}</div>
      </div>
    );
  });
  
  
  
  return (
    <Container>
      <div className="employee_name"></div>
      <div className="hours__header">
      <div className='row__header'>Day of Week</div>
        {hourElement}
      </div>

      
      <div className="days__header">{daysElement} 
      </div>
   
    </Container>
  );
};

export default CalendarGrid;
