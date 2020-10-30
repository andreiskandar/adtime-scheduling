import React from 'react';
import TodayIcon from '@material-ui/icons/Today';
import './WeekCalendar.scss';

const WeekCalendar = () => {
  return (
    <div className='weekCalendar'>
      <img className='littleCalendar' src='images/schedule.svg' alt='little calendar' />
    </div>
  );
};

export default WeekCalendar;
