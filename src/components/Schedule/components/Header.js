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
    <div className="days__header">{day}, Current Date
        <div className="hours__header">
          {hourElement}
        </div>
    </div>
    )
  })

  return (
    <div className="header">
      {daysElement}
    </div>
  )
}

export default Header
