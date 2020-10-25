import './styles.scss';
import React, { useEffect, useState } from 'react';
import history from 'app/history'
import { Navbar, SecondaryNavbar, Schedule } from 'components';

export default () => {
  const [isAdmin, setAdmin] = useState(false)

  useEffect(() => {
    const rawUser = localStorage.getItem('user')
    if (rawUser) {
      try {
        const user = JSON.parse(rawUser)
        const {name: role} = user
        if (role !== 'admin') {
          return history.push('/employee')
        }
        setAdmin(true)
      } catch(err) {
        console.log(err)
      }
    }
  })

  if (!isAdmin) return null

  return (
    <>
      <Navbar />
      <SecondaryNavbar />
      <Schedule />
    </>
  );
};
