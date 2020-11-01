import React, { useEffect, useState } from "react";
import axios from "axios";
import Button from '@material-ui/core/Button';

export default function CopyButton(props) {
  // console.log('props:', props)
  // const { mon, sun, calenderInfo: [user_id,hours,shift_id,category_id,] } = props
  // console.log('calenderInfo:', props.calenderInfo["user_id"])
  // // console.log('sun:', sun)
  // // console.log('mon:', mon)
  
  // const [copy, setCopy] = useState(false);
  // const [copySchedule, setCopySchedule] = useState({});
  const day1 = new Date(props.mon).toISOString();
  const day2 = new Date(props.sun).toISOString();
    
  const handleCopyClick = () => {
    const copyButtonUrl = `/api/shifts/copy`;
    axios.get(copyButtonUrl, { params: {firstDay: day1.split('T')[0], lastDay: day2.split('T')[0]}})
    .then((response) => {
      console.log('response:', response)
      props.setCopySchedule([...response.data]);
      props.setCopy(true)
    })  
  }
  
  return (
    <>
      <Button variant="contained" color="primary" onClick={handleCopyClick}>
        Copy Schedule
      </Button>        
    </>
  );
}

