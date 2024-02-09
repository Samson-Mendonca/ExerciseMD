import React from 'react'
import { useParams } from 'react-router-dom';
import ExcerciseCard from '../components/ExcerciseCard';
import { useState, useEffect } from 'react';
import {Pagination , Box, Button,  Stack, Typography } from '@mui/material';
import { excersiseOptions, fetchData } from '../utils/fetchData';
const ExercisePage = (props) => {
  const {item} = useParams();
  
  
  const [AllExercises, setAllExercises] = useState([]);
useEffect(() => {
  const fetchExcersisesData = async () => {
    const exercisesData = await fetchData('https://exercisedb.p.rapidapi.com/exercises?limit=1300', excersiseOptions);
    if(item=="all"){
      setAllExercises(exercisesData);
      
    }else{const searchedExercises = exercisesData.filter(
        (each) => each.name.toLowerCase().includes(item)
               || each.target.toLowerCase().includes(item)
               || each.equipment.toLowerCase().includes(item)
               || each.bodyPart.toLowerCase().includes(item),
      );
      setAllExercises(searchedExercises);
      }
  
  };
  fetchExcersisesData();
  
 }, []);
 const [currentPage, setcurrentPage] = useState(1);

 const exercisesPerPage = 9;
 const indexOfLastExercise = currentPage * exercisesPerPage;
 const indexOfFirstExercise = indexOfLastExercise-exercisesPerPage;
 const currentExercise = AllExercises.slice(indexOfFirstExercise, indexOfLastExercise);
 const paginate = (e,value) => { 
   setcurrentPage(value);
   window.scrollTo({top:"1800",behavior:"smooth"});
   
  } 
  return (
   <> <Typography color="#FF2625" fontWeight='600' fontSize='44px'>
        ExcersiseMD
      </Typography>
      <Typography fontWeight={100}fontSize={22} lineHeight='35px' mb={3}>
       Check out our most effective excercises
      </Typography>
      
      <Stack direction="row" sx={{gap:{lg:'110px',xs:'50px'}}} flexWrap="wrap"
  justifyContent="center" >
  {currentExercise.map((exercise,index) => (
    <ExcerciseCard key={index} exercise={exercise}/>
  ))}
  </Stack>
    <Stack mt="100px" alignItems="center">
      {AllExercises.length> 9 &&(
            <Pagination
              color="standard"
              shape="rounded"
              defaultPage={1}
              count={Math.ceil(AllExercises.length / exercisesPerPage)}
              page={currentPage}
              onChange={paginate}
              size="large"
            />
          )}

    </Stack>
      </>
  )
}

export default ExercisePage