import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Card from '@material-ui/core/Card';
import Header from '../Schedule/components/Header';
import Employee from '../Schedule/components/Employee';

//import helper function addShift, transferShift, cancelShift

import './styles.scss';
import addShift from 'helpers/addShift';
import transferShift from 'helpers/transferShift';
import cancelShift from 'helpers/cancelShift';
import publishSchedule from 'helpers/publishSchedule';

// const { addShift, transferShift, cancelShift } = require('../../helpers');

export default () => {
  const [users, setUsers] = useState([]);
  const [shift, setShift] = useState([]);

  useEffect(() => {
    transferShift();
    cancelShift();
    publishSchedule();
    const apiUsers = axios.get('/api/users');
    const apiUserShift = axios.get('api/shifts/events');

    Promise.all([apiUsers, apiUserShift])
      .then((all) => {
        const newUser = [...all[0].data.users];
        const newShift = [...all[1].data.data];
        setUsers(newUser);
        setShift(newShift);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  const submitShift = (user_id, startTime, endTime, date) => {
    axios
      .post('/api/events/add', addShift(user_id, startTime, endTime, date))
      .then(() => {
        axios.get('api/shifts/events').then((res) => {
          setShift(res.data.data);
        });
      })
      .catch((e) => {
        console.log('ShiftADD ERROR in AXIOS', e);
      });
  };

  const employees = users.map((user) => {
    return (
      <Employee
        key={user.id}
        {...user}
        users={users}
        submitShift={submitShift}
        cancelShift={cancelShift}
        transferShift={transferShift}
        shift={shift}
        setShift={setShift}
      />
    );
  });

  return (
    <div className='scroll'>
      <Card className='schedule'>
        <Header />
        {employees}
      </Card>
    </div>
  );
};
