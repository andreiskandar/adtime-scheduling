import React from 'react'
import './employee.scss'

const Employee = () => {
  const n = 13 * 7;
  const slotElement = () => {

    return (
      <div className="hour">test</div>
    )
  }
  return (
    <>
      <div className="employee">
        <img className="avatar__employee" 
        src="https://randomuser.me/api/portraits/thumb/men/50.jpg" alt=""></img>
        <div className="name_event__employee">
          <div className="name__employee">Mark Jacobs</div>
          <div className="events__employee">3 events</div>
          <div className="hours__employee">10.5 hrs</div>
        </div>
      </div>
      
      <div className="employee">
        <img className="avatar__employee" 
        src="https://randomuser.me/api/portraits/thumb/women/74.jpg" alt=""></img>
        <div className="name_event__employee">
          <div className="name__employee">Stephanie Smith</div>
          <div className="events__employee">3 events</div>
          <div className="hours__employee">10.5 hrs</div>
        </div>
      </div>
    </>

  )
}

export default Employee
