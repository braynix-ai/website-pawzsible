
import { Box} from '@mui/material'
import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { ThemeProvider } from '@mui/system';
import Typography from '@mui/material/Typography';
//import { GroomContainer } from './GroomStyle';
import {theme} from "../Feed Your Dog/Styles"
import { data } from './GroomData';

export default function GroomSection() {
  
  return (
   <div Id='Groom_Your_Dog'>
    <ThemeProvider theme={theme}>

      {/* main container */}
    <Box container sx={{height:"100%",
    display:'flex',
    flexDirection:{
     mobile:'column',
     tablet:'row',
     desktop:'row'
    },
    alignItems:{
      moile:'column',
      tablet:'row',
      desktop:'row'
     },
    padding:'20px',
     paddingLeft:'40px',
    marginTop:'30px',
    fontFamily:'Poppins',
    marginBottom:'50px',
    }}>

      {/* image container */}
        <Box sx={{flex:"1",display:'flex',justifyContent:'center',alignItems:"center"}}>

          {/* image */}
        <Box 
        
        component="img"
        sx={{
          
          height: { desktop:"540px",mobile:"280px",tablet:"510px" },
         
          width:{mobile:"100%",desktop:"400px",tablet:"350px"}
        }}
       
        alt=""
        src='../Assests/groom img.png'/>
      
        </Box>


          {/* content container */}

        <Box sx={{ flex:{desktop:"1.25", tablet:"1"},display:"flex", flexDirection:"column",alignItems:{desktop:"flex-start",tablet:"flex-start",mobile:"center"},marginTop:{mobile:"20px"}}}>

          {/* heading */}
        <Typography sx={{fontSize:{laptop:'50px',tablet:"40px",mobile:"30px"},color: "#AA2D29",fontFamily:'Poppins',marginBottom:'10px',fontWeight:"bolder",
      display:{desktop:"block",tablet:"block",mobile:"none"}}}>
        Groom Your Dog
        </Typography>

        {/* sub-heading */}
          <h3>Our Services</h3>

          {/* cards */}
          {data.map((value,index)=>(
          <Card sx={{ display: 'flex',marginTop:'10px',width:{
            mobile:"100%",tablet:"80%",desktop:"70%"
          },fontFamily:'Poppins',borderRadius:'13px',boxShadow:'none' , height:'120px'}}>

            {/* card image */}
          <CardMedia
        component="img"
        sx={{ width:{mobile:"100px",desktop:"160px",tablet:"140px"},height:{desktop:"110px",mobile:"90px",height:"105"},borderRadius:"10px" }}
        image={value.img} />

      {/* card content */}
       <Box sx={{display:'flex'}}>
         <CardContent sx={{display:"flex",justifyContent:"flex-start",alignItems:"flex-start"}}> 
          <Typography component="div" variant="p" sx={{fontSize:{mobile:"12px",desktop:"15px",tablet:"12px"}}} >
            {value.desc}
            </Typography>
         </CardContent>
       
      
        </Box> 
    </Card>
    ))}
        </Box>
    </Box>

    
    </ThemeProvider>
   </div>
  )
}

