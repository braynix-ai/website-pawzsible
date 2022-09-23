
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
     tablet:'column',
    laptop:"row",
     desktop:'row'
    },
    alignItems:{
      moile:'column',
      tablet:'row',
      desktop:'row'
     },
    padding:'5%',
     paddingLeft:'5%',
    
    fontFamily:'Poppins',
    marginBottom:'5%',
    }}>

      {/* image container */}
        <Box sx={{flex:"1",display:'flex',justifyContent:'center',alignItems:"center"}}>

          {/* image */}
        <Box 
        
        component="img"
        sx={{
          
          height:{desktop:"auto",tablet:"70vh",
          laptop:"100vh",mobile:"50vh"},
         
          width:{mobile:"60vw",desktop:"32vw",
          tablet:"50vw"}
        }}
       
        alt=""
        src='../Assests/groom img.png'/>
      
        </Box>


          {/* content container */}

        <Box sx={{ flex:{desktop:"1.25", tablet:"1.25"},display:"flex", flexDirection:"column",alignItems:{desktop:"flex-start",tablet:"center",mobile:"center"},marginTop:{mobile:"5%"},marginLeft:"3%"}}>

          {/* heading */}
        <Typography sx={{fontSize:{desktop:"4rem",laptop:"3rem",tablet:"2rem"},color: "#AA2D29",fontFamily:'Poppins',fontWeight:"bolder",
      display:{desktop:"block",tablet:"block",mobile:"none"},
     }}>
        Groom Your Dog
        </Typography>

        {/* sub-heading */}
          <h3>Our Services</h3>

          {/* cards */}
          {data.map((value,index)=>(
          <Card sx={{ display: 'flex',marginTop:'2%',width:{
            mobile:"90%",tablet:"80%",desktop:"70%"
          },fontFamily:'Poppins',borderRadius:'13px',boxShadow:'none' , height:'30%'}}>

            {/* card image */}
          <CardMedia
        component="img"
        sx={{ width:"20vw",height:{desktop:"18vh",mobile:"12vh",tablet:"18vh"},borderRadius:"10px" }}
        image={value.img} />

      {/* card content */}
       <Box sx={{display:'flex'}}>
         <CardContent sx={{display:"flex",justifyContent:"flex-start",alignItems:"flex-start"}}> 
          <Typography component="div" variant="p" sx={{fontSize:{mobile:"10px",desktop:"15px",tablet:"1rem"}}} >
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

