import React, { useState } from 'react';
import { Menu, Dropdown, message } from 'antd';
import './styles.scss';

const Settings = () => {
  const onClick = ({ key }) => {
    message.info(`Click on item ${key}`);
  };

  const menu = (
    <Menu onClick={onClick}>
      <Menu.Item key='1'>Profile Settings</Menu.Item>
      <Menu.Item key='2'>Change Availability</Menu.Item>
      <Menu.Item key='3'>Vacation Request</Menu.Item>
    </Menu>
  );
  return (
    <Dropdown overlay={menu}>
      <a className='settings__secondary_navbar' onClick={(e) => e.preventDefault()}>
        Settings
      </a>
    </Dropdown>
  );
};

export default Settings;
