import React, { useState } from 'react';
import { Menu, MenuItem, Fade, Button } from '@material-ui/core/';

const CategoryButton = ({ categories, categorySelected, setCategorySelected }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const openButton = Boolean(anchorEl);

  const handleClick = (e) => {
    setAnchorEl(e.currentTarget);
  };

  const handleCloseButton = (e) => {
    setAnchorEl(null);
  };

  const onCategorySelect = (category) => {
    setCategorySelected(category);
    setAnchorEl(null);
  };

  const categoriesMenu = categories.map((category, idx) => {
    return (
      <form key={idx} value={category.id}>
        <MenuItem key={idx} onClick={() => onCategorySelect(category)}>
          {category.name}
        </MenuItem>
      </form>
    );
  });

  return (
    <>
      <Button aria-controls='fade-menu' aria-haspopup='true' onClick={handleClick} variant='contained'>
        {categorySelected.name || categories[0].name}
      </Button>
      <Menu
        id='fade-menu'
        anchorEl={anchorEl}
        keepMounted
        open={openButton}
        onClose={handleCloseButton}
        TransitionComponent={Fade}
      >
        {categoriesMenu}
      </Menu>
    </>
  );
};

export default CategoryButton;
