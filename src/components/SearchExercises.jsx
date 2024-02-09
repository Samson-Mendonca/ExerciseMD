


import React from 'react'
import { useState, useEffect } from 'react';
import { Box, Button, TextField, Stack, Typography } from '@mui/material';
import { excersiseOptions, fetchData } from '../utils/fetchData';
import HorizontalScrollbar from '../components/HorizontalScrollbar';
import ExcerciseCard from './ExcerciseCard';




const SearchExercises = ({ setexcercises, bodyPart, setBodyPart }) => {
  const [Search, setSearch] = useState('');
  const [BodyParts, setBodyParts] = useState([]);

  useEffect(() => {
    const fetchExcersisesData = async () => {
      const bodypartsdata = await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList', excersiseOptions);
      setBodyParts([...bodypartsdata]);
    };
    fetchExcersisesData();


  }, []);



  const handleSearch = async () => {
    if (Search) {
   
  
        const exercisesData = await fetchData('https://exercisedb.p.rapidapi.com/exercises?limit=1300', excersiseOptions);
        


        const searchedExercises = exercisesData.filter(
          (item) => item.name.toLowerCase().includes(Search)
                 || item.target.toLowerCase().includes(Search)
                 || item.equipment.toLowerCase().includes(Search)
                 || item.bodyPart.toLowerCase().includes(Search),
        );
   


      window.scrollTo({ top: 1800, left: 100, behavior: 'smooth' });

      setSearch('');
      setexcercises(searchedExercises);
    }
  };

  return (
    <Stack alignItems="center" mt="37px" justifyContent="center" p="20px">
      <Typography fontWeight={700} sx={{
        fontSize: { lg: "26px", xs: "20px" }
      }} mb="10px" textAlign="center">
        Search For Any Excersise
      </Typography>
      <Box position="relative" mb="72px">
        <TextField
          sx={{
            input: { fontWeight: "700", border: "none", borderRadius: '4px' },
            width: { lg: '1170px', md: '585px', xs: '350px' },
            backgroundColor: '#fff', borderRadius: '40px'
          }}
          size="small"
          value={Search}
          onChange={(e) => setSearch(e.target.value.toLowerCase())}
          placeholder='Search Excersises'
          type='text'
        />
        <Button className='search-btn'
          sx={{
            bgcolor: '#ff2625', color: '#fff', textTransform: 'none',
            width: { lg: '175px', xs: '80px' },
            fontSize: { lg: '20px', xs: '14px' }, m: '5px'
          }}
          onClick={handleSearch}>



          Search
        </Button>

      </Box>
      <Box
        sx={{ position: 'relative', width: '500px', p: '0px' }}>
        <HorizontalScrollbar setexcercises={setexcercises} data={BodyParts} bodyPart={bodyPart} setBodyPart={setBodyPart} />


      </Box>
    </Stack>
  )
}

export default SearchExercises