import React from 'react';
import Button from '@material-ui/core/Button';
//import axios from "axios";
//import SubmitShift from '../Schedule/index'
//import addShift from '../../helpers/addShift'
export default function PasteButton({ onClick }) {
  return (
    <Button
      {...{
        color: 'primary',
        onClick,
        variant: 'contained',
      }}
    >
      Paste
    </Button>
  );
}
