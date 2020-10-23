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

  const staticData = {};
  addShift();
  transferShift();
  cancelShift();
  publishSchedule();

  const employees = users.map((user) => {
    return (
      <Employee
        key={user.id}
        {...user}
        addShift={addShift}
        cancelShift={cancelShift}
        transferShift={transferShift}
        hours='2'
        events='1'
      />
    );
  });
  // user get request from axios
  // setUser
  // pass the props to employee
  useEffect(() => {
    const apiUsers = axios.get('/api/users');

    Promise.all([apiUsers])
      .then((all) => {
        const newState = [...all[0].data.users];
        setUsers(newState);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

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
