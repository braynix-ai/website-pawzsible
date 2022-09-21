import { Box, ThemeProvider, Typography } from '@mui/material'
import React from 'react'
import { FooterCardContainer } from './FooterStyles'
import { theme } from '../Styles'
const FooterCards = () => {

    const Images=[
        {img:"../Assests/image 15.png"},
        {img:"../Assests/image 16.png"},
        {img:"../Assests/image 17.png"},
        {img:"../Assests/image 18.png"},
        {img:"../Assests/image 20.png"},
       
       
    ]
  return (
    <ThemeProvider theme={theme}>
    <FooterCardContainer>
        
    <Typography sx={{marginBottom:'10px',fontFamily:'Poppins',marginLeft:'40px'}}>
      We Accept
    </Typography>
    <Box  sx={{display:'flex',width:{desktop:"300px",mobile:"200px"},justifyContent:'flex-start', marginLeft:'40px'}} >
     {Images.map((value,index)=>(
    <Box key={index}>

      {/* cards images */}
    <Box 
        
       component="img"
        sx={{
          
          height: { desktop:"35px",mobile:"20px",tablet:"30px" },
         paddingLeft:"5px",
          width:"auto"
        }}
       
        alt=""
        src={value.img}/>
           
            
            </Box>
            ))}
            </Box> 
           
    </FooterCardContainer>
    </ThemeProvider>
  )
}

export default FooterCards