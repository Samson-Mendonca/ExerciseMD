import React from 'react'
import { AppBar,Toolbar,IconButton, Typography } from '@mui/material';
import Logo from '../assets/assets/images/Logo.png';
const MuiNavbar = () => {
  return (
    <AppBar position='static'>
        <Toolbar>
<IconButton size='large'edge='start' color='inherit' aria-label='logo'>

</IconButton>
<Typography variant="h6" component='div'>ExcersiseMD</Typography>
        </Toolbar>
    </AppBar>
  )
}

export default MuiNavbar