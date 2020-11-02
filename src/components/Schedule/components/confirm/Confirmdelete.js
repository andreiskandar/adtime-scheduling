import React from 'react';
import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Alert from '@material-ui/lab/Alert';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: '#FFF4E5',
    color: '#A85D00',
    alignItems: 'flex-end',
    width: 'auto',
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  },
  spacing: {
    display: 'flex',
    justifyContent: 'space-evenly',
    marginBottom: '12px',
  },
}));

export default function Delete(props) {
  const classes = useStyles();

  return (
    <main className={classes.root}>
      <Alert severity='warning' variant='filled' className={classes.root}>
        {props.message}
      </Alert>
      <section className={classes.spacing}>
        <Button size='small' variant='contained' color='secondary' onClick={props.onCancel}>
          Cancel
        </Button>
        <Button size='small' variant='contained' color='secondary' onClick={props.onConfirm}>
          Confirm
        </Button>
      </section>
    </main>
  );
}
