import React from 'react'
import { Box, Typography,Hidden } from '@mui/material'
import Slider from "react-slick";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';
import {data, settings} from './CardData';

// card section

const CardSection = () => {
    
  return (
    <>
    <Box sx={{height:'100%',padding:'30px',alignItems:'center'}}>
   
    <Box sx={{padding:'10px'}} >
    <Slider {...settings}>

      {/* card */}
   {data.map((value,index)=>(
     
   <Card sx={{ maxWidth:"200px",backgroundColor: (value.bgcolor),height:"300px",borderRadius:'29px',fontFamily:'Poppins', }} key={index}>
     <CardActionArea>
      
      {/* card content */}
       <CardContent>
         <Typography gutterBottom variant="h5" component="div" sx={{width:'50px',fontFamily:"Poppins",fontWeight:"bolder"}}>
          {value.title}
         </Typography>
         <Typography variant="body2" color="text.secondary" sx={{width:'80px',fontFamily:"Poppins",fontWeight:'300px'}}>
        {value.desc}
         </Typography>
        
       </CardContent>

       {/* card image */}
       <CardMedia
       component="img"
       sx={{ width: 151,marginLeft:"40px"}}
       image={value.img}
      
     />
     </CardActionArea>
   </Card>

))}
  </Slider>
   </Box>
  
   </Box>
    </>
  )
}

export default CardSection



// sx={{margin:'30px',padding:'100px',display:"flex",justifyContent:'space-around',fontFamily:'Poppins'}}