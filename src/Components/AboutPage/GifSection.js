import { Box } from '@mui/material';
import React from 'react';


import Slider from 'react-slick';

const GifSection = () => {
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


    <Box sx={{ width: "100%", height: '100%', objectFit: 'contain', marginBottom: '20px' }}>

      <Slider {...settings}>

        <img src="../Assests/aboutgif.gif" alt="aboutgif" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />

      </Slider>

    </Box>

  )
}

export default GifSection