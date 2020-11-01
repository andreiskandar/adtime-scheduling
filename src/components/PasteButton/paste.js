import React from "react";
import Button from '@material-ui/core/Button';
<<<<<<< HEAD
import SubmitShift from '../Schedule/index'
import addShift from '../../helpers/addShift'
export default function PasteButton(props) {
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

=======
//import axios from "axios";
//import SubmitShift from '../Schedule/index'
//import addShift from '../../helpers/addShift'
export default function PasteButton({
  onClick,
}) {
>>>>>>> feature/copybutton
  return (
    <Button
      {...{
        color: 'primary',
        onClick,
        variant: 'contained',
      }}
    >
      Paste Schedule
    </Button>
  );
}