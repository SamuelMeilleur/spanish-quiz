import React from 'react';
import MenuList from '@mui/material/MenuList';
import MenuItem from '@mui/material/MenuItem';

import { CATEGORY_NAMES } from '../../utils/constants';

import './style.scss';


const SideMenu = props => {
  const { categories, setCategory } = props;

  return (
    <MenuList className='side-menu'>
      {Object.values(categories).map((category, i) => (
        <MenuItem
          className='menu-item'
          key={i}
          onClick={() => setCategory(category)}
        >
          {CATEGORY_NAMES[category]}
        </MenuItem>
      ))}
    </MenuList>
  );
}

export default SideMenu;