import React from "react";
import Button from '@material-ui/core/Button';
import axios from 'axios'
import { user } from '../../controllers';

export default function CopyButton(props) {
  const role = user.getRole();
  const day1 = new Date(props.mon - 86400000).toISOString();
  const day2 = new Date(props.sun - 86400000).toISOString();

  // copyData = [{"user_id":1,"name":"Alice Simon","hours":9,"event_date":"2020-11-10T09:00:00.000Z","shift_id":1,"category_id":1,"ispublished":false},{"user_id":1,"name":"Alice Simon","hours":10,"event_date":"2020-11-10T10:00:00.000Z","shift_id":2,"category_id":1,"ispublished":false}]
  const handleCopyClick = () => {
    let apiUserShift;
      if (role === "admin") {
        apiUserShift = axios.get("api/shifts/events/manager", {
          params: { firstDay: day1.split("T")[0], lastDay: day2.split("T")[0] },
        });
      } 

      Promise.all([apiUserShift])
        .then((all) => {
          const newShift = [...all[0].data];
          props.setCopyData(newShift);
        })
        .catch((e) => {
          console.log(e);
        });
    };


  return (
    <Button color= 'primary' onClick={handleCopyClick} variant='contained'>
      Copy Schedule
    </Button>        
  );
}