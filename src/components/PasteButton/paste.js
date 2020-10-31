import React, { useEffect, useState } from "react";
import axios from "axios";
import Button from '@material-ui/core/Button';
import SubmitShift from '../Schedule/index'
import addShift from '../../helpers/addShift'
export default function PasteButton(props) {
  console.log("Paste props:", props);
  console.log('props calenderINfo:', props.copy)
  console.log('props calenderINfo:', props.copySchedule)
  
  const [pasteSchedule, setPasteSchedule] = useState(false);
  const day1 = new Date(props.mon - 86400000).toISOString();
  const day2 = new Date(props.sun - 86400000).toISOString();

  const handlePasteClick = () => {
    axios.post('/api/events/add', addShift(...props.copySchedule))
      .then((response) => {
        console.log('PASTING response:', response)
        setPasteSchedule(true)
      })
  };

  return (
    <>
      <Button variant="contained" color="primary" onClick={handlePasteClick}>
        Paste Schedule
      </Button>
    </>
  );
}