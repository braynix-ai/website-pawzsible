import { Box, Typography } from '@mui/material';
import React from 'react';

import { ThemeProvider } from '@mui/system';
import { theme } from './Styles';

//Feed Your Dog Section

const Feed = () => {


  return (
    <>


      <ThemeProvider theme={theme}>
        <Box sx={{ height: "100%", width: "100%" }} Id="Feed_Your_Dog">

          {/* heading  */}
          <Typography sx={{
            textAlign: "center", fontSize: '4em', color: "#AA2D29", fontFamily: 'Poppins', fontWeight: "bolder",
            display: {
              mobile: 'none',
              tablet: "block",
              desktop: "block"
            }
          }}>Feed Your Dog</Typography>


          {/* Container */}

          <Box container sx={{
            height: '100%', display: 'flex', width: "100%",

            marginTop: '10vh', marginBottom: "5vh", fontFamily: 'Poppins',
            flexDirection: {
              mobile: "column",
              tablet: "column",
              laptop: "row",
              desktop: "row"
            },
            alignItems: {
              mobile: "center",
              tablet: "center",
              laptop: "flex-start",
              desktop: "flex-start"

            },
            justifyContent: {
              tablet: 'space-between',
              mobile: "center"
            }
          }}>

            {/*image box   */}

            <Box sx={{
              flex: 1, display: "flex", justifyContent: "center",

              alignItems: "center"
            }}>

              {/* image box (left) 1*/}

              <Box sx={{
                marginRight: "5%", display: "flex",
                justifyContent: {
                  desktop: "center",
                  tablet: 'center',
                  mobile: "center"
                }, alignItems: {
                  mobile: "center",
                  tablet: 'center',
                  desktop: "center"

                }, marginLeft: "5%"
              }}>

                {/* image */}
                <Box
                  component="img"
                  sx={{

                    height: {
                      desktop: "30vh", tablet: "20vh",
                      laptop: "25vh", mobile: "17vh"
                    },
                    width: { mobile: "20vw", tablet: "19vw", laptop: "15vw", desktop: "15vw" },
                  }}
                  alt=""
                  src="../Assests//Rectangle 47.jpg"
                />
              </Box>

              {/* image box 2 */}

              <Box sx={{
                display: 'flex', flexDirection: {
                  mobile: "row",
                  tablet: "row",
                  laptop: "column",
                  desktop: "column"
                }, justifyContent: {
                  desktop: "space-between",
                  tablet: "space-around",
                  mobile: "space-around"
                }, alignItems: {
                  mobile: "center",
                  desktop: "flex-start",
                  tablet: "center"
                }
              }} >

                {/* image 2 */}
                <Box
                  component="img"
                  sx={{

                    height: { desktop: "auto", tablet: "20vh", mobile: "17vh" },
                    width: { mobile: "25vw", tablet: "19vw", laptop: "18vw", desktop: "17vw" },
                    padding: "10px", objectFit: "content"
                  }}

                  src="../Assests//Rectangle 46.jpg"
                />

                {/* image 3 */}
                <Box
                  component="img"
                  sx={{

                    height: {
                      desktop: "auto", tablet: "20vh",
                      laptop: "23vh",
                      mobile: "17vh"
                    },
                    width: { mobile: "23vw", tablet: "19vw", laptop: "16vw", desktop: "16vw" },
                    padding: "10px"
                  }}

                  src="../Assests//Rectangle 48.jpg"
                />



              </Box>
            </Box>


            {/* Content container */}
            <Box sx={{
              flex: 1, display: "flex", flexDirection: "column",
              alignItems: {
                desktop: "flex-start",
                laptop: "flex-start",
                tablet: "center",
                mobile: "center"
              }
            }}>

              {/* title */}

              <Typography sx={{
                fontSize: {
                  desktop: "2rem",
                  tablet: "1.75rem",
                  mobile: "1.5rem"
                },
                marginTop: { mobile: "10%" }, fontFamily: "Poppins",
                fontWeight: "Bolder",
                marginBottom: { laptop: "5%", tablet: "4%", mobile: "3%" }
              }}>
                Nurture and nourish
              </Typography>

              {/* content */}
              <Box sx={{ width: "55%", alignItems: "center" }}>
                <Typography variant='subtitle' sx={{ fontSize: { desktop: "1rem", tablet: "0.75rem", mobile: "0.5rem" }, textAlign: "center" }}>
                  Lorem ipsum dolor sit amet, consectetur adipis cing elit, sed do eiusmod tempor incididunt ut l
                  abore et dolore magna aliqua. Ut enim ad minim v
                  eniam, quis nostrud exercitation uecat
                </Typography>
              </Box>


              <Typography variant='p' sx={{
                fontSize: { desktop: "1rem", tablet: "0.75rem", mobile: "10px" }, marginTop: '2%'
              }}>
                Try out the amazing options!

              </Typography>
            </Box>
          </Box>


        </Box>

      </ThemeProvider>

    </>
  )
}

export default Feed