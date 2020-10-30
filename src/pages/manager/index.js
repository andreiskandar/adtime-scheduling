import './styles.scss';
import React, { useEffect, useState } from 'react';
import history from 'app/history';
import { Navbar, SecondaryNavbar, Schedule } from 'components';
import { user } from 'controllers';

/*
1 hour = 3600000
1 day = 86400000
1 week = 604800000
Subtract 7 hours for timezone fix = -25200000
*/

export default () => {
  const [isInitialRender, setIsInitialRender] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [week, setWeek] = useState(2);
  const [mon, setMon] = useState(1603756800000 - 604800000);
  const [tues, setTues] = useState(1603843200000 - 604800000);
  const [wed, setWed] = useState(1603929600000 - 604800000);
  const [thurs, setThurs] = useState(1604016000000 - 604800000);
  const [fri, setFri] = useState(1604102400000 - 604800000);
  const [sat, setSat] = useState(1604188800000 - 604800000);
  const [sun, setSun] = useState(1604275200000 - 604800000);

      
  

  //console.log(props.mon) // Header.js:16 1603670400000  --> 1603756800000
  //console.log(props.sun) // Header.js:17 1604188800000  --> 1604275200000

  const clickRightCalendar = () => {
    setMon(mon + 604800000);
    setTues(tues + 604800000);
    setWed(wed + 604800000);
    setThurs(thurs + 604800000);
    setFri(fri + 604800000);
    setSat(sat + 604800000);
    setSun(sun + 604800000);
  };

  const clickLeftCalendar = () => {
    setMon(mon - 604800000);
    setTues(tues - 604800000);
    setWed(wed - 604800000);
    setThurs(thurs - 604800000);
    setFri(fri - 604800000);
    setSat(sat - 604800000);
    setSun(sun - 604800000);
  };

  useEffect(() => {
    if (!user.isAuthenticated()) {
      return history.push('/');
    }
    // if (user.getRole() !== 'admin') {
    //   return history.push('/manager');
    // }
    if (isInitialRender && !isAuthenticated) {
      setIsInitialRender(false);
    }
  });

  if (isInitialRender) return null;

  return (
    <>
      <Navbar />
      <SecondaryNavbar
        clickLeftCalendar={clickLeftCalendar}
        clickRightCalendar={clickRightCalendar}
        mon={mon}
        tues={tues}
        wed={wed}
        thurs={thurs}
        fri={fri}
        sat={sat}
        sun={sun}
        setMon={setMon}
        setTues={setTues}
        setWed={setWed}
        setThurs={setThurs}
        setFri={setFri}
        setSat={setSat}
        setSun={setSun}
      />
      <Schedule
        week={week}
        setWeek={setWeek}
        mon={mon}
        tues={tues}
        wed={wed}
        thurs={thurs}
        fri={fri}
        sat={sat}
        sun={sun}
        setMon={setMon}
        setTues={setTues}
        setWed={setWed}
        setThurs={setThurs}
        setFri={setFri}
        setSat={setSat}
        setSun={setSun}
      />
    </>
  );
};
