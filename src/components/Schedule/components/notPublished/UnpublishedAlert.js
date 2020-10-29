import React from 'react';
import { Button } from '@material-ui/core';
// import useStyles from '../styles/formStyles';
import { makeStyles  } from '@material-ui/core/styles';
import Alert from '@material-ui/lab/Alert';
import { red } from '@material-ui/core/colors';

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
  }
}));

export default function Delete(props) {
  const classes = useStyles();
  
  return (
    <main className={classes.root}>
      <Alert severity="warning" variant="filled" className={classes.root} >This Week's Schedule is not Published Yet</Alert>
      <section className={classes.spacing}>
        <Button size="small"
          variant="contained" 
          color="secondary" 
          onClick={props.onCancel}
        >
          Go Back
        </Button>
      </section>
    </main>
  );
}
