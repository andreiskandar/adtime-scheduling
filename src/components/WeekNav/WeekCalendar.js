import React from 'react';
import TodayIcon from '@material-ui/icons/Today';
import './styles.scss';
const WeekCalendar = () => {
  return (
    <div className='weekCalendar'>
      <TodayIcon className='weekCalendar__icon' />
    </div>
  );
};

export default WeekCalendar;
