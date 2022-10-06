import { Box } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import React from 'react';


import Typography from '@mui/material/Typography';
import { ThemeProvider } from '@mui/system';

import { theme } from "../Feed Your Dog/Styles";

const data = [
  { desc: "Lorem ipsum dolor sit amet, consectetur adipis cing elit, sed do eiusmod tempor incididunt ut " },
  { desc: "Lorem ipsum dolor sit amet, consectetur adipis cing elit, sed do eiusmod tempor incididunt ut " },
  { desc: "Lorem ipsum dolor sit amet, consectetur adipis cing elit, sed do eiusmod tempor incididunt ut " },

]
const Value = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Box sx={{
          width: '100%',
          height: "100%",
        }}>
          <Typography sx={{
            fontSize: {
              desktop: '3.5rem',
              tablet: "3rem", mobile: "2rem"
            },
            color: "#001A80",
            fontFamily: 'Poppins',
            fontWeight: 'bolder',
            textAlign: "center",
            marginBottom: '6%'
          }}>
            Our Values
          </Typography>
          <Grid container>
            <Grid item mobile={6} tablet={6} laptop={6} desktop={6} sx={{
              textAlign: 'center',
              position: 'relative'
            }}>
              <Box component="img" src="../Assests/Rectangle 67 (1).svg" sx={{
                width: {
                  mobile: '60%',
                  tablet: '60%',
                  desktop: '60%'
                },
                objectFit: 'contain',
              }}></Box>
              <Box component="img" src="../Assests/Vector41.svg" sx={{
                width: {
                  mobile: '70%',
                  tablet: '70%',
                  desktop: '70%'
                },
                objectFit: 'contain',
                position: 'absolute',
                top: '0',
                left: '0',
                zIndex: '-1'
              }}></Box>
            </Grid>
            <Grid item mobile={6} tablet={6} laptop={6} desktop={6} sx={{ position: 'relative', margin: 'auto' }}>
              <Grid conatiner>
                {data.map((value, index) => (
                  <Grid item mobile={12} tablet={12} laptop={12} desktop={12} sx={{ marginBottom: '12%', textAlign: 'left' }}>
                    {/* card content */}
                    <Box >
                      <Typography component="div" sx={{
                        fontSize: { mobile: "40%", desktop: "150%", tablet: "90%" }, width: {
                          mobile: '60%', tablet: '60%', desktop: '60%'
                        },
                      }} >
                        {value.desc}
                      </Typography>
                    </Box>
                  </Grid>
                ))}
                <Box component="img" src="../Assests/Vector43.svg" sx={{
                  width: {
                    mobile: '50%',
                    tablet: '60%',
                    desktop: '70%'
                  },
                  objectFit: 'contain',
                  position: 'absolute',
                  bottom: '0',
                  right: '0',
                  zIndex: '-1'
                }}></Box>
              </Grid>
            </Grid>
          </Grid>
          {/* image box */}
        </Box>
      </ThemeProvider >
    </>
  )
}

export default Value