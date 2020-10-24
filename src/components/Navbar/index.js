import React from 'react';
import Typography from '@material-ui/core/Typography';
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import './styles.scss';

export default (props) => {
  // this will receive props username then to show in the navbar
  // if user is logged in, hide login link
  return (
    <div className='navbar'>
      <div className='navbar links__navbar'>
        <Typography variant='h4'>
          <a href='#' src='' className='navbar logo__navbar'>
            <img src='' alt='' className='logo_img__navbar'></img>A.D.Time
          </a>
        </Typography>
        <div className='navbar right_links__navbar'>
          <a href='#' src='' className='navbar link__navbar'>
            <AccountCircleOutlinedIcon className='icon icon__navbar' />
            username
          </a>
          <a href='#' src='' className='navbar link__navbar'>
            <LockOutlinedIcon className='icon icon__navbar' />
            Logout
          </a>
        </div>
      </div>
    </div>
  );
};
