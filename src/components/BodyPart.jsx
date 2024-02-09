import React, { useState, useEffect } from 'react';

import { Stack, Typography } from '@mui/material';
import ExercisePage from '../pages/ExercisePage';
import back from '../assets/assets/icons/back.png';
import gym from '../assets/assets/icons/gym.png';
import cardio from '../assets/assets/icons/cardio.png';
import chest from '../assets/assets/icons/chest.png';
import lowerarm from '../assets/assets/icons/lower arm.png';
import upperarm from '../assets/assets/icons/upper arm.png';
import lowerleg from '../assets/assets/icons/lower leg.png';
import upperleg from '../assets/assets/icons/upper leg.png';
import shoulder from '../assets/assets/icons/shoulder.png';
import waist from '../assets/assets/icons/waist.png';
import neck from '../assets/assets/icons/neck.png';
import { Link } from 'react-router-dom';
import { Forum } from '@mui/icons-material';


const BodyPart = ({ setexcercises, item, BodyPart, setBodyPart }) => {
 //console.log(item);
 

   
  


  return (
    <Stack
      type="button"
      
      alignItems="center"
      justifyContent="center"
      className='bodypart-card'
      
      sx={
        {
          borderTop:BodyPart ==item?'4px solid#ff2625':"",
          background: '#fff',
          borderBottomLeftRadius: "20px",
    
          cursor: 'pointer',

        }}
        
        onClick={() => {
          setBodyPart(item);
          window.scrollTo({ top: 1800, left: 100, behavior: 'smooth' });
        }}>



<Link to={`/ExercisePage/${item}`}   style={{ textDecoration: 'none' }}> 
      <img src={gym} alt={item} style={{width:"40px",height:"40px"}}/>
      
      <Typography fontSize="24px" fontWeight={700} color="#3A1212" textTransform="capitalize">{item}</Typography>
    </Link></Stack>

  )
}

export default BodyPart








