const cancelShift = (user_id, start_time, end_time, event_date, category_id) => {
  const shift_id = [];
  const startTime = parseInt(start_time);
  const endTime = parseInt(end_time);

  for (let i = startTime; i < endTime; i++) {
    shift_id.push(i - 8);
  }

  return { params: { user_id, shift_id, category_id, event_date } };
};

export default cancelShift;
