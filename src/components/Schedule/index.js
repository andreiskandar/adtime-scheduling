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
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    cancelShift();
    const apiUsers = axios.get('/api/users');
    const apiUserShift = axios.get('api/shifts/events');
    const apiCategories = axios.get('api/categories');

    Promise.all([apiUsers, apiUserShift, apiCategories])
      .then((all) => {
        const newUser = [...all[0].data];
        const newShift = [...all[1].data];
        const newCategories = [...all[2].data];
        setUsers(newUser);
        setShift(newShift);
        setCategories(newCategories);
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
          setShift(res.data);
        });
      })
      .catch((e) => {
        console.log('Error from adding shift', e);
      });
  };

  const removeShift = (user_id, startTime, endTime, date) => {
    let payload = cancelShift(user_id, startTime, endTime, date);
    axios
      .delete('/api/events/delete', { params: payload })
      .then(() => {
        axios.get('api/shifts/events').then((res) => {
          setShift(res.data);
        });
      })
      .catch((e) => {
        console.log('Error from deleting shift(s)', e);
      });
  };

  const transferShiftId = (user_id, shift_id, start_time, end_time, category_id, transferToId) => {
    let payload = transferShift(user_id, shift_id, start_time, end_time, category_id, transferToId)
    axios.put('/api/events/transfer', payload)
      .then(() => {
        axios.get('api/shifts/events').then((res) => {
          setShift(res.data);
        });        
      })
      .catch((e) => {
        console.log("Error from transfering shift(s)", e);
      });
   };
  

  const employees = users.map((user) => {
    return (
      <Employee
        key={user.id}
        {...user}
        users={users}
        submitShift={submitShift}
        removeShift={removeShift}
        transferShiftId={transferShiftId}
        shift={shift}
        setShift={setShift}
        categories={categories}
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
