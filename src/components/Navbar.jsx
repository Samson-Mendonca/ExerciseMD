import React from 'react'
import { Link } from 'react-router-dom';
import { Stack } from '@mui/material';
import Logo from '../assets/assets/images/Logo.png';
const Navbar = () => {
  return (
   <Stack
   direction='row' justifyContent='space-around' sx={{gap:{sm:'122px',xs:'40px'}, mt:{sm:'32px',xs:'20px'}, justifyContent:'none'}} px='10px' >
<Link to='/'>
<img src={Logo} alt="logo" style={{width:'48px',height:'48px',margin:'0 0px'}} />

</Link>
<Stack
direction='row' fontSize='24px' alignItems='flex-start' spacing={4}>
<Link to='/' style={{textDecoration:'none', color:'#3A1212',borderBottom:'3px solid #FF2625'}}>Home</Link>
<Link to="/ExercisePage/all" style={{textDecoration:'none',color:'#3A1212',borderBottom:'3px solid #FF2625'}}>Exercises</Link>
<Link to="/About" style={{textDecoration:'none',color:'#3A1212',borderBottom:'3px solid #FF2625'}}>About</Link>

</Stack>
   </Stack>
  )
}

export default Navbar