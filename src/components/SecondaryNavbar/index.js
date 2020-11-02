import React, { useState } from 'react';
import LiveSearch from '../SearchBar/index';
import { default as WeekNav } from '../WeekNav';
import Settings from '../Settings/Settings';
import classNames from 'classnames';
import axios from 'axios';
import { user } from '../../controllers';
import Button from '@material-ui/core/Button';
import CheckIcon from '@material-ui/icons/Check';
import CopyButton from '../CopyButton/copy';
import PasteButton from '../PasteButton/paste';
import './styles.scss';
import MyCalendar from '../MyCalendar/MyCalendar';

const PublishButton = (props) => {
  const { copyData, setCopyData, mon, sun } = props;
  const { shift, setShift } = props;
  const [copySchedule, setCopySchedule] = useState([]);
  const [copy, setCopy] = useState(false);
  const {
    startTimeState,
    setStartTimeState,
    endTimeState,
    setEndTimeState,
    avatar,
    name,
    users,
    setUsers,
    weeklyHours,
    weeklyEvents,
  } = props;
  const [publish, setPublish] = useState(false);
  const [wording, setWording] = useState('Publish');
  const role = user.getRole();
  const buttonClass = classNames({
    btn: true,
    isPublished: publish,
  });

  const day1 = new Date(props.mon - 86400000).toISOString();
  const day2 = new Date(props.sun - 86400000).toISOString();

  const handleClick = (e) => {
    if (publish === false) {
      axios
        .put('/api/events/publish', { publish: true, firstDay: day1.split('T')[0], lastDay: day2.split('T')[0] })
        .then(setPublish(true))
        .then(setWording('Unpublish'))
        .catch((e) => {
          console.log('Publish ERROR in AXIOS', e);
        });
    } else {
      axios
        .put('/api/events/publish', { publish: false, firstDay: day1.split('T')[0], lastDay: day2.split('T')[0] })
        .then(setPublish(false))
        .then(setWording('Publish'))
        .catch((e) => {
          console.log('ERROR in AXIOS', e);
        });
    }
  };

  return (
    <main className='secondary__navbar'>
      <div className='left__secondary_navbar'>
        <LiveSearch results={props.results} setResults={props.setResults} term={props.term} setTerm={props.setTerm} />
        <Settings
          avatar={avatar}
          name={name}
          startTimeState={startTimeState}
          setStartTimeState={setStartTimeState}
          endTimeState={endTimeState}
          setEndTimeState={setEndTimeState}
        />
        <MyCalendar
          users={users}
          setUsers={setUsers}
          mon={props.mon}
          tues={props.tues}
          wed={props.wed}
          thurs={props.thurs}
          fri={props.fri}
          sat={props.sat}
          sun={props.sun}
          clickLeftCalendar={props.clickLeftCalendar}
          clickRightCalendar={props.clickRightCalendar}
          shift={props.shift}
        />
      </div>
      <WeekNav
        clickLeftCalendar={props.clickLeftCalendar}
        clickRightCalendar={props.clickRightCalendar}
        mon={props.mon}
        tues={props.tues}
        wed={props.wed}
        thurs={props.thurs}
        fri={props.fri}
        sat={props.sat}
        sun={props.sun}
        setMon={props.setMon}
        setTues={props.setTues}
        setWed={props.setWed}
        setThurs={props.setThurs}
        setFri={props.setFri}
        setSat={props.setSat}
        setSun={props.setSun}
        shift={props.shift}
        setShift={props.setShift}
        search={props.term}
      />
      {/* copySchedule={copySchedule} */}
      {/* setCopySchedule={setCopySchedule} */}
      {role === 'admin' && (
        <div>
          <PasteButton
            {...{
              onClick: async () => {
                const monday = new Date(props.mon).toISOString();
                const tuesday = new Date(props.tues).toISOString();
                const wednesday = new Date(props.wed).toISOString();
                const thursday = new Date(props.thurs).toISOString();
                const friday = new Date(props.fri).toISOString();
                const saturday = new Date(props.sat).toISOString();
                const sunday = new Date(props.sun).toISOString();

                if (copyData.length) {
                  for (const info of copyData) {
                    console.log('INFO EVNT', info.event_date.split('T')[0]);
                    const days = new Date(info.event_date.split('T')[0]).getDay();
                    console.log('days:', days);
                    //await axios.post('/api/events/add', {user_id, event_date, category_id, shift_id})

                    switch (days) {
                      case 0:
                        info.event_date = sunday;
                        break;
                      case 1:
                        info.event_date = monday;
                        break;
                      case 2:
                        info.event_date = tuesday;
                        break;
                      case 3:
                        info.event_date = wednesday;
                        break;
                      case 4:
                        info.event_date = thursday;
                        break;
                      case 5:
                        info.event_date = friday;
                        break;
                      case 6:
                        info.event_date = saturday;
                        break;
                    }
                    const event_date = info.event_date;
                    const user_id = info.user_id;
                    const category_id = info.category_id;
                    const shift_id = [info.shift_id];

                    console.log('AFTER SWTICH', info.event_date);
                    await axios.post('/api/events/add', { user_id, event_date, category_id, shift_id });
                  }
                  let res;
                  if (role === 'admin') {
                    res = await axios.get('api/shifts/events/manager', {
                      params: {
                        firstDay: day1.split('T')[0],
                        lastDay: day2.split('T')[0],
                      },
                    });
                    setShift(res.data);
                  }
                }
              },
            }}
          />
          <CopyButton {...{ copyData, setCopyData, mon, sun }} />
          <Button onClick={handleClick} className={buttonClass}>
            <CheckIcon className='icon icon__secondary_navbar' />
            {wording}
          </Button>
        </div>
      )}
    </main>
  );
};

export default PublishButton;
