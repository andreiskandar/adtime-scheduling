import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Card from '@material-ui/core/Card';
import Header from '../Schedule/components/Header';
import Employee from '../Schedule/components/Employee';
import ShiftBlock from '../Schedule/components/ShiftBlock';
import Modal from '../Schedule/components/Modal';

import './styles.scss';

export default (props) => {
  const [user, setUser] = useState({});
  // console.log('user:', user);

  const users = [
    {
      id: 1,
      name: 'Alice',
      user_type_id: 1,
      email: 'alice@email.com',
      password: 'password',
      avatar: 'https://randomuser.me/api/portraits/thumb/women/70.jpg',
      slack_user_id: null,
      created_at: '2020-10-23T03:04:32.934Z',
    },
    {
      id: 2,
      name: 'Kira',
      user_type_id: 2,
      email: 'kira@email.com',
      password: 'password',
      avatar: 'https://randomuser.me/api/portraits/thumb/women/71.jpg',
      slack_user_id: null,
      created_at: '2020-10-23T03:04:32.934Z',
    },
    {
      id: 3,
      name: 'Jack Monroe',
      user_type_id: 1,
      email: 'Jack@email.com',
      password: 'password',
      avatar: 'https://randomuser.me/api/portraits/thumb/men/50.jpg',
      slack_user_id: null,
      created_at: '2020-10-23T03:04:32.934Z',
    },
    {
      id: 4,
      name: 'Lisa Terry',
      user_type_id: 2,
      email: 'Lisa@email.com',
      password: 'password',
      avatar: 'https://randomuser.me/api/portraits/thumb/women/30.jpg',
      slack_user_id: null,
      created_at: '2020-10-23T03:04:32.934Z',
    },
    {
      id: 5,
      name: 'Lacazette Luthor',
      user_type_id: 2,
      email: 'Lacazette@email.com',
      password: 'password',
      avatar: 'https://randomuser.me/api/portraits/thumb/men/54.jpg',
      slack_user_id: null,
      created_at: '2020-10-23T03:04:32.934Z',
    },
    {
      id: 6,
      name: 'Bonnie Yuro',
      user_type_id: 1,
      email: 'bonnie@email.com',
      password: 'password',
      avatar: 'https://randomuser.me/api/portraits/thumb/women/40.jpg',
      slack_user_id: null,
      created_at: '2020-10-23T03:04:32.934Z',
    },
    {
      id: 7,
      name: 'Poltio Hut',
      user_type_id: 2,
      email: 'hut@email.com',
      password: 'password',
      avatar: 'https://randomuser.me/api/portraits/thumb/women/32.jpg',
      slack_user_id: null,
      created_at: '2020-10-23T03:04:32.934Z',
    },
  ];

  const employees = users.map((user) => {
    return <Employee {...user} />;
  });
  // user get request from axios
  // setUser
  // pass the props to employee
  useEffect(() => {
    const apiUsers = axios.get('http://localhost:3001/api/users');

    Promise.all([apiUsers])
      .then((res) => {
        const [a] = res;
        console.log('WHAT IS A', a);
        // setUser(res);
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
        <Employee
          name='Tristan Jacobs'
          avatar='https://randomuser.me/api/portraits/thumb/women/4.jpg'
          events='3'
          hours='1'
        />
        <Employee name='Pierre Jackson' avatar='https://randomuser.me/api/portraits/thumb/men/51.jpg' hours='2' />
        <Employee name='Samantha Queen' avatar='https://randomuser.me/api/portraits/thumb/women/53.jpg' hours='10.5' />
        <Employee name='Samantha Queen' avatar='https://randomuser.me/api/portraits/thumb/women/53.jpg' hours='10.5' />
      </Card>
      <ShiftBlock />
      <Modal />
    </div>
  );
};
