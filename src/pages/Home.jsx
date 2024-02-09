
import React, { useState, useEffect } from 'react';

import { Box } from '@mui/material';
import Excersises from '../components/Exercises';
import SearchExercises from '../components/SearchExercises';
import HeroBanner from '../components/HeroBanner';


const Home = () => {
const [excercises, setexcercises] = useState([]);
const [BodyPart, setBodyPart] = useState('all');
  return (
    <Box>
     <HeroBanner/>

     <SearchExercises setexcercises={setexcercises}
     excercises={excercises}
     BodyPart={BodyPart}
     setBodyPart={setBodyPart}/>

     <Excersises
     excercises={excercises}
     setexcercises={setexcercises}
     BodyPart={BodyPart}
     setBodyPart={setBodyPart}/>

    </Box>
  )
}

export default Home