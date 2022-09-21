import { Box, Container } from '@mui/material'
import React from 'react'
import Slider from 'react-slick';

//Hero section

const Hero = () => {
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
    <Box sx={{width:"100%",height:'100%',marginBottom:'20px'}}>
        
       <Slider {...settings}>
         
        <img src="../Assests/gif1.gif" style={{width:'100%',height:'400px'}}/>
        <img src="../Assests/gif2.gif" style={{width:'100%',height:'400px'}}/>
        </Slider>
       
    </Box>
  )
}

export default Hero