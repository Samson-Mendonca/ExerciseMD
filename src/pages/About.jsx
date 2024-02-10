import React from 'react'
import { Typography } from '@mui/material'
const About =() => {
  return (
  <>  <Typography color="#FF2625" fontWeight='600' fontSize='40px'>
    About ExcersiseMD
  </Typography>
  <Typography fontWeight={100}fontSize={22} lineHeight='35px' mb={3}>
   ExerciseMD is an exercise finder website that allows users to search
    for exercises by name,target muscle or exercise type. It provides the user with a pictorial reference(gifs) and the steps to be followed to perform the exercise.
  </Typography></>
  )
}

export default About