import React from 'react';
import './employeeGrid.scss';

const EmployeeGrid = () => {
  let array = [];
  array.length = 91;
  const renderSpan = Array.from({ length: 91 }, (x, i) => {
    return <span data-id={i} />;
  });
  // const renderSpan = array.map((i, idx) => {
  //   console.log(object)
  //   if (idx === 2) {
  //     return <div>render block</div>;
  //   } else {
  //     return <span data-id={idx} />;
  //   }
  // });

  return (
    <div className='employee_grid'>
      {renderSpan}
      {/* {Array( 7 * 13 ).fill(<span />)} */}
    </div>
  );
};

export default EmployeeGrid;
