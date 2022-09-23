
import { Container ,Box,Typography,Grid, ThemeProvider} from '@mui/material'
import React from 'react'
import {Content,CardContainer,CardContent,CardImage,Title,Text} from "./Talkstyles"
import CardMedia from '@mui/material/CardMedia';
import {theme} from "../Styles"
function TalkSection() {
  return (
   <>
  <ThemeProvider theme={theme}>
 <Content>
  <Box sx={{textAlign:'center',margin:"30px 0",fontFamily:'poppins',padding:'10px'}} >
    <Typography component="div" variant="h4" sx={{fontWeight:'bolder',marginBottom:'3%',fontSize:{mobile:"25px",tablet:"30px",desktop:"40px"}}}>
          Talk to Us

          </Typography>

    <Typography component="div" variant="p" sx={{fontFamily:'poppins',fontSize:{mobile:"13px",tablet:"15px",desktop:"19px"}}}>
    Now, save the travel and take Online Doctor Consultation

          </Typography>
    </Box>
    <CardContainer>

    
        
    <CardContent sx={{paddingLeft:{desktop:"80px",tablet:"60px",mobile:"10px"}}}>
        <Title sx={{marginTop:{desktop:"40px",mobile:"20px"},fontSize:{desktop:"30px",tablet:"25px",mobile:"15px"}}} >We Intend to keep your Dog
Healthy!</Title>
<Text sx={{paddingTop:'10px',fontSize:{desktop:"15px",tablet:"14px",mobile:"9px"}}}>Get on a Video Call or have a Chat with a Vet! </Text>
<Text sx={{marginTop:"15px",fontSize:{desktop:"15px",tablet:"14px",mobile:"9px"}}}>Prices start at just ₹ 199 </Text>
<Box sx={{display:"flex", alignItems:"center",marginTop:{desktop:"30px",tablet:"25px",mobile:"15px"}}}>
<Box
        component="img"
        sx={{
          
          height: { desktop:"25px",mobile:"3vh",tablet:"20px" },
         
          width:{mobile:"18px",desktop:"25px",tablet:"20px"}
        }}
        alt=""
        src='../Assests/profile1.png'
      />
      <Box
        component="img"
        sx={{
          
          height: { desktop:"25px",mobile:"18px",tablet:"20px" },
         
          width:{mobile:"18px",desktop:"25px",tablet:"20px"}
        }}
        alt=""
        src='../Assests/profile2.png'
      />
    
<Text sx={{fontSize:{desktop:"15px",tablet:"14px",mobile:"9px"}}} >Over 250 Vets available!</Text>
</Box>

<Box sx={{marginTop:"5%", display:"flex",justifyContent:"flex-start", width:"30vw",fontFamily:'poppins'}}>
    <Box sx={{display:"flex",alignItems:"center"}}>
    <Box
        component="img"
        sx={{
          
         height:"auto",
         
          width:"2vw"
        }}
        alt=""
        src='../Assests/Guarantee.png'/>
    
      
   
<Text sx={{fontSize:{desktop:"0.75",tablet:"0.5rem",mobile:"0.25rem"}}}>Verified Doctors</Text>
</Box>
<Box sx={{display:"flex",alignItems:"center"}}>
<Box
        component="img"
        sx={{
          
          height: "auto",
         
          width:"2vw"
        }}
        alt=""
        src='../Assests/Note.png'/>
    

<Text sx={{fontSize:{desktop:"0.75",tablet:"0.5rem",mobile:"0.25rem"}}}>Digital Prescriptions</Text>

</Box>
</Box>
</CardContent>
   
    {/* image part */}
   <CardImage >
     
      <Box
        component="img"
        sx={{
          
          height:"auto",
         
          width:"45vw"
        }}
        alt=""
        src='../Assests/image 26.png'/>
        </CardImage>

    
    </CardContainer>
    </Content>
    </ThemeProvider>
   </>
  )
}

export default TalkSection