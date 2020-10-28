// SEND CATEGORY ID
const transferShift = (user_id, start_time, end_time, transferToUserId, event_date, category_id) => {
  const shift_id = [];
  const startTime = parseInt(start_time);
  const endTime = parseInt(end_time);
  console.log('startTime:', startTime);
  console.log('endTime:', endTime);

  for (let i = startTime; i < endTime; i++) {
    shift_id.push(i - 8);
  }
  console.log('shift_id:', shift_id);

  console.log(
    '{ FROM HELPER FUNCTION user_id, shift_id, start_time, end_time, transferToUserId, event_date, category_id }:',
    {
      user_id,
      shift_id,
      start_time,
      end_time,
      transferToUserId,
      event_date,
      category_id,
    }
  );
  return { user_id, shift_id, start_time, end_time, transferToUserId, event_date, category_id };
};

export default transferShift;
