import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
<<<<<<< HEAD
import logo from '../assets/karangos-logo-600px.png';
import MainMenu from './MainMenu';
=======
import Typography from '@mui/material/Typography';

import logo from '../assets/karangos-logo-600px.png'
import MainMenu from './MainMenu'
>>>>>>> d9c0c456e6f2adf388e9867d0429adb4b6f3f7c2

export default function HeaderBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" enableColorOnDark>
        <Toolbar variant="dense">
<<<<<<< HEAD
          <MainMenu/>
          <img src={logo} alt="Logotipo Karangos" style={{width:'300px'}}/>
=======
          
          <MainMenu />
          <img src={logo} alt="Logotipo Karangos" style={{ width: '300px' }} />
>>>>>>> d9c0c456e6f2adf388e9867d0429adb4b6f3f7c2
        </Toolbar>
      </AppBar>
    </Box>
  );
}