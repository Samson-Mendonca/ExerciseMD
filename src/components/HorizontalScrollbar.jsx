


import { Box } from '@mui/material'
import React from 'react'
import BodyPart from '../components/BodyPart';

import { ScrollMenu,VisibilityContext } from 'react-horizontal-scrolling-menu';

const HorizontalScrollbar = ({setexcercises , data,bodyPart,setBodyPart,}) => {
  return (
    <ScrollMenu
    >
        
        
        {
            data.map((item)=>(
              
            <Box 
            key={item.id||item}
            itemID={item.id||item}
            title={item.id||item}
            m="0 40px"
            >
             <BodyPart item={item}
             BodyPart={bodyPart} 
             setexcercises={setexcercises}
             setBodyPart={setBodyPart}
             />


            </Box>
            )
            )
        }</ScrollMenu>
  )
}
export default HorizontalScrollbar;