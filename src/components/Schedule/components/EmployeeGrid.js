import React from 'react';
import './employeeGrid.scss';

const EmployeeGrid = () => {
  // const length =
  const renderSpan = [1, 2, 3, 4, 5].map((i, idx) => {
    if (idx === 2) {
      return <div>render block</div>;
    } else {
      return <span data-id={idx} />;
    }
  });

  return (
    <div className='employee_grid'>
      {renderSpan}
      {/* {Array( 7 * 13 ).fill(<span />)} */}
    </div>
  );
};

export default EmployeeGrid;
