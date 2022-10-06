import { Box, TextField, Typography } from '@mui/material';
import InputAdornment from '@mui/material/InputAdornment';
import Grid from '@mui/material/Unstable_Grid2';
import React from 'react';



export const Newsletter = () => {
  return (
    <Grid container sx={{ border: '1px solid yellow', padding: '3%' }}>
      <Grid item xs={3} sx={{ margin: 'auto', display: { xs: 'none', sm: 'block' } }}>
        <Box>
          <Typography sx={{ fontSize: { md: "1rem", xs: "0.75rem" } }}><b>
            Newsletter
          </b>
          </Typography>
        </Box>
      </Grid>
      <Grid item xs={12} sm={9}>
        <Box sx={{ display: "flex", alignItems: "center", justifyContent: 'flex-end', columnGap: '1%' }}>
          <Box sx={{ flex: { xs: '1', sm: 'inherit' } }}>
            <Typography sx={{ fontSize: { md: "1rem", xs: "0.75rem" } }}><b>
              Subscribe to our newsletter</b>
            </Typography>
          </Box>
          <Box >
            <TextField placeholder='Enter your e-mail' id="standard-basic" variant="standard" sx={{ border: '2px solid black', borderRadius: '2%', right: '0' }}
              InputProps={{
                sx: { height: { xs: '3vh', md: '5vh' } }, startAdornment: <InputAdornment position="start" sx={{ textAlign: 'center', fontSize: { md: "1rem", xs: "0.5rem" } }}></InputAdornment>
              }}
            />
          </Box>
        </Box>
      </Grid>
    </Grid>
    // {/* <NewsContainer>
    //   <Box sx={{flex:'0.5'}}>
    //     <Typography sx={{
    //       fontSize: { desktop: "1rem", tablet: "0.75rem", mobile: "0.5rem" },
    //       display: { desktop: "block", tablet: "block", mobile: "none" }
    //     }}><b>
    //       Newsletter
    //       </b>
    //     </Typography>
    //   </Box>
    //   <Box sx={{ display: "flex", alignItems: "center" ,justifyContent:'space-around'}}>
    //     <Box>
    //     <Typography sx={{ fontSize: { desktop: "1rem", tablet: "0.75rem", mobile: "0.5rem" },marginRight:'40px' }}><b>
    //       Subscribe to our Newsletter</b> 
    //     </Typography>
    //     </Box>
    //     <Box>
    //     <TextField id="outlined-basic" label="Enter your e-mail" variant="outlined"/>
    //     </Box>
    //   </Box>
    // </NewsContainer> */}

  )
}
