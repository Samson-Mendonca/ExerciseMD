

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button,Stack,Typography } from '@mui/material';
const ExcerciseCard = ({index,exercise}) => {
  return (
    <Link  className='exercise-card' to={`/exercise/${exercise.id}`}>
        <img src={exercise.gifUrl}  alt={exercise.name} loading='lazy'/>
        <Stack direction="row">
            <Button sx={{ml:'21px',color:'#fff', background:'#ffa9a9',
        fontSize:'14px',borderRadius:'20px', textTransform:'capitalize'}}>
                {exercise.bodyPart}
            </Button>
            <Button sx={{ml:'21px',color:'#fff', background:'#fcc757',
        fontSize:'14px', borderRadius:'20px', textTransform:'capitalize'}}>
                {exercise.target}
            </Button>
        </Stack>
        <Typography color="#000" mt="10px" fontWeight="bold" textTransform="capitalize" fontSize="20px" >
          {exercise.name}
</Typography>
    </Link>
  )
}

export default ExcerciseCard