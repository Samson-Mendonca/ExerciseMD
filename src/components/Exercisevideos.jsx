// import React, { useState, useEffect } from 'react';
// import { YouTubeV3options,fetchData } from '../utils/fetchData';
// import { Stack,Typography,Box } from '@mui/material';

// const Exercisevideos = ({ name}) => {
  
  
//   const [videodata, setvideodata] = useState({});
//   useEffect(() => {
//     window.scrollTo({ top: 0, behavior: 'smooth' });
//     const fetchExerciseData = async() => { 
//       const exerciseVideosData = await fetchData(`https://youtube-v3-alternative.p.rapidapi.com/search?query=${name}&geo=US&lang=en&type=video`, YouTubeV3options);
//       setvideodata(exerciseVideosData.data);
      
      
//    }
//      fetchExerciseData();
//      console.log(videodata
//       );
//   }, [name]);
   
  
    
//   return (
//     <Box sx={{ marginTop: { lg: '203px', xs: '20px' } }} p="20px">
//       <Typography sx={{ fontSize: { lg: '44px', xs: '25px' } }} fontWeight={700} color="#000" mb="33px">
//         Watch <span style={{ color: '#FF2625', textTransform: 'capitalize' }}>{name}</span> Exercise Videos
//       </Typography>
      
//       <Stack sx={{ flexDirection: { lg: 'row' }, gap: { lg: '110px', xs: '0px' } }} justifyContent="flex-start" flexWrap="wrap" alignItems="center">
      

        
//       </Stack>
      
// </Box>
//   );
// }

// export default Exercisevideos
