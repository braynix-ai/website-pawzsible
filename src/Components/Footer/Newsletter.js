import { TextField, Typography,Box, ThemeProvider } from '@mui/material'
import React from 'react'
import { theme } from '../Styles';
import { NewsContainer } from './FooterStyles'


export const Newsletter = () => {
  return (

    <ThemeProvider theme={theme}>
    <NewsContainer>
        <Box sx={{paddingLeft:"20px"}}>

          {/* heading */}
        <Typography sx={{fontSize:{desktop:"medium",tablet:"15px",mobile:"10px"},
        display:{desktop:"block",tablet:"block",mobile:"none"}}}>
          Newsletter
          </Typography>
          </Box>

        {/* subscribe mail  */}
        <Box sx={{display:"flex", width:{desktop:"450px",mobile:"350px",tablet:"400px"},justifyContent:"space-around",alignItems:"center"}}>

        <Typography sx={{fontSize:{desktop:"medium",tablet:"15px",mobile:"10px"}}}>
          Subscribe Newsletter </Typography>

        {/* input field for email */}
        <TextField 
          label="Enter Your E-mail"
          id="outlined-size-small"
         
            InputProps={{ style: { height: "30px"}  }}
            InputLabelProps={{ style: { fontSize:"10px" } }}
         
          size="small"
        />
        </Box>
    </NewsContainer>
    </ThemeProvider>
  )
}
