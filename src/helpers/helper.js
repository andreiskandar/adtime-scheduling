const employeeMoreInfoHelper = (groupCategorySlotMap) => {
  let totalHours = 0,
    totalEvents = 0;

  for (const item in groupCategorySlotMap) {
    const breakout = groupCategorySlotMap[item].breakout ? groupCategorySlotMap[item].breakout.length : 0;
    const interview = groupCategorySlotMap[item].interview ? groupCategorySlotMap[item].interview.length : 0;
    const lecture = groupCategorySlotMap[item].lecture ? groupCategorySlotMap[item].lecture.length : 0;
    totalEvents += breakout + interview + lecture;
    const workingShift = groupCategorySlotMap[item].workingShift ? groupCategorySlotMap[item].workingShift.length : 0;
    totalHours += workingShift;
  }
  totalHours += totalEvents;
  const num_hours = totalHours === 1 ? '1 hr' : totalHours > 1 ? `${totalHours} hrs` : '';
  const num_event = totalEvents === 1 ? '1 event' : totalEvents > 1 ? `${totalEvents} events` : '';

  return { num_hours, num_event };
};

module.exports = { employeeMoreInfoHelper };
