import React, { useEffect } from 'react';
import './styles.scss';
import {
  auth,
} from 'services'
import { Button } from '@material-ui/core'

export default () => {
  return (
    <>
      <h1>Login</h1>
      <div>
        <label
          {...{
            for: 'username'
          }}
        >
          Username
        </label>
        <input
          {...{
            name: 'username',
            type: 'text',
          }}
        />
      </div>
      <div>
        <label
          {...{
            for: 'password'
          }}
        >
          Password
        </label>
        <input
          {...{
            name: 'password',
            type: 'password',
          }}
        />
      </div>
      <Button color="yellow"
        {...{
          onClick: () => auth.login(),
          type: 'submit'
        }}
      >
        Login
      </Button>
    </>
  );
}