import React, { useEffect, useState } from 'react';
import './MiniCalendar.css';
import './index.css';
import { Calendar } from 'antd';
import axios from 'axios';
import DialogActions from '@material-ui/core/DialogActions';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';
import moment from 'moment';
import { user } from '../../../controllers/index';
import { SettingsPowerRounded } from '@material-ui/icons';

const MiniCalendar = (props) => {
  const role = user.getRole();
  const milisecDay = 86400000;

  useEffect(() => {
    getNewWeek(new Date(props.mon).toISOString(), new Date(props.sun).toISOString());
  }, [props.mon, props.sun])

  function onPanelChange(value, mode) {
    console.log(value, mode);
  }

  const getNewWeek = (day1, day2) => {
    if (role === 'admin') {
      axios.get('api/shifts/events/manager', { params: {firstDay: day1.split('T')[0], lastDay: day2.split('T')[0]}})
      .then((res) => {
        props.setShift(res.data);
      })
      .catch((e) => {
        console.log('Error from adding shift', e);
      });
    } else {
      axios.get('api/shifts/events/employee', { params: {firstDay: day1.split('T')[0], lastDay: day2.split('T')[0]}})
      .then((res) => {
        props.setShift(res.data);
      })
      .catch((e) => {
        console.log('Error from adding shift', e);
      });
    }
  }

  const handleChange = (e) => {
    let daySelected = e._d;
    let daySelectedNoTime = new Date(daySelected).toISOString().substr(0, 10);
    let string = daySelectedNoTime.toString() + 'T00:00:00.000Z';
    string = new Date(string);
    daySelected = string.getTime();
    
    switch (new Date(daySelected).getDay()) {
      case 0:
        props.setMon(daySelected + milisecDay);
        props.setTues(daySelected + 2 * milisecDay);
        props.setWed(daySelected + 3 * milisecDay);
        props.setThurs(daySelected + 4 * milisecDay);
        props.setFri(daySelected + 5 * milisecDay);
        props.setSat(daySelected + 6 * milisecDay);
        props.setSun(daySelected + 7 * milisecDay);
        
        break;
      case 1:
        props.setMon(daySelected);
        props.setTues(daySelected + milisecDay);
        props.setWed(daySelected + 2 * milisecDay);
        props.setThurs(daySelected + 3 * milisecDay);
        props.setFri(daySelected + 4 * milisecDay);
        props.setSat(daySelected + 5 * milisecDay);
        props.setSun(daySelected + 6 * milisecDay);
        break;
      case 2:
        props.setMon(daySelected - milisecDay);
        props.setTues(daySelected);
        props.setWed(daySelected + milisecDay);
        props.setThurs(daySelected + 2 * milisecDay);
        props.setFri(daySelected + 3 * milisecDay);
        props.setSat(daySelected + 4 * milisecDay);
        props.setSun(daySelected + 5 * milisecDay);
        break;
      case 3:
        props.setMon(daySelected - 2 * milisecDay);
        props.setTues(daySelected - milisecDay);
        props.setWed(daySelected);
        props.setThurs(daySelected + milisecDay);
        props.setFri(daySelected + 2 * milisecDay);
        props.setSat(daySelected + 3 * milisecDay);
        props.setSun(daySelected + 4 * milisecDay);
        break;
      case 4:
        props.setMon(daySelected - 3 * milisecDay);
        props.setTues(daySelected - 2 * milisecDay);
        props.setWed(daySelected - milisecDay);
        props.setThurs(daySelected);
        props.setFri(daySelected + milisecDay);
        props.setSat(daySelected + 2 * milisecDay);
        props.setSun(daySelected + 3 * milisecDay);
        break;
      case 5:
        props.setMon(daySelected - 4 * milisecDay);
        props.setTues(daySelected - 3 * milisecDay);
        props.setWed(daySelected - 2 * milisecDay);
        props.setThurs(daySelected - milisecDay);
        props.setFri(daySelected);
        props.setSat(daySelected + milisecDay);
        props.setSun(daySelected + 2 * milisecDay);
        break;
      case 6:
        props.setMon(daySelected - 5 * milisecDay);
        props.setTues(daySelected - 4 * milisecDay);
        props.setWed(daySelected - 3 * milisecDay);
        props.setThurs(daySelected - 2 * milisecDay);
        props.setFri(daySelected - milisecDay);
        props.setSat(daySelected);
        props.setSun(daySelected + milisecDay);
        break;
    }
    
  };
  
  return (
    <div className='site-calendar-demo-card'>
      <Calendar onChange={handleChange} fullscreen={false} onPanelChange={onPanelChange} />
      <div className='calendar__button'>
        <Button color='primary' size='small' onClick={props.handleClose}>
          Close
        </Button>
      </div>
    </div>
  );
};

export default MiniCalendar;
