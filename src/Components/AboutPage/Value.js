import { Box, Container } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import React from 'react';

import Typography from '@mui/material/Typography';
import { ThemeProvider } from '@mui/system';

import { theme } from "../Feed Your Dog/Styles";

const data = [
  { desc: "Lorem ipsum dolor sit amet, consectetur adipis cing elit, sed do eiusmod tempor incididunt ut l " },
  { desc: "Lorem ipsum dolor sit amet, consectetur adipis cing elit, sed do eiusmod tempor incididunt ut l " },
  { desc: "Lorem ipsum dolor sit amet, consectetur adipis cing elit, sed do eiusmod tempor incididunt ut l " },

]
const Value = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Box sx={{
          width: '100%',
          height: "100%",
          marginBottom: '10%'
        }}>
          <Container>

            {/* title */}

            <Typography sx={{
              fontSize: {
                desktop: '3.5rem',
                tablet: "3rem", mobile: "2rem"
              },
              marginBottom: '30px',
              color: "#001A80",
              fontFamily: 'Poppins',
              fontWeight: 'bolder',
              textAlign: "center"
            }}>
              Our Values
            </Typography>



            <Box sx={{
              width: '100%',
              display: 'flex',
              justifyContent: 'space-around',
              alignItems: { desktop: "flex-start", tablet: "center", mobile: "center" },
              flexDirection: {
                desktop: "row",
                laptop: "row",
                tablet: "column",
                mobile: "column"
              }
            }}>

              {/* image box */}
              <Box sx={{
                flex: 1,
                display: "flex",
                justifyContent: "center", alignItems: "center"
              }}>
                <Box
                  component="img"
                  sx={{

                    height: { desktop: "65vh", laptop: "60vh", mobile: '40vh', tablet: "50vh" },
                    width: {
                      mobile: "100%", desktop: "70%",
                      tablet: "80%"
                    }

                  }}
                  alt=""
                  src="../Assests/valueimg.png"
                />
              </Box>


              {/* card container */}

              <Box sx={{ flex: { desktop: "1.25", tablet: "1.25" }, display: "flex", flexDirection: "column", alignItems: { desktop: "flex-start", tablet: "center", mobile: "center", laptop: "flex-start" }, justifyContent: "flex-start", marginLeft: "3%" }}>


                {/* cards */}
                {data.map((value, index) => (
                  <Card sx={{
                    display: 'flex', marginTop: '2%', width: {
                      mobile: "90%", tablet: "70%", desktop: "70%"
                    }, fontFamily: 'Poppins', borderRadius: '13px', boxShadow: 'none', height: '30%'
                  }}>



                    {/* card content */}
                    <Box sx={{ display: 'flex' }}>
                      <CardContent sx={{ display: "flex", justifyContent: "flex-start", alignItems: "flex-start" }}>
                        <Typography component="div" variant="p" sx={{ fontSize: { mobile: "0.75rem", desktop: "1rem", tablet: "1rem" } }} >
                          {value.desc}

                        </Typography>
                      </CardContent>


                    </Box>
                  </Card>
                ))}
              </Box>


            </Box>
          </Container>
        </Box>

      </ThemeProvider>
    </>
  )
}

export default Value