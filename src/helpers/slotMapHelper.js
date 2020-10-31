const slotMapHelper = (shifts) => {
  console.log('shifts:', shifts && shifts);
  return 1;
  // return (
  //   shifts &&
  //   shifts.reduce((acc, cur) => {
  //     const currentDate = cur.event_date.split('T')[0];
  //     if (cur.user_id && cur.user_id === id) {
  //       if (!acc[currentDate]) {
  //         acc[currentDate] = {};
  //         if (cur.category_id === 5 && !acc[currentDate].unavailable) {
  //           acc[currentDate].unavailable = [];
  //           acc[currentDate].unavailable.push(cur.shift_id);
  //           return acc;
  //         } else if (cur.category_id === 5) {
  //           acc[currentDate].unavailable.push(cur.shift_id);
  //           return acc;
  //         }

  //         if (cur.category_id === 1 && !acc[currentDate].workingShift) {
  //           acc[currentDate].workingShift = [];
  //           acc[currentDate].workingShift.push(cur.shift_id);
  //           return acc;
  //         } else if (cur.category_id === 1) {
  //           acc[currentDate].workingShift.push(cur.shift_id);
  //           return acc;
  //         } else if (!acc[currentDate].meetings) {
  //           acc[currentDate].meetings = [];
  //           acc[currentDate].meetings.push(cur.shift_id);
  //           return acc;
  //         } else {
  //           acc[currentDate].meetings.push(cur.shift_id);
  //           return acc;
  //         }
  //       } else {
  //         if (cur.category_id === 5 && !acc[currentDate].unavailable) {
  //           acc[currentDate].unavailable = [];
  //           acc[currentDate].unavailable.push(cur.shift_id);
  //           return acc;
  //         } else if (cur.category_id === 5) {
  //           acc[currentDate].unavailable.push(cur.shift_id);
  //           return acc;
  //         } else if (cur.category_id === 1 && !acc[currentDate].workingShift) {
  //           acc[currentDate].workingShift = [];
  //           acc[currentDate].workingShift.push(cur.shift_id);
  //           return acc;
  //         } else if (cur.category_id === 1) {
  //           acc[currentDate].workingShift.push(cur.shift_id);
  //           return acc;
  //         } else if (!acc[currentDate].meetings) {
  //           acc[currentDate].meetings = [];
  //           acc[currentDate].meetings.push(cur.shift_id);
  //           return acc;
  //         } else {
  //           acc[currentDate].meetings.push(cur.shift_id);
  //           return acc;
  //         }
  //       }
  //     }
  //     return acc;
  //   }, {})
  // );
};

module.exports = slotMapHelper;
