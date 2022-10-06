import { Box, ThemeProvider } from '@mui/material';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Unstable_Grid2';
import React from 'react';
import Slider from 'react-slick';
import { theme } from '../Styles';
import { InfoContainer } from './TeamStyle';


const Paws = () => {
  const settings = {
    dots: false,
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
      <InfoContainer>
        {/* heading paw us */}
        <Box component="img" src="../Assests/Subtract3.svg" sx={{ position: 'absolute', top: '0', left: '0', width: { mobile: '25vw', tablet: '25vw', desktop: '25vw' } }} />
        <Typography sx={{
          textAlign: "center", fontFamily: "Poppins", fontWeight: "bolder",
          fontSize: { mobile: "1.5rem", tablet: "2.5rem", desktop: "3rem" }, color: "black",
          paddingBottom: '10%',
          paddingTop: '4%'
        }}>
          Our Paws
        </Typography>

        {/* paw card container */}

        <Grid container spacing={6}>
          <Grid item mobile={6} tablet={6} laptop={6} desktop={6} sx={{ margin: 'auto', textAlign: 'left' }}>
            <Typography sx={{ fontSize: { mobile: "1rem", tablet: "1.5rem", desktop: "1.5rem" }, fontWeight: '1000', paddingLeft: '20%', paddingBottom: '5%' }}>Name</Typography>
            <Typography sx={{ fontSize: { mobile: "0.5rem", tablet: "1rem", desktop: "1rem" }, paddingLeft: '20%' }}>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
            </Typography>
          </Grid>
          <Grid item mobile={6} tablet={6} laptop={6} desktop={6} sx={{ textAlign: 'center', margin: 'auto' }}>
            <Box component="img" src="../Assests/Vector-1t.svg" sx={{ objectFit: 'contain', textAlign: 'center', width: { mobile: '25vw', tablet: '25vw', desktop: '25vw' } }} />
          </Grid>
          <Grid item mobile={6} tablet={6} laptop={6} desktop={6} sx={{ textAlign: 'center', margin: 'auto' }}>
            <Box component="img" src="../Assests/Vector-1t.svg" sx={{ objectFit: 'contain', textAlign: 'center', width: { mobile: '25vw', tablet: '25vw', desktop: '25vw' } }} />
          </Grid>
          <Grid item mobile={6} tablet={6} laptop={6} desktop={6} sx={{ margin: 'auto', textAlign: 'right' }}>
            <Typography sx={{ fontSize: { mobile: "1rem", tablet: "1.5rem", desktop: "1.5rem" }, fontWeight: '1000', paddingRight: '20%', paddingBottom: '5%' }}>Name</Typography>
            <Typography sx={{ fontSize: { mobile: "0.5rem", tablet: "1rem", desktop: "1rem" }, paddingRight: '20%' }}>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
            </Typography>
          </Grid>

        </Grid>
      </InfoContainer>
    </ThemeProvider>
  )
}

export default Paws