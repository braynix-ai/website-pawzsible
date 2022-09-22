import { Box, Typography,Hidden, Card ,CardMedia} from '@mui/material'
import React from 'react'

import { theme } from './Styles';
import { ThemeProvider } from '@mui/system';

//Feed Your Dog Section
  
const Feed = () => {
 
    
  return (
    <>
    
   
    <ThemeProvider theme={theme}>
    <Box sx={{height:"100%",width:"100%"}} Id="Feed_Your_Dog">

      {/* heading  */}
    <Typography  sx={{textAlign:"center",fontSize:'4em',color: "#AA2D29",fontFamily:'Poppins',fontWeight:"bolder",
  display:{
    mobile:'none',
    tablet: "block",
    desktop: "block"
  }}}>Feed Your Dog</Typography>
    

   {/* Container */}
   
    <Box container  sx={{height:'100%',display:'flex', width:"100%",
    
    marginTop:'10vh',marginBottom:"5vh",fontFamily:'Poppins',
   flexDirection:{
    mobile: "column",
    tablet: "row",
    desktop: "row"
  },
  alignItems:{
    mobile: "center",
    tablet: "flex-start",
    desktop: "flex-start"
    
  },
  justifyContent:{
    tablet:'space-between',
    mobile:"center"
  }
   }}>  

        {/*image box   */}

   <Box sx={{flex:1,display:"flex",justifyContent:"center", 
        
    alignItems:"center"}}> 
 
      {/* image box (left) 1*/}

 <Box sx={{ marginRight:"5%",display: "flex",
      justifyContent:{
        desktop:"center",
        tablet:'center',
        mobile:"center"
      } ,alignItems:{
        mobile: "center",
       tablet:'center',
       desktop:"center"
        
      }, marginLeft:"5%"}}> 

      {/* image */}
          <Box
        component="img"
        sx={{
          
          height: { desktop:"40vh",tablet:"auto",mobile:"17vh"},
          width: { desktop:"30vh",mobile:"10vh",tablet:"20vh" },
        }}
        alt=""
        src="../Assests//Rectangle 47.jpg"
      />
      </Box>

      {/* image box 2 */}
          
          <Box sx={{display:'flex' , flexDirection:{
      mobile: "row",
      tablet: "column",
      desktop: "column"
    }, justifyContent:{
      desktop:"space-between",
      tablet:"space-around",
      mobile:"space-around"
    },alignItems:{
      mobile:"center",
      desktop:"flex-start",
      tablet:"flex-start"
    }}} >

      {/* image 2 */}
      <Box
        component="img"
        sx={{
          
          height:{laptop:"auto",tablet:"20vh",mobile:"17vh"},
          width: { desktop:"45vh",mobile:"12vh",tablet:"30vh",laptop:"35vh" },
         padding: "10px"
        }}
        alt="The house from the offer."
        src="../Assests//Rectangle 46.jpg"
      />

      {/* image 3 */}
      <Box
        component="img"
        sx={{
          
          height:{laptop:"auto",tablet:"23vh",mobile:"17vh"},
          width: { desktop:"35vh",mobile:"12vh",tablet:"23vh",laptop:"30vh" },
          padding: "10px"
        }}
        alt="The house from the offer."
        src="../Assests//Rectangle 48.jpg"
      />

           
         
          </Box>
        </Box>


        {/* Content container */}
        <Box sx={{flex:1,display:"flex",flexDirection:"column", 
        alignItems:{
          desktop:"flex-start",
          tablet:"flex-start",
          mobile:"center"}
          }}>

            {/* title */}

        <Typography  sx={{ 
          fontSize:{
            desktop:"2rem",
            tablet:"1.75rem",
            mobile:"1.5rem"},
            marginTop:{mobile:"10%"},fontFamily:"Poppins",
            fontWeight:"Bolder",
            marginBottom:{laptop:"5%",tablet:"4%",mobile:"3%"}
            }}>
              Nurture and nourish
        </Typography>

        {/* content */}
          <Box sx={{width:"55%",alignItems:"center"}}>
          <Typography variant='subtitle' sx={{fontSize:{desktop:"1rem",tablet:"0.75rem",mobile:"0.5rem"},textAlign:"center"}}>
            Lorem ipsum dolor sit amet, consectetur adipis cing elit, sed do eiusmod tempor incididunt ut l
            abore et dolore magna aliqua. Ut enim ad minim v
             eniam, quis nostrud exercitation uecat  
          </Typography>
          </Box>
         
          
        <Typography variant='p' sx={{
          fontSize:{desktop:"1rem",tablet:"0.75rem",mobile:"10px"}, marginTop:'2%'}}>
         Try out the amazing options!
      
        </Typography>
        </Box>
    </Box>


   </Box>
    
    </ThemeProvider>
  
    </>
  )
}

export default Feed