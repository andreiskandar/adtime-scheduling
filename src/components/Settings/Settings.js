import React, { useState } from 'react';
import { Menu, Dropdown, message } from 'antd';

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
        {/* <DownOutlined /> */}
      </a>
    </Dropdown>
  );
};

// const Settings = () => {
//   const [anchorEl, setAnchorEl] = useState(null);
//   const [menu, setMenu] = useState('');
//   const openButton = Boolean(anchorEl);

//   const useStyles = makeStyles((theme) => ({
//     root: {
//       display: 'flex',
//       '& > *': {
//         margin: theme.spacing(1),
//       },
//     },
//     small: {
//       width: theme.spacing(3),
//       height: theme.spacing(3),
//       marginRight: '10px',
//     },
//   }));
//   const handleClick = (e) => {
//     setAnchorEl(e.currentTarget);
//   };

//   const handleCloseButton = (e) => {
//     setAnchorEl(null);
//   };

//   const onMenuSelect = (menu) => {
//     setMenu(menu);
//     setAnchorEl(null);
//   };

//   const menus = ['Profile', 'Change Availability', 'Vacation Request'];
//   const menuSelections = menus.map((menu, idx) => {
//     return (
//       <MenuItem key={idx} onClick={() => onMenuSelect(menu)}>
//         {menu}
//       </MenuItem>
//     );
//   });

//   return (
//     <div>
//       <Button aria-controls='fade-menu' aria-haspopup='true' onClick={handleClick} variant='contained'>
//         Settings
//       </Button>
//       <Menu
//         id='fade-menu'
//         anchorEl={anchorEl}
//         keepMounted
//         open={openButton}
//         onClose={handleCloseButton}
//         TransitionComponent={Fade}
//       >
//         {menuSelections}
//       </Menu>
//     </div>
//   );
// };

export default Settings;
