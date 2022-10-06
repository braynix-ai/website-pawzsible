import { Box, ThemeProvider, Typography } from '@mui/material'
import React from 'react'
import { theme } from '../Styles'
import { BrandContainer } from "./Brandstyle"



// Popular brands container

const Brands = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <BrandContainer sx={{ marginTop: '80px' }}>

          {/* heading */}
          <Typography sx={{ fontSize: { desktop: '2rem', mobile: "1rem", tablet: "1.5rem" }, fontFamily: 'Poppins', fontWeight: "800" }}>Popular Brands</Typography>

          {/* brands container */}

          <Box sx={{ display: 'flex', justifyContent: 'space-around', width: '60%', alignItems: "center" }}>

            {/* brand image 1 */}

            <Box
              component="img"
              sx={{
                height: {
                  mobile: "5vh", tablet: '6vh',
                  laptop: "8vh", desktop: "15vh"
                },
                width: "11vw",
                
              }}
              alt=""
              src='../Assests/Brand3_adobe_express.svg' />

            {/* brand image 2 */}

            <Box
              component="img"
              sx={{

                height: {
                  mobile: "4vh", tablet: '8vh',
                  laptop: "10vh", desktop: "13vh"
                },
                width: "15vw"
              }}
              alt=""
              src='../Assests/Brand2.png'
            />

            {/* brand image 3*/}

            <Box
              component="img"
              sx={{

                height: { mobile: "3vh", tablet: '6vh', laptop: "10vh", desktop: "13vh" },
                width: "15vw"
              }}
              alt=""
              src='../Assests/Brand1.png'
            />


          </Box>

        </BrandContainer>
      </ThemeProvider>
    </>
  )
}

export default Brands