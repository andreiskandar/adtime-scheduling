import React from 'react'
import {default as SearchBar} from '../SearchBar'
import {default as WeekNav} from '../WeekNav'
import classNames from 'classnames'

import Button from '@material-ui/core/Button'
import CheckIcon from '@material-ui/icons/Check';

import './styles.scss'

export default (props) => {
  const buttonClass = classNames({
    btn: true, 
    isPublished: false, 
    // isPending: false,
  }) 

  console.log(buttonClass)
  // send props.success show green else yellow
  return (
    <main className="secondary__navbar">
      <SearchBar />
      <WeekNav />
      <Button className={buttonClass} ><CheckIcon className="icon icon__secondary_navbar"/>Publish</Button>
    </main>
  )
}
