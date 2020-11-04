export default function (shift, id) {
  return shift.reduce((acc, cur) => {
    const currentDate = cur.event_date.split('T')[0];
    if (cur.user_id && cur.user_id === id) {
      if (!acc[currentDate]) {
        acc[currentDate] = {};
        if (cur.category_id === 5 && !acc[currentDate].unavailable) {
          acc[currentDate].unavailable = [];
          acc[currentDate].unavailable.push(cur.shift_id);
          return acc;
        } else if (cur.category_id === 5) {
          acc[currentDate].unavailable.push(cur.shift_id);
          return acc;
        }

        if (cur.category_id === 1 && !acc[currentDate].workingShift) {
          acc[currentDate].workingShift = [];
          acc[currentDate].workingShift.push(cur.shift_id);
          return acc;
        } else if (cur.category_id === 1) {
          acc[currentDate].workingShift.push(cur.shift_id);
          return acc;
        }

        if (cur.category_id === 2 && !acc[currentDate].lecture) {
          acc[currentDate].lecture = [];
          acc[currentDate].lecture.push(cur.shift_id);
          return acc;
        } else if (cur.category_id === 2) {
          acc[currentDate].lecture.push(cur.shift_id);
          return acc;
        }

        if (cur.category_id === 3 && !acc[currentDate].interview) {
          acc[currentDate].interview = [];
          acc[currentDate].interview.push(cur.shift_id);
          return acc;
        } else if (cur.category_id === 3) {
          acc[currentDate].interview.push(cur.shift_id);
          return acc;
        } else if (!acc[currentDate].breakout) {
          acc[currentDate].breakout = [];
          acc[currentDate].breakout.push(cur.shift_id);
          return acc;
        } else {
          acc[currentDate].breakout.push(cur.shift_id);
          return acc;
        }
      } else {
        if (cur.category_id === 5 && !acc[currentDate].unavailable) {
          acc[currentDate].unavailable = [];
          acc[currentDate].unavailable.push(cur.shift_id);
          return acc;
        } else if (cur.category_id === 5) {
          acc[currentDate].unavailable.push(cur.shift_id);
          return acc;
        }

        if (cur.category_id === 1 && !acc[currentDate].workingShift) {
          acc[currentDate].workingShift = [];
          acc[currentDate].workingShift.push(cur.shift_id);
          return acc;
        } else if (cur.category_id === 1) {
          acc[currentDate].workingShift.push(cur.shift_id);
          return acc;
        }

        if (cur.category_id === 2 && !acc[currentDate].lecture) {
          acc[currentDate].lecture = [];
          acc[currentDate].lecture.push(cur.shift_id);
          return acc;
        } else if (cur.category_id === 2) {
          acc[currentDate].lecture.push(cur.shift_id);
          return acc;
        }

        if (cur.category_id === 3 && !acc[currentDate].interview) {
          acc[currentDate].interview = [];
          acc[currentDate].interview.push(cur.shift_id);
          return acc;
        } else if (cur.category_id === 3) {
          acc[currentDate].interview.push(cur.shift_id);
          return acc;
        } else if (!acc[currentDate].breakout) {
          acc[currentDate].breakout = [];
          acc[currentDate].breakout.push(cur.shift_id);
          return acc;
        } else {
          acc[currentDate].breakout.push(cur.shift_id);
          return acc;
        }
      }
    }
    return acc;
  }, {});
}
