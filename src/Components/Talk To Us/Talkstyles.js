import { Box, Typography } from "@mui/material";
import { styled } from "@mui/system";

import { theme } from "../Styles";

export const Content = styled(Box)(() => ({
    width: "100%",
    height: "100%",
    paddingBottom:'20px'
   
  }));

  export const CardContainer = styled(Box)(({theme})=>({
    [theme.breakpoints.down("sm")]: {
       
        flexDirection:"column",
        justifyContent:"flex-start"
        
     },

    height:"100%",
    backgroundColor: " #FFF0E3 ",
    display:"flex",
    
   
  }))

  export const CardContent = styled(Box)(({theme})=>({
    [theme.breakpoints.down("md")]: {
       
       
       height:'200px',
       flex:1
       
        
     },

     fontFamily:'poppins',
   flex:1,
   display: "flex",
   flexDirection:'column',
 
    

 
  }))

  export const CardImage = styled(Box)(({theme})=>({
    [theme.breakpoints.down("md")]: {
      
     height:'200px'
      
   },
   flex:1,
   display:"flex",
   justifyContent:"center"
  
   }))

   export const Title = styled(Typography)(()=>({
   
  fontFamily:'poppins',
  fontWeight:'bolder'
   }))

   export const Text = styled(Typography)(({theme})=>({
    [theme.breakpoints.down("md")]: {
       
        fontSize:"10px",
        
     },

     fontFamily:'poppins',fontSize:"small"
   }))