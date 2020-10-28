import './styles.scss';
import React, { useEffect, useState } from 'react';
import history from 'app/history'
import { Navbar, SecondaryNavbar, Schedule } from 'components';
import { user } from 'controllers'

/*
1 hour = 3600000
1 day = 86400000
1 week = 604800000
Subtract 7 hours for timezone fix = -25200000
*/

export default () => {
  const [isInitialRender, setIsInitialRender] = useState(true)
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [week, setWeek] = useState(2);
  const [mon, setMon] = useState(1603695600000 - 25200000)
  const [tues, setTues] = useState(1603782000000 - 25200000)
  const [wed, setWed] = useState(1603868400000 - 25200000)
  const [thurs, setThurs] = useState(1603954800000 - 25200000)
  const [fri, setFri] = useState(1604041200000 - 25200000)
  const [sat, setSat] = useState(1604127600000 - 25200000)
  const [sun, setSun] = useState(1604214000000 - 25200000)

  const timezoneOffset = 420
  

  const clickRightCalendar = () => {
    setMon(mon + 604800000)
    setTues(tues + 604800000)
    setWed(wed + 604800000)
    setThurs(thurs + 604800000)
    setFri(fri + 604800000) 
    setSat(sat + 604800000)
    setSun(sun + 604800000)
  }

  const clickLeftCalendar = () => {
    setMon(mon - 604800000)
    setTues(tues - 604800000)
    setWed(wed -  604800000)
    setThurs(thurs - 604800000)
    setFri(fri - 604800000) 
    setSat(sat - 604800000)
    setSun(sun - 604800000)
  }

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
      <SecondaryNavbar clickLeftCalendar = {clickLeftCalendar} clickRightCalendar = {clickRightCalendar}
       mon = {mon}  
       tues = {tues}  
       wed = {wed}  
       thurs = {thurs}  
       fri = {fri}  
       sat ={sat}  
       sun = {sun}
       setMon = {setMon}
       setTues = {setTues}
       setWed = {setWed}
       setThurs = {setThurs}
       setFri = {setFri}
       setSat = {setSat}
       setSun = {setSun}
      />
      <Schedule week = {week} setWeek = {setWeek}
      mon = {mon}  
      tues = {tues}  
      wed = {wed}  
      thurs = {thurs}  
      fri = {fri}  
      sat ={sat}  
      sun = {sun}
      setMon = {setMon}
      setTues = {setTues}
      setWed = {setWed}
      setThurs = {setThurs}
      setFri = {setFri}
      setSat = {setSat}
      setSun = {setSun}
      />
    </>
  );
};
