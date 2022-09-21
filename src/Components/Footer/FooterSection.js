import { Box, ThemeProvider, Typography} from '@mui/material'
import React from 'react'
import { FooterContentContainer,FooterContent, Content } from './FooterStyles'
import { theme } from '../Styles'


const FooterSection = () => {
  return (
    <>
    
     <FooterContentContainer>
     <FooterContent>
     <Box sx={{ width:"250px"}} >
        <Content>Categories</Content>
        <Content>lorem ipsum • lorem ipsum • lorem ipsum • lorem • lorem ipsum• lorem ipsum • lorem ipsum</Content>
     </Box>
     <Box sx={{ width:'250px'}}>
        <Content>Categories</Content>
        <Content>lorem ipsum • lorem ipsum • lorem ipsum • lorem • lorem ipsum• lorem ipsum • lorem ipsum</Content>
     </Box>
     <Box sx={{width:'250px'}}>
        <Content>Contact</Content>
        <Content>
         Telephone: +55 XX XXXX-XXXX
            
           Whatsapp: +55 XX XXXXX-XXXX
E-mail: xxxxxxxx@xxxxxxx.xxx</Content>
     </Box>
     <Box sx={{maxWidth:'200px'}}>
        <Content>Hours Active</Content>
        <Content>loreum ipsum,lorem ipsum,loreum ipsum,loreum ipsum,loreum ipsum,loreum ipsum</Content>
     </Box>
    
     </FooterContent>

     </FooterContentContainer>

     {/* footer icons container */}

     

    
    
    

    </>
  )
}

export default FooterSection