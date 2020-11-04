import './styles.scss';
import React, { useEffect, useState } from 'react';
import history from 'app/history';
import { Navbar, SecondaryNavbar, Schedule } from 'components';
import { user } from 'controllers';
import axios from 'axios';

// 1 hour = 3600000
// 1 day = 86400000
// 1 week = 604800000
// Subtract 7 hours for timezone fix = -25200000

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

  let currentUTCDate = new Date(Date.now()).toISOString().split('T')[0];
  currentUTCDate = new Date(currentUTCDate).toUTCString();
  const milisecDay = 86400000;
  let mondayTime = new Date(currentUTCDate).getTime();
  const dayofWeek = new Date(currentUTCDate).getUTCDay();
  switch (dayofWeek) {
    case 0:
      mondayTime = mondayTime - 4 * milisecDay;
      break;
    case 1:
      mondayTime = mondayTime - 3 * milisecDay;
      break;
    case 2:
      mondayTime = mondayTime - 2 * milisecDay;
      break;
    case 3:
      mondayTime = mondayTime - milisecDay;
      break;
    case 4:
      mondayTime = mondayTime;
      break;
    case 5:
      mondayTime = mondayTime + 2 * milisecDay;
      break;
    case 6:
      mondayTime = mondayTime + 3 * milisecDay;
      break;
  }

  const [isInitialRender, setIsInitialRender] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [week, setWeek] = useState(2);
  const [mon, setMon] = useState(mondayTime);
  const [tues, setTues] = useState(mondayTime + milisecDay);
  const [wed, setWed] = useState(mondayTime + 2 * milisecDay);
  const [thurs, setThurs] = useState(mondayTime + 3 * milisecDay);
  const [fri, setFri] = useState(mondayTime + 4 * milisecDay);
  const [sat, setSat] = useState(mondayTime + 5 * milisecDay);
  const [sun, setSun] = useState(mondayTime + 6 * milisecDay);
  const [shift, setShift] = useState([]);
  const [term, setTerm] = useState('');
  const [results, setResults] = useState([]);
  const [copyData, setCopyData] = useState([]);
  const [users, setUsers] = useState([]);
  const [publish, setPublish] = useState(false);
  const [wording, setWording] = useState('Publish');
  const role = user.getRole();
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
    const day1 = new Date(mon + 604800000 - 86400000).toISOString();
    const day2 = new Date(sun + 604800000 + 86399999).toISOString();
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
    const day1 = new Date(mon - 604800000 - 86400000).toISOString();
    const day2 = new Date(sun - 604800000 + 86399999).toISOString();
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
        users={users}
        setUsers={setUsers}
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
        copyData={copyData}
        setCopyData={setCopyData}
        publish={publish}
        setPublish={setPublish}
        wording={wording}
        setWording={setWording}
      />
      <Schedule
        users={users}
        setUsers={setUsers}
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
        copyData={copyData}
        setCopyData={setCopyData}
        publish={publish}
        setPublish={setPublish}
        wording={wording}
        setWording={setWording}
      />
    </>
  );
};
