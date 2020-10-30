// SEND CATEGORY ID
const transferShift = (user_id, start_time, end_time, transferToUserId, event_date) => {
  const shift_id = [];
  const startTime = parseInt(start_time);
  const endTime = parseInt(end_time);

  for (let i = startTime; i < endTime; i++) {
    shift_id.push(i - 8);
  }

  return { user_id, shift_id, start_time, end_time, transferToUserId, event_date };
};

export default transferShift;
