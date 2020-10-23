import React from 'react'
import './header.scss'

function Header() {
  const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
  const hours = [
    "09a", 
    "10a",
    "11a",
    "12p",
    "01p",
    "02p",
    "03p",
    "04p",
    "05p",
    "06p",
    "07p",
    "08p",
    "09p",
  ]

  const hourElement = hours.map(hour => {
    return (
      <div className="hour">{hour}</div>
    )
  })

  const daysElement = days.map(day => {
    return (
    <div className="days__header">
        <div className="day_date__header">{day}, Current Date</div>
        <div className="hours__header">
          {hourElement}
        </div>
    </div>
    )
  })

  return (
    <div className="header">
      <div className="row__header">Employee</div>
      <div className="day__header">{daysElement}</div>
    </div>
    
  )
}

export default Header