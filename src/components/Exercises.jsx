


import React, { useState, useEffect } from 'react';
import { Pagination,Box,Stack,Typography } from '@mui/material';
import { excersiseOptions,fetchData } from '../utils/fetchData';
import ExcerciseCard from '../components/ExcerciseCard';


const Exercises = ({excercises,setexcercises,bodyPart,setbodyPart}) => {
  const [currentPage, setcurrentPage] = useState(1);

  const exercisesPerPage = 9;
  const indexOfLastExercise = currentPage * exercisesPerPage;
  const indexOfFirstExercise = indexOfLastExercise-exercisesPerPage;
  const currentExercise = excercises.slice(indexOfFirstExercise, indexOfLastExercise)
  const paginate = (e,value) => { 
    setcurrentPage(value);
    window.scrollTo({top:"1800",behavior:"smooth"});
    
   } 
   
  return (
    <Box id='excercises'
   sx={{mt:'50px'}}
   p="20px">
<Typography variant='h4' mb="46px">Showing Results</Typography>
 <Stack direction="row" sx={{gap:{lg:'110px',xs:'50px'}}} flexWrap="wrap"
  justifyContent="center" >
  {currentExercise.map((exercise,index) => (
    <ExcerciseCard key={index} exercise={exercise}/>
  ))}
  </Stack>
    <Stack mt="100px" alignItems="center">
      {excercises.length> 9 &&(
            <Pagination
              color="standard"
              shape="rounded"
              defaultPage={1}
              count={Math.ceil(excercises.length / exercisesPerPage)}
              page={currentPage}
              onChange={paginate}
              size="large"
            />
          )}

    </Stack>
   </Box>
  )
}

export default Exercises