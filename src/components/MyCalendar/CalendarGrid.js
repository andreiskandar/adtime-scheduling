import React, { useState } from 'react';
import './calendarGrid.scss';
import Container from '@material-ui/core/Container'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'

const CalendarGrid = (props) => {
  
  return (
    <Container maxWidth = 'lg' style={{height: 600, width:400}}>
      <Grid>
        <div className='employee_grid'>Hello!</div>
        <div className='employee_grid'>Hello!</div>
        <div className='employee_grid'>Hello!</div>
        <div className='employee_grid'>Hello!</div>
        <div className='employee_grid'>Hello!</div>
        <div className='employee_grid'>Hello!</div>
        <div className='employee_grid'>Hello!</div>
      </Grid>
    </Container>
  );
};

export default CalendarGrid;
