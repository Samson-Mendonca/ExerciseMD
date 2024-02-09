

import React from 'react';
import HeroBannerImg from '../assets/assets/images/banner.png';
import { Box,Stack,Typography, Button } from '@mui/material';


const HeroBanner = () => {
  return (
    
    <Stack direction="row"  spacing={0}
    >
    <Box sx={{
       mt: {lg:'212px',xs:'10px'}, ml: {sm:'50px'}
    }} position='relative' px='0px' py='0px'>
      <Typography color="#FF2625" fontWeight='600' fontSize='44px'>
        ExcersiseMD
      </Typography>
      <Typography fontWeight={700}sx={{fontSize:'26px'}} px="10px">
      Feel Great.<br/>
Body and Mind.
      </Typography>
      <Typography fontWeight={100}fontSize={22} lineHeight='35px' mb={3}>
       Check out our most effective excercises
      </Typography>
     
      <Button variant="contained" color="error" href="/ExercisePage/all" size='small'>
        Explore Excercises
      </Button>
      <Typography fontWeight={600} color="#ff2625"
      sx={{opacity:0.1,display:{lg:'block',xs:'none'}}} fontSize="200px">
        Excercise
        </Typography>
      
     
     
    </Box>
     <Box><img src={HeroBannerImg} alt="heroBanner img" className='hero-banner-img'/></Box></Stack>
  )
}

export default HeroBanner