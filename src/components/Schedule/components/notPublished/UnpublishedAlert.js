import React from 'react';
import { Button } from '@material-ui/core';
// import useStyles from '../styles/formStyles';
import { makeStyles } from '@material-ui/core/styles';
import Alert from '@material-ui/lab/Alert';

export default function Unpublished(props) {
  const useStyles = makeStyles((theme) => ({
    root: {
      backgroundColor: '#FFF4E5',
      color: '#A85D00',
      alignItems: 'flex-end',
      width: 'auto',
      '& > * + *': {
        marginTop: theme.spacing(1),
      },
    },
    joke: {
      display: 'flex',
      justifyContent: 'center',
      marginTop: '20px',
      marginBottom: '0px'
    },
    spacing: {
      display: 'flex',
      justifyContent: 'space-evenly',
      marginBottom: '12px',
    },
  }));
  const options = { weekday: 'short', year: 'numeric', month: 'short', day: '2-digit' };

  let MondaySelectedNoTime = new Date(props.mon).toISOString().substr(0, 10);
  let Monstring = MondaySelectedNoTime.toString() + 'T00:00:00.000Z';
  Monstring = new Date(Monstring).toLocaleDateString('en-US', options);
  Monstring = Monstring.substr(5, 6);

  let SundaySelectedNoTime = new Date(props.sun).toISOString().substr(0, 10);
  let Sunstring = SundaySelectedNoTime.toString() + 'T00:00:00.000Z';
  Sunstring = new Date(Sunstring).toLocaleDateString('en-US', options);
  Sunstring = Sunstring.substr(5, 12);

  const classes = useStyles();

  return (
    <main className={classes.root}>
      {(//JOKE for DEMO 
        <>
          <main className={classes.joke}>
            <img src={'/images/Bradley2.jpg'}/>
          </main>
      </>)}
      <Alert severity='warning' variant='filled' className={classes.root}>
        The schedule for the week of {Monstring} - {Sunstring} is not published yet.
      </Alert>
      <section className={classes.spacing}>
        <Button size='small' variant='contained' color='primary' onClick={props.handleClose}>
          Close
        </Button>
      </section>
    </main>
  );
}
