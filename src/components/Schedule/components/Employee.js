import React from 'react'
import './employee.scss'

const Employee = () => {
  return (
    <div className="employee">
      <img className="avatar__employee" 
      src="https://randomuser.me/api/portraits/thumb/men/75.jpg" alt=""></img>
      <div className="name_event__employee">
        <div className="name__employee">Mark Jacobs</div>
        <div className="events__employee">3 events</div>
        <div className="hours__employee">10.5 hrs</div>
      </div>
    </div>
  )
}

export default Employee
