// const staticData = {};

const addShift = (user_id, start_time, end_time, event_date) => {
  const shift_id = [];
  const startTime = parseInt(start_time);
  const endTime = parseInt(end_time);
  //hardcoded category_id until functionality is added
  const category_id = 1;

  for (let i = (startTime); i < (endTime); i++) {
    shift_id.push(i - 8);
  }

  return {user_id, shift_id, category_id, event_date};
};

export default addShift;
