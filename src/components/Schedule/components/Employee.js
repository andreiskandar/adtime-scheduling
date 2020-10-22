import React from 'react'
import EmployeeGrid from '../../Schedule/components/EmployeeGrid'

import './employee.scss'

const Employee = ({name, avatar, events, hours}) => {
  const num_event = events === 1 ? '1 event' 
                    : events > 1 ? `${events} events` 
                    : ''

  const num_hours = hours === 1 ? '1 hr' 
                    : hours > 1 ? `${hours} hrs`
                    : ''

  return (
    <main className="employee_row">
      <div className="employee">
        <img className="avatar__employee" 
        src={avatar} alt={name}></img>
        <div className="name_event__employee">
          <div className="name__employee">{name}</div>
  <div className="events__employee">{num_event}</div>
  <div className="hours__employee">{num_hours}</div>
        </div>
      </div>
      <EmployeeGrid />

    </main>

  )
}

export default Employee
