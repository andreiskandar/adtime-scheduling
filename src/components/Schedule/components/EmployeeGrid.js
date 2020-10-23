import React from 'react'
import './employeeGrid.scss'

const EmployeeGrid = () => {
  return (
    <div className="employee_grid">
      {Array( 7 * 13 ).fill(<span />)}
    </div>
  )
}

export default EmployeeGrid
