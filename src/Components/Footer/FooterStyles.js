import { Box } from "@mui/material";
import { styled } from "@mui/system";
import { theme } from "../Styles";



export const FooterContainer = styled(Box)(() => ({
    width:"100%",
    height:"100%",
      }));

 export const NewsContainer = styled(Box)(() => ({
        width:"100%",
        height:"60px",
        display:"flex",
       alignItems:"center",
       marginTop:"10px",
       paddingBottom:"10px",
        justifyContent:'space-between',
       
          }));


          export const FooterContentContainer = styled(Box)(() => ({
            width:"100%",
            height:"100%",
            display:"flex",
           alignItems:"center",
          paddingTop:'30px',
          paddingBottom:'30px',
          
          
            backgroundColor:'black'
              }));
export const FooterContent = styled(Box)(({theme}) => ({
                [theme.breakpoints.down("md")]: {
                 
                   alignItems:'center',
                   justifyContent:'space-around'
                     },
                color:'white',
                display:'flex',
                width:'100%',
                fontFamily:'Poppins',
                justifyContent:'space-around',
                alignItems:'center'
                  }));

    export const Content =styled(Box)(({theme}) => ({
        [theme.breakpoints.down("md")]: {
            fontSize:'5px'
              },
              
        fontFamily:'Poppins',
        fontSize:'small',
        paddingBottom:'10px'
        
       }));

  export const FooterCardContainer = styled(Box)(({theme}) => ({

   width:" 100%",
 height:'100%',
 paddingTop:"20px",
 paddingBottom:'20px',
  // paddingLeft:'40px',
 marginBottom:'20px',
 
   
  }));