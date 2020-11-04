import React from 'react';
import { Button } from '@material-ui/core';
// import useStyles from '../styles/formStyles';
import { makeStyles  } from '@material-ui/core/styles';
import Alert from '@material-ui/lab/Alert';
import { red } from '@material-ui/core/colors';


export default function Unpublished(props) {
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

  const classes = useStyles();
  
  return (
    <main className={classes.root}>
      {/*(//JOKE for DEMO 
        <>
          <main className='joke'>
            <img src={'https://raw.githubusercontent.com/andreiskandar/moment/david-fe2/public/images/Bradley.jpg'}/>
          </main>
        </>)*/
      }
      <Alert severity="warning" variant="filled" className={classes.root} >This Week's Schedule is not Published Yet</Alert>
      <section className={classes.spacing}>
        <Button size="small"
          variant="contained" 
          color="primary" 
          onClick={props.handleClose}
        >
          Close
        </Button>
      </section>
    </main>
  );
}
