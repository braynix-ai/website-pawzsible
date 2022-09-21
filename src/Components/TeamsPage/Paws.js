import React from 'react'
import { InfoContainer,CardContainer } from './TeamStyle'
import Card from '@mui/material/Card';

import CardContent from '@mui/material/CardContent';
import {data} from "./PawData"
import Typography from '@mui/material/Typography';
import { Box, Container, ThemeProvider } from '@mui/material';
import { theme } from '../Styles';





const Paws = () => {
  
  return (
    <ThemeProvider theme={theme}>
    <InfoContainer> 

       {/* heading paw us */}
         <Typography sx={{textAlign:"center",fontFamily:"Poppins",fontWeight:"bolder",
         fontSize:{laptop:"40px",tablet:"35px",mobile:"25px"},color:"#001A80"}}>
          Our Paws
          </Typography>

          {/* paw card container */}

        <CardContainer>
        {data.map((value,index)=>(
     <Card sx={{ maxWidth: 300,boxShadow:"none"}}key={index}>

      {/* image container */}
        <CardContent sx={{display:"flex",justifyContent:"center",fontFamily:"Poppins"}}>
      <Box sx={{height:{desktop:"130px",tablet:"100px",mobile:"80px"}, 
      width:{desktop:"130px",tablet:"100px",mobile:"80px"},
      backgroundColor:"#D9D9D9",borderRadius:"50%"}}/>
      </CardContent>

      {/* details container */}
      <CardContent sx={{display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column"}}>
        <Typography
        sx={{fontSize:{desktop:"18px",
        tablet:"15px",
        mobile:"10px"}}}> {value.title}</Typography>
        <Typography variant="body2" sx={{fontSize:{desktop:"15px",
        tablet:"15px",
        mobile:"10px"}}}>
       
        {value.desc}

        </Typography>
        <Typography sx={{fontSize:{desktop:"15px",
        tablet:"13px",
        mobile:"10px"}}}> {value.company}</Typography>
      </CardContent>
     
    </Card>
   ))}

    </CardContainer>
    </InfoContainer>
    </ThemeProvider>
  )
}

export default Paws