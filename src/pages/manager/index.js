import React, { useEffect, useState } from "react";
import "./styles.scss";
import { auth, manager as managerService } from "services";
import Button from '@material-ui/core/Button'
import  { Navbar, SecondaryNavbar, Schedule }  from 'components'

export default () => {
  const [managers, setManagers] = useState([]);
  
  useEffect(() => {
    async function invoke() {
      setManagers(await managerService.list());
    }
    invoke()
  }, []);
  
  return (
    <>
      <Navbar/>
      <SecondaryNavbar />
      <Schedule />

      {managers.map((manager) => {
        return (
          <div>
            {manager.firstName}
            {manager.lastName}
          </div>
        );
      })}
    
    </>
  );
};
