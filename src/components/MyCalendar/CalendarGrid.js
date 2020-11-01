import React, { useState } from 'react';
import './calendarGrid.scss';
import Container from '@material-ui/core/Container'
import WeekCalendar from '../WeekNav/WeekCalendar'
import useStyles from '../Schedule/components/styles/formStyles';

const CalendarGrid = (props) => {
  const classes = useStyles();
  //Picks right color for current user
  let color;
  for (const user of props.users) {
    if (user.name === props.username) {
      color = user.color
    }
  }
  //Renders the eventblocks in the right shift_ids
  const renderSpan = Array.from({ length: 12 }, (x, i) => {
    const background = props.shift_id && props.shift_id.includes(i + 1) ? color : '#eeeeee';
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
  
  return (
    <Container>
      <div className="mycalendar_grid">{renderSpan}</div>
    </Container>
  );
};

export default CalendarGrid;
