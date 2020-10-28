import React, { useState } from 'react';
import { default as SearchBar } from '../SearchBar';
import { default as WeekNav } from '../WeekNav';
import classNames from 'classnames';
import axios from 'axios';

import Button from '@material-ui/core/Button';
import CheckIcon from '@material-ui/icons/Check';
import './styles.scss';

const PublishButton = (props) => {
  const [publish, setPublish] = useState(false);
  const [wording, setWording] = useState('Publish');

  const buttonClass = classNames({
    btn: true,
    isPublished: publish,
  });

  const clickedMe = (e) => {
    if (publish === false) {
      axios.put('/api/events/publish', { publish: true, firstDay: '2020-10-19', lastDay: '2020-10-26' })
      .then(setPublish(true))
      .then(setWording('Unpublish'))
      .catch((e) => {
        console.log("Publish ERROR in AXIOS", e);
      });
    } else {
      axios
        .put('/api/events/publish', { publish: false, firstDay: '2020-10-19', lastDay: '2020-10-26' })
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
      <SearchBar />
      <WeekNav clickLeftCalendar = {props.clickLeftCalendar} clickRightCalendar = {props.clickRightCalendar} 
        mon = {props.mon}  
        tues = {props.tues}  
        wed = {props.wed}  
        thurs = {props.thurs}  
        fri = {props.fri}  
        sat ={props.sat}  
        sun = {props.sun}
        setMon = {props.setMon}
        setTues = {props.setTues}
        setWed = {props.setWed}
        setThurs = {props.setThurs}
        setFri = {props.setFri}
        setSat = {props.setSat}
        setSun = {props.setSun}
      />
      <Button onClick={clickedMe} className={buttonClass}>
        <CheckIcon className='icon icon__secondary_navbar' />
        {wording}
      </Button>
    </main>
  );
};

export default PublishButton;
