//2:01:44-->12/01/2024




import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Box } from '@mui/material';
import Detail from '../components/Detail.jsx';


import { YouTubeV3options, excersiseOptions, fetchData } from '../utils/fetchData';


const ExerciseDetail = () => {
  
const [exerciseDetail, setexerciseDetail] = useState({});
const [targetMuscleExercises, setTargetMuscleExercises] = useState([]);
const [videodata, setvideodata] = useState([]);
  const [equipmentExercises, setEquipmentExercises] = useState([]);
const {id} = useParams();
useEffect(() => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
  const fetchExerciseData = async() => { 


    const exercisedburl='https://exercisedb.p.rapidapi.com';
    
    const exerciseDetailData = await fetchData(`${exercisedburl}/exercises/exercise/${id}`,excersiseOptions);
    
    
    setexerciseDetail(exerciseDetailData);
 
    
    
    // const targetMuscleExercisesData = await fetchData(`${exercisedburl}/exercises/target/${exerciseDetailData.target}`, excersiseOptions);
    //   setTargetMuscleExercises(targetMuscleExercisesData);
    //    console.log(targetMuscleExercises);
      
    
    //   const equimentExercisesData = await fetchData(`${exercisedburl}/exercises/equipment/${exerciseDetailData.equipment}`, excersiseOptions);
    //   setEquipmentExercises(equimentExercisesData);
    //    console.log(equipmentExercises);
  };
  
    
   
   fetchExerciseData();
   
    
},[id]);

  return (
    <Box>
      <Detail ExerciseDetail={exerciseDetail} />
      {/* <ExerciseVideos  name={exerciseDetail.name} /> */}
       {/* <SimilarExercises targetMuscleExercises={targetMuscleExercises} equipmentExercises={equipmentExercises} />      */}
    </Box> 
  );
};


export default ExerciseDetail;
