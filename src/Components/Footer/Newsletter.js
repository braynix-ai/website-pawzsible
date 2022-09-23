import { Box, TextField, ThemeProvider, Typography } from '@mui/material';
import React from 'react';
import { theme } from '../Styles';
import { NewsContainer } from './FooterStyles';


export const Newsletter = () => {
  return (

    <ThemeProvider theme={theme}>
      <NewsContainer>
        <Box sx={{ paddingLeft: "20px" }}>

          {/* heading */}
          <Typography sx={{
            fontSize: { desktop: "1rem", tablet: "0.75rem", mobile: "0.5rem" },
            display: { desktop: "block", tablet: "block", mobile: "none" }
          }}>
            Newsletter
          </Typography>
        </Box>

        {/* subscribe mail  */}
        <Box sx={{ display: "flex", width: { desktop: "35%", mobile: "80%", tablet: "50%" }, justifyContent: "space-around", alignItems: "center" }}>

          <Typography sx={{ fontSize: { desktop: "1rem", tablet: "0.75rem", mobile: "0.5rem" } }}>
            Subscribe Newsletter </Typography>

          {/* input field for email */}
          <TextField
            label="Enter Your E-mail"
            id="outlined-size-small"

            InputProps={{ style: { height: "5vh" } }}
            InputLabelProps={{ style: { fontSize: "10px" } }}

            size="small"
          />
        </Box>
      </NewsContainer>
    </ThemeProvider>
  )
}
