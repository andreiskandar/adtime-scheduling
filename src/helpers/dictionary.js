const HOURS_DICT = {
  1: '09:00',
  2: '10:00',
  3: '11:00',
  4: '12:00',
  5: '13:00',
  6: '14:00',
  7: '15:00',
  8: '16:00',
  9: '17:00',
  10: '18:00',
  11: '19:00',
  12: '20:00',
};

const HOURS_STRING_DICT = ['09a', '10a', '11a', '12p', '01p', '02p', '03p', '04p', '05p', '06p', '07p', '08p'];

const DAYS_DICT = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

const ERROR_MESSAGES_DICT = {
  CANNOT_BE_BLANK: 'End time cannot be blank',
  AFTER_9PM: 'End time can not be after 21:00',
  DOUBLE_BOOKED: 'There is a booked shift',
  TIME_IS_STRING: 'Please enter HH or HH:MM format',
};

module.exports = { HOURS_DICT, ERROR_MESSAGES_DICT, HOURS_STRING_DICT, DAYS_DICT };
