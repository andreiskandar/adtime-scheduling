import './styles.scss';
import React, { useEffect, useState } from 'react';
import history from 'app/history'
import { Navbar, SecondaryNavbar, Schedule } from 'components';
import { user } from 'controllers'

export default () => {
  const [isInitialRender, setIsInitialRender] = useState(true)
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  
  useEffect(() => {
    if (!user.isAuthenticated()) {
      return history.push('/')
    }
    if (user.getRole() !== 'admin') {
      return history.push('/employee')
    }
    if (isInitialRender && !isAuthenticated) {
      setIsInitialRender(false)
    }
  })

  if (isInitialRender) return null

  return (
    <>
      <Navbar />
      <SecondaryNavbar />
      <Schedule />
    </>
  );
};
