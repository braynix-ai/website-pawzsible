import { Typography,Box ,ThemeProvider} from '@mui/material'
import React from 'react'
import { theme } from '../Styles'
const Story = () => {
  return (
    <ThemeProvider theme={theme}>
    <Box sx={{width:"100%",display:'flex',justifyContent:'center',alignItems:'center',height:'50%',paddingTop:'15%',height:"100%",paddingBottom:"15%"}}>
        <Box sx={{height:'100%',
        width:"50%",textAlign:'center'}}>

          {/* heading */}
            <Typography variant='h3'
             sx={{fontFamily:'Poppins',marginBottom:'20px',color: "#B23028",fontWeight:'bolder',
          fontSize:{laptop:"40px",tablet:"35px",mobile:"30px"}}}>
            Our Story
            </Typography>

            {/* paragraph  */}
            <Typography variant='p'sx={{fontFamily:'Poppins',fontSize:{mobile:'10px',tablet:"15px",desktop:"15px"}}}>Lorem ipsum dolor sit amet, consectetur adipis
            Lorem ipsum dolor sit amet, consectetur adipis cing elit, sed do eiusmod tempor incididunt ut l
            abore et dolore magna aliqua. Ut enim ad minim v eniam, quis nostrud exercitation uecat L
            orem ipsum dolor sit amet, consectetur adipis cing elit, sed do eiusmod tempor incididunt ut l
             abore et dolore magna aliqua. Ut enim ad minim v
              eniam, quis nostrud exercitation uecat Lorem ipsum dolor sit amet, consectetur adipis
              ing elit, sed do eiusmod tempor incididunt ut l
               abore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation uecat 
             </Typography>
        </Box>
      
    </Box>

   
    </ThemeProvider>
  )
}

export default Story