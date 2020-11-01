import './styles.scss';
import React, { useEffect, useState } from 'react';
import history from 'app/history';
import { Navbar, SecondaryNavbar, Schedule } from 'components';
import { user } from 'controllers';
import axios from 'axios';

/*
1 hour = 3600000
1 day = 86400000
1 week = 604800000
Subtract 7 hours for timezone fix = -25200000
*/

export default () => {
  const [startTimeState, setStartTimeState] = useState({
    Monday: 0,
    Tuesday: 0,
    Wednesday: 0,
    Thursday: 0,
    Friday: 0,
    Saturday: 0,
    Sunday: 0,
  });
  const [endTimeState, setEndTimeState] = useState({
    Monday: 0,
    Tuesday: 0,
    Wednesday: 0,
    Thursday: 0,
    Friday: 0,
    Saturday: 0,
    Sunday: 0,
  });

  const [isInitialRender, setIsInitialRender] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [week, setWeek] = useState(2);
  const [mon, setMon] = useState(1603756800000);
  const [tues, setTues] = useState(1603843200000);
  const [wed, setWed] = useState(1603929600000);
  const [thurs, setThurs] = useState(1604016000000);
  const [fri, setFri] = useState(1604102400000);
  const [sat, setSat] = useState(1604188800000);
  const [sun, setSun] = useState(1604275200000);
  const [shift, setShift] = useState([]);
  const [term, setTerm] = useState('');
  const [results, setResults] = useState([]);
  const [users, setUsers] = useState([]);
  const role = user.getRole();
  
  console.log(new Date (Date.now()))
  const getNewWeek = (day1, day2) => {
    if (role === 'admin') {
      axios
        .get('api/shifts/events/manager', { params: { firstDay: day1.split('T')[0], lastDay: day2.split('T')[0] } })
        .then((res) => {
          setShift(res.data);
        })
        .catch((e) => {
          console.log('Error from adding shift', e);
        });
    } else {
      axios
        .get('api/shifts/events/employee', { params: { firstDay: day1.split('T')[0], lastDay: day2.split('T')[0] } })
        .then((res) => {
          setShift(res.data);
        })
        .catch((e) => {
          console.log('Error from adding shift', e);
        });
    }
  };

  //console.log(props.mon) // Header.js:16 1603670400000  --> 1603756800000
  //console.log(props.sun) // Header.js:17 1604188800000  --> 1604275200000

  const clickRightCalendar = () => {
    const day1 = new Date(mon + 604800000).toISOString();
    const day2 = new Date(sun + 604800000).toISOString();
    setMon(mon + 604800000);
    setTues(tues + 604800000);
    setWed(wed + 604800000);
    setThurs(thurs + 604800000);
    setFri(fri + 604800000);
    setSat(sat + 604800000);
    setSun(sun + 604800000);
    getNewWeek(day1, day2);
  };

  const clickLeftCalendar = () => {
    const day1 = new Date(mon - 604800000).toISOString();
    const day2 = new Date(sun - 604800000).toISOString();
    setMon(mon - 604800000);
    setTues(tues - 604800000);
    setWed(wed - 604800000);
    setThurs(thurs - 604800000);
    setFri(fri - 604800000);
    setSat(sat - 604800000);
    setSun(sun - 604800000);
    getNewWeek(day1, day2);
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
        users = {users}
        setUsers = {setUsers}
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
        shift={shift}
        setShift={setShift}
        term={term}
        setTerm={setTerm}
        results={results}
        setResults={setResults}
        startTimeState={startTimeState}
        setStartTimeState={setStartTimeState}
        endTimeState={endTimeState}
        setEndTimeState={setEndTimeState}
      />
      <Schedule
        users = {users}
        setUsers = {setUsers}
        results={results}
        setResults={setResults}
        week={week}
        setWeek={setWeek}
        shift={shift}
        setShift={setShift}
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
        term={term}
        setTerm={setTerm}
      />
    </>
  );
};
