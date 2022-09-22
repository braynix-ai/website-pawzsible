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
        fontSize:{mobile:"1.5rem",tablet:"2.5rem",desktop:"3rem"},color:"#001A80"}}>
          Our Paws
          </Typography>

          {/* paw card container */}

        <CardContainer>
        {data.map((value,index)=>(
     <Card sx={{ maxWidth: 300,boxShadow:"none"}}key={index}>

      {/* image container */}
        <CardContent sx={{display:"flex",justifyContent:"center",fontFamily:"Poppins"}}>
      <Box sx={{height:{desktop:"25vh",tablet:"20vh",mobile:"15vh"}, 
      width:{desktop:"25vh",tablet:"20vh",mobile:"15vh"},
      backgroundColor:"#D9D9D9",borderRadius:"50%"}}/>
      </CardContent>

      {/* details container */}
      <CardContent sx={{display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column"}}>
        <Typography
        sx={{fontSize:{mobile:"0.5rem",tablet:"0.75rem",desktop:"1rem"}}}> {value.title}</Typography>
        <Typography variant="body2" sx={{fontSize:{mobile:"0.5rem",tablet:"0.75rem",desktop:"1rem"}}}>
       
        {value.desc}

        </Typography>
        <Typography sx={{fontSize:{mobile:"0.5rem",tablet:"0.75rem",desktop:"1rem"}}}> {value.company}</Typography>
      </CardContent>
     
    </Card>
   ))}

    </CardContainer>
    </InfoContainer>
    </ThemeProvider>
  )
}

export default Paws