import React, { useState } from 'react';
import { Menu, Dropdown, message } from 'antd';
import ChangeAvailabilityForm from './ChangeAvailabilityForm';
import { Dialog } from '@material-ui/core';

import './styles.scss';

const Settings = (props) => {
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  const onClick = ({ key }) => {
    switch (key) {
      case '1':
      case '2':
        setOpen(true);
        break;

      default:
        break;
    }
    // message.info(`Click on item ${key}`);
  };

  const menu = (
    <Menu onClick={onClick}>
      <Menu.Item key='1'>Profile Settings</Menu.Item>
      <Menu.Item key='2'>Change Availability</Menu.Item>
      <Menu.Item key='3'>Vacation Request</Menu.Item>
    </Menu>
  );
  return (
    <>
      <Dropdown overlay={menu}>
        <a className='settings__secondary_navbar' onClick={(e) => e.preventDefault()}>
          Settings
        </a>
      </Dropdown>
      <Dialog open={open} onClose={handleClose} maxWidth='lg'>
        <ChangeAvailabilityForm {...props} handleClose={handleClose} />
      </Dialog>
    </>
  );
};

export default Settings;
