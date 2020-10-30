import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Card from '@material-ui/core/Card';
import Header from '../Schedule/components/Header';
import Employee from '../Schedule/components/Employee';
import { user } from '../../controllers/index';
//import { user } from 'models';
import './styles.scss';
import addShift from 'helpers/addShift';
import transferShift from 'helpers/transferShift';
import cancelShift from 'helpers/cancelShift';
import publishSchedule from 'helpers/publishSchedule';

// const { addShift, transferShift, cancelShift } = require('../../helpers');

export default (props) => {
  const [users, setUsers] = useState([]);
  const [date, setDate] = useState('');
  const [categories, setCategories] = useState([]);
  const role = user.getRole();
  
  useEffect(() => {
    const day1 = new Date(props.mon - 86400000).toISOString();
    const day2 = new Date(props.sun - 86400000).toISOString();
    cancelShift();
    let apiUserShift;
    const apiUsers = axios.get('/api/users');
    if (role === 'admin') {
      apiUserShift = axios.get('api/shifts/events/manager', { params: {firstDay: day1.split('T')[0], lastDay: day2.split('T')[0]}});
    } else {
      apiUserShift = axios.get('api/shifts/events/employee', { params: {firstDay: day1.split('T')[0], lastDay: day2.split('T')[0]}});
    }
    
    const apiCategories = axios.get('api/categories');
    

    Promise.all([apiUsers, apiUserShift, apiCategories])
      .then((all) => {
        const newUser = [...all[0].data];
        const newShift = [...all[1].data];
        const newCategories = [...all[2].data];
        setUsers(newUser);
        props.setShift(newShift);
        setCategories(newCategories);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);
  
  const submitShift = (user_id, startTime, endTime, event_date, category_id) => {
    const day1 = new Date(props.mon - 86400000).toISOString();
    const day2 = new Date(props.sun - 86400000).toISOString();
    axios
      .post('/api/events/add', addShift(user_id, startTime, endTime, event_date, category_id))
      .then(() => {
        if (role === 'admin') {
          axios.get('api/shifts/events/manager', { params: {firstDay: day1.split('T')[0], lastDay: day2.split('T')[0]}})
          .then((res) => {
            props.setShift(res.data);
          });
        } else {
          axios.get('api/shifts/events/employee', { params: {firstDay: day1.split('T')[0], lastDay: day2.split('T')[0]}})
          .then((res) => {
            props.setShift(res.data);
          });
        }
      })
      .catch((e) => {
        console.log('Error from adding shift', e);
      });
  };

  const removeShift = (user_id, startTime, endTime, event_date, category_id) => {
    const day1 = new Date(props.mon - 86400000).toISOString();
    const day2 = new Date(props.sun - 86400000).toISOString();
    axios
      .delete('/api/events/delete', cancelShift(user_id, startTime, endTime, event_date, category_id))
      .then(() => {
        if (role === 'admin') {
          axios.get('api/shifts/events/manager', { params: {firstDay: day1.split('T')[0], lastDay: day2.split('T')[0]}})
          .then((res) => {
            props.setShift(res.data);
          });
        } else {
          axios.get('api/shifts/events/employee', { params: {firstDay: day1.split('T')[0], lastDay: day2.split('T')[0]}})
          .then((res) => {
            props.setShift(res.data);
          });
        }
      })
      .catch((e) => {
        console.log('Error from deleting shift(s)', e);
      });
  };

  const transferShiftId = (user_id, start_time, end_time, transferToUserId, event_date) => {
    const day1 = new Date(props.mon - 86400000).toISOString();
    const day2 = new Date(props.sun - 86400000).toISOString();
    //console.log('event_date:', event_date);
    // let payload = transferShift(user_id, start_time, end_time, transferToUserId, event_date, category_id);
    axios
      .put('/api/events/transfer', transferShift(user_id, start_time, end_time, transferToUserId, event_date))
      .then(() => {
        if (role === 'admin') {
          axios.get('api/shifts/events/manager', { params: {firstDay: day1.split('T')[0], lastDay: day2.split('T')[0]}})
          .then((res) => {
            props.setShift(res.data);
          });
        } else {
          axios.get('api/shifts/events/employee', { params: {firstDay: day1.split('T')[0], lastDay: day2.split('T')[0]}})
          .then((res) => {
            props.setShift(res.data);
          });
        }
      })
      .catch((e) => {
        console.log('Error from transfering shift(s)', e);
      });
  };
  
    const employees = users.map((user) => {
    const lowerUserName = user.name.toLowerCase();
    const lowerTermName = props.term.toLowerCase();
    return lowerUserName.startsWith(lowerTermName) && (
      <Employee
        key={user.id}
        {...user}
        users={users}
        submitShift={submitShift}
        removeShift={removeShift}
        transferShiftId={transferShiftId}
        shift={props.shift}
        setShift={props.setShift}
        categories={categories}
        results = {props.results}
        setResults = {props.setResults}
        term={props.term}
        setTerm={props.setTerm}
        week = {props.week}
        setWeek = {props.setWeek}
        mon = {props.mon}  
        tues = {props.tues}  
        wed = {props.wed}  
        thurs = {props.thurs}  
        fri = {props.fri}  
        sat ={props.sat}  
        sun = {props.sun}
        setMon = {props.setMon}
        setTues = {props.setTues}
        setWed = {props.setWed}
        setThurs = {props.setThurs}
        setFri = {props.setFri}
        setSat = {props.setSat}
        setSun = {props.setSun}
      />
    );
  });

  return (
    <div className='scroll'>
      <Card className='schedule'>
        <Header
          mon={props.mon}
          tues={props.tues}
          wed={props.wed}
          thurs={props.thurs}
          fri={props.fri}
          sat={props.sat}
          sun={props.sun}
          setMon={props.setMon}
          setTues={props.setTues}
          setWed={props.setWed}
          setThurs={props.setThurs}
          setFri={props.setFri}
          setSat={props.setSat}
          setSun={props.setSun}
          date={date}
        />
          {employees}
      </Card>
    </div>
  );
};
