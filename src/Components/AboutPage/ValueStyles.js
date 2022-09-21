import { Box, Typography } from "@mui/material";
import { styled } from "@mui/system";

import { theme } from "../Styles";

export const Title = styled(Typography)(() => ({
   fontSize:'30px',
   marginBottom:'30px',
   color: "#001A80",
   fontFamily:'Poppins',
   fontWeight:'bolder',
   textAlign:"center"
   
  }));

  export const ValueContainer = styled(Box)(() => ({
    width:'100%',
    display:'flex',
    justifyContent:'space-around',
    
    
    
   }));

   export const ImageContainer = styled(Box)(() => ({
   flex:1,
   

    
    
   }));