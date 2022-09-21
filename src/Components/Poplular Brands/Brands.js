import { Box, ThemeProvider, Typography } from '@mui/material'
import React from 'react'
import {BrandContainer} from "./Brandstyle"
import { theme } from '../Styles'


// Popular brands container

const Brands = () => {
  return (
    <>
    <ThemeProvider theme={theme}>
    <BrandContainer>
   
   {/* heading */}
    <Typography sx={{fontSize:{desktop:'35px',mobile:"15px",tablet:"30px"},fontFamily:'Poppins',fontWeight:"800"}}>Popular Brands</Typography>

    {/* brands container */}
    
    <Box sx={{display:'flex',justifyContent:'space-around',width:'60%'}}>

      {/* brand image 1 */}

    <Box
        component="img"
        sx={{
          
          height:{mobile:"30px",tablet:"50px",desktop:"60px"},
          width:{mobile:"80px",desktop:"120px",tablet:"100px"}
        }}
        alt=""
        src='../Assests/Brand3.png' />

         {/* brand image 2 */}

     <Box
        component="img"
        sx={{
          
          height:{mobile:"30px",tablet:"50px",desktop:"50px"},
         
          width:{mobile:"70px",desktop:"110px",tablet:"100px"}
        }}
        alt=""
        src='../Assests/Brand2.png'
      />

       {/* brand image 3*/}

      <Box
        component="img"
        sx={{
          
          height:{mobile:"30px",tablet:"50px",desktop:"50px"},
         
          width:{mobile:"80px",desktop:"120px",tablet:"100px"}
        }}
        alt=""
        src='../Assests/Brand1.png'
      />


</Box>

    </BrandContainer>
    </ThemeProvider>
    </>
  )
}

export default Brands