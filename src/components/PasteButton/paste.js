import React, { useEffect, useState } from "react";
import axios from "axios";
import Button from '@material-ui/core/Button';
import SubmitShift from '../Schedule/index'
import addShift from '../../helpers/addShift'
export default function PasteButton(props) {
  const [pasteSchedule, setPasteSchedule] = useState(false);
  const day1 = new Date(props.mon).toISOString();
  const day2 = new Date(props.sun).toISOString();

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