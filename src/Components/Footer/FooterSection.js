import { Box } from '@mui/material'
import React from 'react'
import { Content, FooterContent, FooterContentContainer } from './FooterStyles'


const FooterSection = () => {
   return (
      <>

         <FooterContentContainer>
            <FooterContent>
               <Box sx={{ width: "25%" }} >
                  <Content>Categories</Content>
                  <Content>lorem ipsum • lorem ipsum • lorem ipsum • lorem • lorem ipsum• lorem ipsum • lorem ipsum</Content>
               </Box>
               <Box sx={{ width: '25%' }}>
                  <Content>Categories</Content>
                  <Content>lorem ipsum • lorem ipsum • lorem ipsum • lorem • lorem ipsum• lorem ipsum • lorem ipsum</Content>
               </Box>
               <Box sx={{ width: '25%' }}>
                  <Content>Contact</Content>
                  <Content>
                     loreum ipsum,lorem ipsum,loreum
                     Telephone: +55 XX XXXX-XXXX

                     Whatsapp: +55 XX XXXXX-XXXX
                     E-mail: xxxxxxxx@xxxxxxx.xxx</Content>
               </Box>
               <Box sx={{ width: '25%' }}>
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