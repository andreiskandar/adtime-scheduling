import React, { useState } from 'react';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Fade from '@material-ui/core/Fade';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';

const TransferShiftMenu = ({ users }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const openButton = Boolean(anchorEl);

  const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      '& > *': {
        margin: theme.spacing(1),
      },
    },
    small: {
      width: theme.spacing(3),
      height: theme.spacing(3),
      marginRight: '10px',
    },
  }));

  const classes = useStyles();

  const handleClick = (e) => {
    setAnchorEl(e.currentTarget);
  };

  const handleCloseButton = () => {
    setAnchorEl(null);
  };

  const transferTo = users.map((user) => {
    return (
      <MenuItem onClick={handleCloseButton}>
        <Avatar alt={user.name} src={user.avatar} className={classes.small} />
        {user.name}
      </MenuItem>
    );
  });

  return (
    <>
      <Button aria-controls='fade-menu' aria-haspopup='true' onClick={handleClick} variant='contained'>
        Transfer Shift
      </Button>
      <Menu
        id='fade-menu'
        anchorEl={anchorEl}
        keepMounted
        open={openButton}
        onClose={handleCloseButton}
        TransitionComponent={Fade}
      >
        {transferTo}
      </Menu>
    </>
  );
};

export default TransferShiftMenu;
