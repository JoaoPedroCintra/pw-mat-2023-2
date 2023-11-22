import * as React from 'react';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
<<<<<<< HEAD
=======
import { Link } from 'react-router-dom'
>>>>>>> d9c0c456e6f2adf388e9867d0429adb4b6f3f7c2

export default function MainMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
<<<<<<< HEAD
        <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}
            id="basic-button"
            aria-controls={open ? 'basic-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
            onClick={handleClick}
        >
            <MenuIcon />
        </IconButton>
=======
      <IconButton 
        edge="start" 
        color="inherit" 
        aria-label="menu" sx={{ mr: 2 }}
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        <MenuIcon />
      </IconButton>
>>>>>>> d9c0c456e6f2adf388e9867d0429adb4b6f3f7c2
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
<<<<<<< HEAD
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>My account</MenuItem>
        <MenuItem onClick={handleClose}>Logout</MenuItem>
=======
        <MenuItem 
          onClick={handleClose}
          component={Link}
          to="/"
          divider
        >
          Página inicial
        </MenuItem>
        
        <MenuItem 
          onClick={handleClose}
          component={Link}
          to="/cars"
        >
          Carros
        </MenuItem>
        
        <MenuItem 
          onClick={handleClose}
          component={Link}
          to="/customers"
        >
          Clientes
        </MenuItem>
>>>>>>> d9c0c456e6f2adf388e9867d0429adb4b6f3f7c2
      </Menu>
    </div>
  );
}
