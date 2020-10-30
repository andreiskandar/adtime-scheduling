import React from 'react';
import TodayIcon from '@material-ui/icons/Today';
import './WeekCalendar.scss';

const WeekCalendar = (props) => {
  const options = { weekday: 'short', year: 'numeric', month: 'short', day: '2-digit' };
  
  let MondaySelectedNoTime = new Date(props.mon).toISOString().substr(0, 10);
  let Monstring = MondaySelectedNoTime.toString() + 'T00:00:00.000Z';
  Monstring = new Date(Monstring).toLocaleDateString('en-EN', options);
  Monstring = Monstring.substr(5, 6);

  let SundaySelectedNoTime = new Date(props.sun).toISOString().substr(0, 10);
  let Sunstring = SundaySelectedNoTime.toString() + 'T00:00:00.000Z';
  Sunstring = new Date(Sunstring).toLocaleDateString('en-EN', options);
  Sunstring = Sunstring.substr(5, 12);

  return (
    <div className='weekCalendar'>
      <img className='littleCalendar' src='images/schedule.svg' alt='little calendar' />
      <div id="weekdates">{Monstring} - {Sunstring}</div>
    </div>
  );
};

export default WeekCalendar;
