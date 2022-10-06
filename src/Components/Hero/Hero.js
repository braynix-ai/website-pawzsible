import { Box } from '@mui/material';
import React from 'react';
import Slider from 'react-slick';
import './HeroStyles.css';

//Hero section

const Hero = () => {
  const settings = {
    dots: true,
    fade: true,
    infinite: true,
    arrows: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    appendDots: dots => (
      <div
        style={{
          position: 'absolute',
          backgroundColor: 'transparent',
          bottom: '2%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <ul style={{ margin: '0', padding: '0' }}> {dots} </ul>
      </div>

    ),
    customPaging: i => (
      <div
        style={{
          textAlign: 'center',
          width: '0.5vw',
          height: '0.5vw',
          color: 'white',
          backgroundColor: 'white',
          border: "1px white solid",
          borderRadius: '50%',
        }}
      >
      </div>
    )
  };
  return (
    <Box sx={{ width: "100%", height: '100%', marginBottom: '20px' }}>

      <Slider {...settings}>
        <img src="../Assests/gif1.gif" style={{ width: '100%' }} alt="gif1" />
        <img src="../Assests/gif2.gif" style={{ width: '100%' }} alt="gif2" />
      </Slider>

    </Box>
  )
}

export default Hero