import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Card from '@material-ui/core/Card';
import Header from '../Schedule/components/Header';
import Employee from '../Schedule/components/Employee';
import ShiftBlock from '../Schedule/components/ShiftBlock';
import Modal from '../Schedule/components/Modal';

//import helper function addShift, transferShift, cancelShift

import './styles.scss';
import addShift from 'helpers/addShift';
import transferShift from 'helpers/transferShift';
import cancelShift from 'helpers/cancelShift';
import publishSchedule from 'helpers/publishSchedule';

// const { addShift, transferShift, cancelShift } = require('../../helpers');

export default (props) => {
  const [users, setUsers] = useState([]);
  const [shift, setShift] = useState([]);

  addShift();
  transferShift();
  cancelShift();
  publishSchedule();

  // user get request from axios
  // setUser
  // pass the props to employee
  useEffect(() => {
    const apiUsers = axios.get('/api/users');
    const apiUserShift = axios.get('api/shifts/events');

    Promise.all([apiUsers, apiUserShift])
      .then((all) => {
        const newUser = [...all[0].data.users];
        const newShift = [...all[1].data.data];
        setUsers(newUser);
        setShift(newShift);
        console.log('shift from very TOP:', shift);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  const employees = users.map((user) => {
    return (
      <Employee
        key={user.id}
        {...user}
        addShift={addShift}
        cancelShift={cancelShift}
        transferShift={transferShift}
        shift={shift}
        hours='2'
        events='1'
      />
    );
  });

  return (
    <div className='scroll'>
      <Card className='schedule'>
        <Header />
        {employees}
        {/* <Employee
          name='Tristan Jacobs'
          avatar='https://randomuser.me/api/portraits/thumb/women/4.jpg'
          events='3'
          hours='1'
        />
        <Employee name='Pierre Jackson' avatar='https://randomuser.me/api/portraits/thumb/men/51.jpg' hours='2' />
        <Employee name='Samantha Queen' avatar='https://randomuser.me/api/portraits/thumb/women/53.jpg' hours='10.5' />
        <Employee name='Samantha Queen' avatar='https://randomuser.me/api/portraits/thumb/women/53.jpg' hours='10.5' /> */}
      </Card>
      <ShiftBlock />
      <Modal />
    </div>
  );
};
