import React from 'react'
import {default as SearchBar} from '../SearchBar'
import {default as WeekNav} from '../WeekNav'

import Button from '@material-ui/core/Button'
import CheckIcon from '@material-ui/icons/Check';

import './styles.scss'


export default (props) => {
  // send props.success show green else yellow
  return (
    <main className="secondary__navbar">
      <SearchBar />

      <WeekNav />
      <Button className={props.success}><CheckIcon className="icon"/>Publish</Button>
    </main>
  )
}
