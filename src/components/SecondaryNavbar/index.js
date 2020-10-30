import React, { useState } from 'react';
import  LiveSearch from '../SearchBar/index';
import { default as WeekNav } from '../WeekNav';
import Settings from '../Settings/Settings';
import classNames from 'classnames';
import axios from 'axios';
import { user } from '../../controllers';
import Button from '@material-ui/core/Button';
import CheckIcon from '@material-ui/icons/Check';
import './styles.scss';


const PublishButton = (props) => {

  const [publish, setPublish] = useState(false);
  const [wording, setWording] = useState('Publish');
  const role = user.getRole();
  const buttonClass = classNames({
    btn: true,
    isPublished: publish,
  });

  const day1 = new Date(props.mon - 86400000).toISOString();
  const day2 = new Date(props.sun - 86400000).toISOString();

  const clickedMe = (e) => {
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


  // send props.success show green else yellow
  return (
    <main className='secondary__navbar'>
      <div className='left__secondary_navbar'>
        <LiveSearch 
        results = {props.results}
        setResults = {props.setResults} 
        term={props.term}
        setTerm={props.setTerm}
        />
        <Settings />
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
        search={props.term}
        
      />
      {role === 'admin' && (
        <Button onClick={clickedMe} className={buttonClass}>
          <CheckIcon className='icon icon__secondary_navbar' />
          {wording}
        </Button>
      )}
    </main>
  );
};

export default PublishButton;
