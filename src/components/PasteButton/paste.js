import React from 'react';
import Button from '@material-ui/core/Button';
import axios from 'axios';
import { user } from '../../controllers';

export default function PasteButton(props) {
  const { copyData } = props;
  const role = user.getRole();
  const monday = new Date(props.mon).toISOString();
  const tuesday = new Date(props.tues).toISOString();
  const wednesday = new Date(props.wed).toISOString();
  const thursday = new Date(props.thurs).toISOString();
  const friday = new Date(props.fri).toISOString();
  const saturday = new Date(props.sat).toISOString();
  const sunday = new Date(props.sun - 7 * 86400000).toISOString();

  const day1 = new Date(props.mon - 86400000).toISOString();
  const day2 = new Date(props.sun + 86400000).toISOString();

  const handlePasteClick = async () => {
    if (copyData.length) {
      for (const info of copyData) {
        const days = new Date(info.event_date.split('T')[0]).getDay();
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
        const event_date = info.event_date.split('T')[0];
        const user_id = info.user_id;
        const category_id = info.category_id;
        const shift_id = [info.shift_id];
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
        props.setShift(res.data);
      }
    }
  };
  return (
    <Button color='primary' onClick={handlePasteClick} variant='contained'>
      Paste
    </Button>
  );
}
