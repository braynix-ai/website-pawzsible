import { Grid, Typography } from '@mui/material'
import React from 'react'


const FooterSection = () => {
   return (
      // <FooterContentContainer>
      //    <Grid></Grid>
      //          <Content></Content>\
      //          <Content>Categories<br/>lorem ipsum • lorem ipsum • lorem ipsum • lorem • lorem ipsum• lorem ipsum • lorem ipsum</Content>
      //          <Content>Contact<br/>
      //             loreum ipsum,lorem ipsum,loreum
      //             <br/>
      //             Telephone: +55 XX XXXX-XXXX
      //             <br/>
      //             Whatsapp: +55 XX XXXXX-XXXX
      //             <br/>
      //             E-mail: xxxxxxxx@xxxxxxx.xxx</Content>
      //          <Content>Hours Active
      //          <br/>loreum ipsum,lorem ipsum,loreum ipsum,loreum ipsum,loreum ipsum,loreum ipsum</Content>

      // </FooterContentContainer>
      <Grid container spacing={1} style={{ backgroundColor: 'black', color: 'white' }} >
         <Grid item xs={1}>

         </Grid>
         <Grid item xs={2.5} sx={{ marginTop: '10px' }}>
            <Typography sx={{ fontSize: { xs: '0.4rem', sm: '0.5rem', md: '1rem' }, fontWeight: '500' }}>
               Categories<br />lorem ipsum • lorem ipsum • lorem ipsum • lorem • lorem ipsum• lorem ipsum • lorem ipsum
            </Typography>
         </Grid>
         <Grid item xs={2.5} sx={{ marginTop: '10px' }}>
            <Typography sx={{ fontSize: { xs: '0.4rem', sm: '0.5rem', md: '1rem' }, fontWeight: '500' }}>
               Categories<br />lorem ipsum • lorem ipsum • lorem ipsum • lorem • lorem ipsum• lorem ipsum • lorem ipsum
            </Typography>
         </Grid>
         <Grid item xs={2.5} sx={{ marginTop: '10px' }}>
            <Typography sx={{ fontSize: { xs: '0.4rem', sm: '0.5rem', md: '1rem' }, fontWeight: '500' }}>
               Contact<br />
               loreum ipsum,lorem ipsum,loreum
               <br />
               Telephone: +55 XX XXXX-XXXX
               <br />
               Whatsapp: +55 XX XXXXX-XXXX
               <br />
               E-mail: xxxxxxxx@xxxxxxx.xxx
            </Typography>
         </Grid>
         <Grid item xs={2.5} sx={{ marginTop: '10px' }}>
            <Typography sx={{ fontSize: { xs: '0.4rem', sm: '0.5rem', md: '1rem' }, fontWeight: '500' }}>
               Hours Active<br />loreum ipsum,lorem ipsum,loreum ipsum,loreum ipsum,loreum ipsum,loreum ipsum
            </Typography>
         </Grid>
         <Grid item xs={1}>

         </Grid>
      </Grid>

   )
}

export default FooterSection