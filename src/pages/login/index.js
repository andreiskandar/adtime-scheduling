import React, { useState, useEffect } from 'react';
import './styles.scss';
import { user } from 'controllers';
import { Button, Grid, IconButton, InputAdornment, TextField } from '@material-ui/core';
import { Email, LockRounded } from '@material-ui/icons';
import Alert from '@material-ui/lab/Alert';
import history from 'app/history';
import Collapse from '@material-ui/core/Collapse';
import CloseIcon from '@material-ui/icons/Close';

export default () => {
  const [isInitialRender, setIsInitialRender] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMsg, setErrorMessage] = useState(false);
  const [open, setOpen] = useState(true);

  useEffect(() => {
    if (user.isAuthenticated()) {
      const redirectTo = user.getRole() === 'admin' ? '/manager' : '/manager';
      return history.push(redirectTo);
    }
    if (isInitialRender && !isAuthenticated) {
      setIsInitialRender(false);
    }
  });

  if (isInitialRender) return null;

  return (
    <div>
      <Grid container style={{ minHeight: '100vh' }}>
        <Grid item xs={12} sm={6}>
          <img src='/images/scheduler.jpeg' style={{ width: '100%', height: '100%', objectFit: 'cover' }} alt='' />
        </Grid>
        <Grid
          container
          item
          xs={12}
          sm={6}
          alignItems='center'
          direction='column'
          justify='space-between'
          style={{ padding: 10 }}
        >
          <div />
          <div style={{ display: 'flex', flexDirection: 'column', madWidth: 400, minWidth: 300 }}>
            <Grid container justify='center'>
              <img src='images/login_logo.png' width={250} alt='logo' />
            </Grid>
            {errorMsg && (
              // <Alert severity="error" isOpen={visible} onClick={()=> onDismiss}>Your Credentials Do Not Match!</Alert>
              <Collapse in={open}>
                <Alert
                  action={
                    <IconButton
                      aria-label='close'
                      onClick={() => {
                        setOpen(false);
                      }}
                    >
                      <CloseIcon fontSize='small' />
                    </IconButton>
                  }
                >
                  Your Credentials Do Not Match!
                </Alert>
              </Collapse>
            )}
            <TextField
              label='Email'
              for='emailInput'
              id='emailInput'
              value={email}
              onChange={(event) => {
                setEmail(event.target.value);
              }}
              margin='normal'
              InputProps={{
                startAdornment: (
                  <InputAdornment position='start'>
                    <Email />
                  </InputAdornment>
                ),
              }}
            />
            <TextField
              type='password'
              label='Password'
              for='passwordInput'
              id='passwordInput'
              value={password}
              onChange={(event) => {
                setPassword(event.target.value);
              }}
              margin='normal'
              InputProps={{
                startAdornment: (
                  <InputAdornment position='start'>
                    <LockRounded />
                  </InputAdornment>
                ),
              }}
            />
            <div style={{ height: 20 }} />
            <Button
              color='primary'
              variant='contained'
              {...{
                onClick: async () => {
                  try {
                    console.log(email, password);
                    await user.login(email, password);
                    setIsAuthenticated(true);
                  } catch (err) {
                    console.error(err);
                    setErrorMessage(true);
                  }
                },
                type: 'submit',
              }}
            >
              Log in
            </Button>
            <div style={{ height: 20 }} />
            {/* <Button>Sign up</Button> */}
          </div>
          <Grid container justify='center' spaceing={2}>
            <Grid item>
              <Button color='primary'>
                <a href='https://github.com/andreiskandar/moment'>Visit Our GitHub Repos</a>
              </Button>
            </Grid>
            <Grid item>{/* <Button variant='outlined'>Forgot pasword?</Button> */}</Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};
