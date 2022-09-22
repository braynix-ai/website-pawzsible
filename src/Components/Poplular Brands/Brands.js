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
    <Typography sx={{fontSize:{desktop:'2rem',mobile:"1rem",tablet:"1.75rem"},fontFamily:'Poppins',fontWeight:"800"}}>Popular Brands</Typography>

    {/* brands container */}
    
    <Box sx={{display:'flex',justifyContent:'space-around',width:'60%'}}>

      {/* brand image 1 */}

    <Box
        component="img"
        sx={{
          height:{mobile:"8vh",tablet:'12vh',desktop:"15vh"},
          width:{mobile:"12vh",tablet:"16vh",desktop:"20vh"}
        }}
        alt=""
        src='../Assests/Brand3.png' />

         {/* brand image 2 */}

     <Box
        component="img"
        sx={{
          
         height:{mobile:"8vh",tablet:'11vh',desktop:"13vh"},
         width:{mobile:"12vh",tablet:"16vh",desktop:"20vh"}
        }}
        alt=""
        src='../Assests/Brand2.png'
      />

       {/* brand image 3*/}

      <Box
        component="img"
        sx={{
          
          height:{mobile:"7vh",tablet:'10vh',desktop:"13vh"},
          width:{mobile:"12vh",tablet:"16vh",desktop:"20vh"}
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