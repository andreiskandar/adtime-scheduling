import React from 'react'
import Card from '@material-ui/core/Card';
import Header from '../Schedule/components/Header'
import Employee from '../Schedule/components/Employee'

import './styles.scss'

export default function index() {
  return (
    <Card className="schedule">
      <Header />
      <Employee name="Tristan Jacobs" avatar="https://randomuser.me/api/portraits/thumb/women/50.jpg" events="3"/>
      <Employee name="Pierre Jackson" avatar="https://randomuser.me/api/portraits/thumb/men/51.jpg" hours='2'/>
      <Employee name="Samantha Queen" avatar="https://randomuser.me/api/portraits/thumb/women/53.jpg" hours='10'/>
    </Card>
  )
}
