import React from 'react';
import { Button } from '@material-ui/core';
// import useStyles from '../styles/formStyles';
import { makeStyles  } from '@material-ui/core/styles';
import Alert from '@material-ui/lab/Alert';
import { red } from '@material-ui/core/colors';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  },
  height: '100%',
  fontSize: "50px",
  backgroundColor: red,
  display: 'flex',
  justifyContent: 'space-between'
}));

export default function Delete(props) {
  const classes = useStyles();
  
  return (
    <main className={classes.root}>
      <Alert severity="warning" variant="filled" className={classes.height}>{props.messagVe}</Alert>
      <section className={classes.flex}>
        <Button variant="contained" color="secondary" className={classes.justifyContent} onClick={props.onCancel}>
          Cancel
        </Button>
        <Button danger onClick={props.onConfirm}>
          Confirm
        </Button>
      </section>
    </main>
  );
}
