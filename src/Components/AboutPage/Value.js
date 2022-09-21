import { Box, Container, Paper} from '@mui/material'
import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

import { ThemeProvider } from '@mui/system';
import Typography from '@mui/material/Typography';

import {theme} from "../Feed Your Dog/Styles"
import { data } from '../Groom You Dog/GroomData';
import { Title,ValueContainer } from './ValueStyles';

const Value = () => {
  return (
   <>
    <ThemeProvider theme={theme}>
       <Box sx={{
        width:'100%',
        height:"100%",
        marginBottom:'50px'
       }}>
        <Container>
       
       <Title>Our Values</Title>
      <ValueContainer>

        {/* image box */}
      <Box
        component="img"
        sx={{
            flex:1,
          height:{desktop: "540px",mobile:'210px',tablet:"480px"},
          width:{desktop: "440px",mobile:'200px',tablet:"250px",},
         
        }}
        alt=""
        src="../Assests/valueimg.png"
      />
     
        <Box sx={{ flex:1.5,marginLeft:{desktop:'30px',mobile:"5px"}}}>
          
          {data.map((value,index)=>(
          <Card sx={{ width:{desktop:"60%",laptop:"50%",tablet:"60%",mobile:"100%"}
          ,fontFamily:'Poppins',borderRadius:'13px',boxShadow:'none',
          height:{mobile:"60px",desktop:"180px",tablet:"140px"}}}>
         
      
         <CardContent> 
          <Typography component="div" variant="p" sx={{fontSize:{mobile:"7px",desktop:"18px",tablet:"15px"}}} >
         {value.desc}

          </Typography>
         
        </CardContent>
       
      
       
    </Card>
    ))}
        </Box>
      </ValueContainer>
      </Container>
       </Box>
    
    </ThemeProvider>
   </>
  )
}

export default Value