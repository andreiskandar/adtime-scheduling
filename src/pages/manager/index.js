import './styles.scss';
import React, { useEffect, useState } from 'react';
import history from 'app/history';
import { Navbar, SecondaryNavbar, Schedule } from 'components';
import { user } from 'controllers';
import axios from 'axios';

const ONE_HOUR_milliseconds = 3600000;
const ONE_DAY_milliseconds = 86400000;
const ONE_WEEK_milliseconds = 604800000;
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

  let mondayTime, tuesdayTime, wednesdayTime, thursdayTime, fridayTime, saturdayTime, sundayTime;
  let currentUTCDate = new Date(Date.now()).toISOString().split('T')[0]; //2020-11-06
  console.log('currentUTCDate:', currentUTCDate);
  // console.log('currentUTCDate: before', currentUTCDate);
  currentUTCDate = new Date(currentUTCDate).toUTCString(); // Fri 06 Nov 2020 GMT 0000000
  console.log('currentUTCDate:', currentUTCDate);
  let currentUTCTime = new Date(currentUTCDate).getTime() + ONE_DAY_milliseconds; // 160423042049234029
  console.log('currentUTCTime:', currentUTCTime);
  const dayofWeek = new Date(currentUTCDate).getUTCDay(); // 5 (ranges from 0)
  console.log('dayofWeek:', dayofWeek);
  switch (dayofWeek) {
    case 0:
      mondayTime = currentUTCTime + ONE_DAY_milliseconds;
      tuesdayTime = currentUTCTime + 2 * ONE_DAY_milliseconds;
      wednesdayTime = currentUTCTime + 3 * ONE_DAY_milliseconds;
      thursdayTime = currentUTCTime + 4 * ONE_DAY_milliseconds;
      fridayTime = currentUTCTime + 5 * ONE_DAY_milliseconds;
      saturdayTime = currentUTCTime + 6 * ONE_DAY_milliseconds;
      sundayTime = currentUTCTime;
      break;
    case 1:
      mondayTime = currentUTCTime;
      tuesdayTime = currentUTCTime + ONE_DAY_milliseconds;
      wednesdayTime = currentUTCTime + 2 * ONE_DAY_milliseconds;
      thursdayTime = currentUTCTime + 3 * ONE_DAY_milliseconds;
      fridayTime = currentUTCTime + 4 * ONE_DAY_milliseconds;
      saturdayTime = currentUTCTime + 5 * ONE_DAY_milliseconds;
      sundayTime = currentUTCTime + 6 * ONE_DAY_milliseconds;
      break;
    case 2:
      mondayTime = currentUTCTime - ONE_DAY_milliseconds;
      tuesdayTime = currentUTCTime;
      wednesdayTime = currentUTCTime + ONE_DAY_milliseconds;
      thursdayTime = currentUTCTime + 2 * ONE_DAY_milliseconds;
      fridayTime = currentUTCTime + 3 * ONE_DAY_milliseconds;
      saturdayTime = currentUTCTime + 4 * ONE_DAY_milliseconds;
      sundayTime = currentUTCTime + 5 * ONE_DAY_milliseconds;
      break;
    case 3:
      mondayTime = currentUTCTime - 2 * ONE_DAY_milliseconds;
      tuesdayTime = currentUTCTime - ONE_DAY_milliseconds;
      wednesdayTime = currentUTCTime;
      thursdayTime = currentUTCTime + 2 * ONE_DAY_milliseconds;
      fridayTime = currentUTCTime + 3 * ONE_DAY_milliseconds;
      saturdayTime = currentUTCTime + 4 * ONE_DAY_milliseconds;
      sundayTime = currentUTCTime - 5 * ONE_DAY_milliseconds;
      break;
    case 4:
      mondayTime = currentUTCTime - 3 * ONE_DAY_milliseconds;
      tuesdayTime = currentUTCTime - 2 * ONE_DAY_milliseconds;
      wednesdayTime = currentUTCTime - ONE_DAY_milliseconds;
      thursdayTime = currentUTCTime;
      fridayTime = currentUTCTime + ONE_DAY_milliseconds;
      saturdayTime = currentUTCTime + 2 * ONE_DAY_milliseconds;
      sundayTime = currentUTCTime + 3 * ONE_DAY_milliseconds;
      break;
    case 5:
      mondayTime = currentUTCTime - 4 * ONE_DAY_milliseconds;
      tuesdayTime = currentUTCTime - 3 * ONE_DAY_milliseconds;
      wednesdayTime = currentUTCTime - 2 * ONE_DAY_milliseconds;
      thursdayTime = currentUTCTime - ONE_DAY_milliseconds;
      fridayTime = currentUTCTime;
      saturdayTime = currentUTCTime + ONE_DAY_milliseconds;
      sundayTime = currentUTCTime + 2 * ONE_DAY_milliseconds;
      break;
    case 6:
      mondayTime = currentUTCTime - 5 * ONE_DAY_milliseconds;
      tuesdayTime = currentUTCTime - 4 * ONE_DAY_milliseconds;
      wednesdayTime = currentUTCTime - 3 * ONE_DAY_milliseconds;
      thursdayTime = currentUTCTime - 2 * ONE_DAY_milliseconds;
      fridayTime = currentUTCTime - ONE_DAY_milliseconds;
      saturdayTime = currentUTCTime;
      sundayTime = currentUTCTime + ONE_DAY_milliseconds;
      break;

    default:
      break;
  }
  const [isInitialRender, setIsInitialRender] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [week, setWeek] = useState(2);
  const [mon, setMon] = useState(mondayTime);
  const [tues, setTues] = useState(tuesdayTime);
  const [wed, setWed] = useState(wednesdayTime);
  const [thurs, setThurs] = useState(thursdayTime);
  const [fri, setFri] = useState(fridayTime);
  const [sat, setSat] = useState(saturdayTime);
  const [sun, setSun] = useState(sundayTime);
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
    // const day1 = new Date(mon + 604800000 - 86400000).toISOString();
    // const day2 = new Date(sun + 604800000 + 86399999).toISOString();
    const monday = new Date(mon + ONE_WEEK_milliseconds - ONE_DAY_milliseconds).toISOString();
    const sunday = new Date(sun + ONE_WEEK_milliseconds + ONE_DAY_milliseconds - 1).toISOString();
    setMon(mon + ONE_WEEK_milliseconds);
    setTues(tues + ONE_WEEK_milliseconds);
    setWed(wed + ONE_WEEK_milliseconds);
    setThurs(thurs + ONE_WEEK_milliseconds);
    setFri(fri + ONE_WEEK_milliseconds);
    setSat(sat + ONE_WEEK_milliseconds);
    setSun(sun + ONE_WEEK_milliseconds);
    getNewWeek(monday, sunday);
  };
  const clickLeftCalendar = () => {
    const day1 = new Date(mon - ONE_WEEK_milliseconds - 86400000).toISOString();
    const day2 = new Date(sun - ONE_WEEK_milliseconds + 86399999).toISOString();
    const monday = new Date(mon - ONE_WEEK_milliseconds - ONE_DAY_milliseconds).toISOString();
    const sunday = new Date(sun - ONE_WEEK_milliseconds + ONE_DAY_milliseconds - 1).toISOString();
    setMon(mon - ONE_WEEK_milliseconds);
    setTues(tues - ONE_WEEK_milliseconds);
    setWed(wed - ONE_WEEK_milliseconds);
    setThurs(thurs - ONE_WEEK_milliseconds);
    setFri(fri - ONE_WEEK_milliseconds);
    setSat(sat - ONE_WEEK_milliseconds);
    setSun(sun - ONE_WEEK_milliseconds);
    getNewWeek(monday, sunday);
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
