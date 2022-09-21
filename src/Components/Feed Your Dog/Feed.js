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
    <Typography  sx={{textAlign:"center",fontSize:'60px',color: "#AA2D29",fontFamily:'Poppins',fontWeight:"bolder",
  display:{
    mobile:'none',
    tablet: "block",
    desktop: "block"
  }}}>Feed Your Dog</Typography>
    

   {/* Container */}
   
    <Box container  sx={{height:'100%',display:'flex', width:"100%",
    
    marginTop:'30px',marginBottom:"20px",fontFamily:'Poppins',
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

   <Box sx={{flex:1,display:"flex",justifyContent:{desktop:'center',mobile:"space-evenly"}, 
        flexDirection:{
      mobile: "row",
      tablet: "row",
      desktop: "row"
    },
    alignItems:{
      mobile: "center",
     tablet:'center',
     desktop:"center"
      
    }}}> 
 
      {/* image box (left) 1*/}

 <Box sx={{ marginRight:{desktop:"10px",tablet:"5px",mobile:"5px"},display: "flex",
      justifyContent:{
        desktop:"center",
        tablet:'center',
        mobile:"center"
      } ,alignItems:{
        mobile: "center",
       tablet:'center',
       desktop:"center"
        
      },marginLeft:'30px'}}> 

      {/* image */}
          <Box
        component="img"
        sx={{
          
          height: { desktop:"200px",mobile:"100px",tablet:"150px" },
          width: { desktop:"180px",mobile:"80px",tablet:"130px" },
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
          
          height: { desktop:"200px",mobile:"100px",tablet:"150px" },
          width: { desktop:"260px",mobile:"80px",tablet:"200px" },
         padding: "10px"
        }}
        alt="The house from the offer."
        src="../Assests//Rectangle 46.jpg"
      />

      {/* image 3 */}
      <Box
        component="img"
        sx={{
          
          height: { desktop:"200px",mobile:"100px",tablet:"160px" },
          width: { desktop:"220px",mobile:"80px",tablet:"130px" },
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
            desktop:"30px",
            tablet:"25px",
            mobile:"20px"},
            marginTop:{mobile:"20px"},fontFamily:"Poppins",
            fontWeight:"Bolder",marginBottom:"25px"
            }}>
              Nurture and nourish
        </Typography>

        {/* content */}
          <Box sx={{width:{desktop:"400px",tablet:"310px",mobile:"260px"},alignItems:"center"}}>
          <Typography variant='subtitle' sx={{fontSize:{desktop:"18px",tablet:"14px",mobile:"10px"},textAlign:"center"}}>
            Lorem ipsum dolor sit amet, consectetur adipis cing elit, sed do eiusmod tempor incididunt ut l
            abore et dolore magna aliqua. Ut enim ad minim v
             eniam, quis nostrud exercitation uecat  
          </Typography>
          </Box>
         
          
        <Typography variant='p' sx={{
           fontSize:{
            desktop:"18px",
           tablet:"14px",
           mobile:"10px"}, marginTop:'20px'}}>
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