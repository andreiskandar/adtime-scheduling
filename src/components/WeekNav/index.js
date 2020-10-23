import React from 'react';
import Button from '@material-ui/core/Button';
import WeekCalendar from './WeekCalendar';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import './styles.scss';

export default () => {
  return (
    <div className='week__navigator'>
      <Button size='small' lassName='smaleft__navigator'>
        <ChevronLeftIcon />
      </Button>
      <Button>
        <WeekCalendar />
      </Button>

      <Button size='small' className='right__navigator'>
        <ChevronRightIcon />
      </Button>
    </div>
  );
};
