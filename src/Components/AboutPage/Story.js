import { Box, ThemeProvider, Typography } from '@mui/material';
import React from 'react';
import Slider from 'react-slick';

import { theme } from '../Styles';
const Story = () => {
  const settings = {
    dots: true,
    fade: true,
    infinite: true,
    arrows: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ width: "100%", height: '100%', objectFit: 'contain' }}>

        <Slider {...settings}>
          <img src="../Assests/Text here Text here Text here (2).gif" alt="aboutgif" style={{ width: '100%', height: '100%' }} />
        </Slider>

      </Box>
      <Box sx={{ width: "100%", display: 'flex', position: 'relative', justifyContent: 'center', alignItems: 'center', padding: '5%', height: "100%" }}>
        <Box sx={{
          height: '100%',
          width: "50%", textAlign: 'center'
        }}>
          <img src="../Assests/Subtract.svg"  alt="upper gif" style={{ position: 'absolute', top: '0', left: '0', width: '25vw', objectFit: 'contain', transform: `rotate(0deg)` }} />;
          {/* heading */}
          <Typography
            sx={{
              fontFamily: 'Poppins', marginBottom: '20px', color: "#B23028", fontWeight: 'bolder',
              fontSize: { laptop: "40px", tablet: "35px", mobile: "30px" }
            }}>
            Our Story
          </Typography>

          {/* paragraph  */}
          <Typography variant='p' sx={{ fontFamily: 'Poppins', fontSize: { mobile: '6px', tablet: "20px", desktop: "25px" } }}>Lorem ipsum dolor sit amet, consectetur adipis
            Lorem ipsum dolor sit amet, consectetur adipis cing elit, sed do eiusmod tempor incididunt ut l
            abore et dolore magna aliqua. Ut enim ad minim v eniam, quis nostrud exercitation uecat L
            orem ipsum dolor sit amet, consectetur adipis cing elit, sed do eiusmod tempor incididunt ut l
            abore et dolore magna aliqua. Ut enim ad minim v
            eniam, quis nostrud exercitation uecat Lorem ipsum dolor sit amet, consectetur adipis
            ing elit, sed do eiusmod tempor incididunt ut l
            abore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation uecat
          </Typography>
          <img src="../Assests/Subtract-1.svg" alt="lower gif" style={{ position: 'absolute', bottom: '0', right: '0', width: '30vw', objectFit: 'contain', transform: `rotate(0deg)` }} />;

        </Box>

      </Box>


    </ThemeProvider>
  )
}

export default Story