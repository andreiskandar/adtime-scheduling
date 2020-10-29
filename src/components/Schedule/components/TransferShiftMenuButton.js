import React, { useState } from 'react';
import { Menu, MenuItem, Fade, Avatar, Button } from '@material-ui/core/';
import { makeStyles } from '@material-ui/core/styles';
import { user } from '../../../controllers';
const role = user.getRole();

const TransferShiftMenuButton = ({ users, setSelected }) => {
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
    displayFlex: {
      display: 'flex',
    },
  }));

  const classes = useStyles();

  const handleClick = (e) => {
    setAnchorEl(e.currentTarget);
  };

  const handleCloseButton = (e) => {
    setAnchorEl(null);
  };

  const onProfileSelect = (user) => {
    setSelected(user);
    setAnchorEl(null);
  };

  const transferTo = users.map((user, idx) => {
    return (
      <form key={idx} value={user.name}>
        <MenuItem onClick={() => onProfileSelect(user)}>
          <Avatar alt={user.name} src={user.avatar} className={classes.small} />
          {user.name}
        </MenuItem>
      </form>
    );
  });

  return (
    <>
      {role !== 'admin' && (
      <Button aria-controls='fade-menu' aria-haspopup='true' onClick={handleClick} variant='contained'>
        Transfer Shift
      </Button>
      )}
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

export default TransferShiftMenuButton;
