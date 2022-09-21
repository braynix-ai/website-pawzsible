import { Container, Typography,Box, ThemeProvider } from '@mui/material'
import React from 'react'
import { BarkContainer,SupportContainer,AddressContainer } from './TeamStyle'
import { theme } from '../Styles'
const Bark = () => {
  return (
    <>
    <ThemeProvider theme={theme}>
    <BarkContainer>

      {/* heading bark at us */}
    <Typography sx={{textAlign:"center",fontFamily:"Poppins",
    fontWeight:"bolder",fontSize:{
      laptop:"40px",
      tablet:"35px",
      mobile:"25px"},
      color:"#001A80"}}>
        Bark At Us
      </Typography>

      {/* support query container */}
    <Container sx={{display:"flex",justifyContent:"space-between",
    paddingTop:"40px",paddingBottom:"40px"}}>
        <SupportContainer>

          {/* title */}
           <Typography component="div" sx={{fontFamily:"Poppins",fontWeight:"bold",marginBottom:{desktop:"30px",tablet:"20px",mobile:"15px"},fontSize:{mobile:"10px",tablet:"13px",desktop:"15px"}}}>
            We would love to hear from you!
            </Typography>

            {/* mail id */}
           <Typography sx={{fontFamily:"Poppins",
           marginBottom:{
            desktop:"30px",
            tablet:"20px",
            mobile:"10px"},
            fontSize:{mobile:"10px",tablet:"13px",desktop:"15px"}}}>
            For support related queries write to: support@xyz.com
           </Typography>

            {/* mail id */}
           <Typography sx={{fontFamily:"Poppins",marginBottom:"20px",
           fontSize:{mobile:"10px",
           tablet:"13px",
           desktop:"15px"}}}>
            For support related queries write to: support@xyz.com
           </Typography>

            {/* call details*/}
           <Typography sx={{fontFamily:"Poppins",marginBottom:"20px",fontSize:{mobile:"10px",tablet:"13px",desktop:"15px"}}}>
           or Call us on:
           <br/>
          +91 1234567890
          <br/>
          Monday to Friday: 9am to 7pm
          <br/>
          Saturday: 10am-5pm
           </Typography>

        </SupportContainer>

        {/* address and map container */}

        <AddressContainer>
            <Typography sx={{marginBottom:"10px",fontSize:{mobile:"10px",tablet:"13px",desktop:"15px"}}}>
              Office Address
          </Typography>

          {/* google map */}
            <Box
        component="img"
        sx={{
           
        width:{desktop:"350px",mobile:"180px",tablet:"260px"},
       height:{desktop:"200px",mobile:"130px",tablet:"100px"}
         
        }}
        alt=""
        src="../Assests/Mapimg.png"
      />

      {/* address */}
      <Box sx={{width:"100px"}}>
    <Typography sx={{fontSize:{mobile:"10px",tablet:"13px",desktop:"15px"}}}>
    Address:<br/>xzxefefe......
    </Typography>
      </Box>
        </AddressContainer>
    </Container>
    </BarkContainer>
    </ThemeProvider>
    </>
  )
}

export default Bark