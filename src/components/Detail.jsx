
//1:58:57-->12/01/2024




import { Typography, Stack,Button } from '@mui/material';
import BodyPartImage from '../assets/assets/icons/body-part.png';
import TargetImage from '../assets/assets/icons/target.png';
import EquipmentImage from '../assets/assets/icons/equipment.png';

import React from 'react'


const Detail = ({ExerciseDetail}) => {
const {bodyPart,gifUrl, name,target, equipment,instructions} = ExerciseDetail;
const extradetail=[
 { icon:BodyPartImage, name:name,des:'Name:',},
 { icon:TargetImage, name:target,des:'Target:',},
 { icon:EquipmentImage, name:equipment,des:'Equipment:',},
];



  return (
    <Stack gap="0px" sx={{flexDirection:{lg:'row'},p:'0px',alignItems:
'center' }} >
    <img src={gifUrl} alt={name} loading='lazy' className='detail-img'/>
    <Stack sx={{gap:{lg:'0px',xs:'0px' }}}>
      <Typography sx={{ fontSize: { lg: '30px', xs: '30px' } }} fontWeight={700} textTransform="capitalize">
          {name}
        </Typography>
    
     
      <Typography sx={{ fontSize: { lg: '16px', xs: '16px' } }} color="#4F4C4C">
        {instructions} </Typography>
        {extradetail.map( (item) =>(
        <Stack key={item.name} direction="row" gap="24px" alignItems="center">
<Button sx={{ background: '#FFF2DB', borderRadius: '50%', width: '100px', height: '100px' }}>                <img src={item.icon}/>
</Button>
<Typography fontWeight={600}>
                 {item.name}
            </Typography>  
        </Stack>
      ) )}

    </Stack>
</Stack>
  )
}

export default Detail