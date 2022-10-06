
import { Box, ThemeProvider, Typography } from '@mui/material';
import React from 'react';
import { theme } from "../Styles";
import { CardContainer, CardContent, CardImage, Content, Text, Title } from "./Talkstyles";
function TalkSection() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Content>
          <Box sx={{ textAlign: 'center', fontFamily: 'poppins', paddingTop: '40px' }} >
            <Typography sx={{ fontWeight: '1000', marginBottom: '1%', fontFamily: 'poppins', fontSize: { mobile: "2rem", tablet: "3rem", desktop: "4rem" } }}>
              <b> Talk to Us! </b>
            </Typography>
            <Typography component="div" variant="p" sx={{ fontFamily: 'poppins', fontSize: { mobile: "1rem", tablet: "1.5rem", desktop: "2rem" } }}>
              <b>Now, save the travel and take Online Doctor Consultation</b>
            </Typography>
          </Box>
          <CardContainer>
            <CardContent sx={{ paddingLeft: { desktop: "80px", tablet: "60px", mobile: "10px" } }}>
              <Title sx={{ marginTop: { desktop: "40px", mobile: "20px" }, fontSize: { mobile: "1rem", tablet: "1.5rem", desktop: "2rem" } }} >We Intend to keep your Pet
                Healthy!</Title>
              <Text sx={{ paddingTop: '10px', fontSize: { mobile: "0.75rem", tablet: "1.5rem", desktop: "1.75rem" } }}>Get on a <b>Video Call</b> or have a <b>Chat</b> with a Vet! </Text>
              <Text sx={{ marginTop: "15px", fontSize: { mobile: "0.75rem", tablet: "1.5rem", desktop: "2rem" } }}>Prices start at just ₹ 199 </Text>
              <Box sx={{ display: "flex", alignItems: "center", marginTop: { desktop: "30px", tablet: "25px", mobile: "15px" } }}>
                <Box
                  component="img"
                  sx={{
                    width: { mobile: "3vw", desktop: "4wv", tablet: "3.5vw" }
                  }}
                  alt=""
                  src='../Assests/profile1.png'
                />
                <Box
                  component="img"
                  sx={{
                    width: { mobile: "3vw", desktop: "4wv", tablet: "3.5vw" }
                  }}
                  alt=""
                  src='../Assests/profile2.png'
                />

                <Text sx={{ fontSize: { mobile: "0.75rem", tablet: "1rem", desktop: "1.5rem" } }} >Over 250 Vets available!</Text>
              </Box>

              <Box sx={{ marginTop: "5%", display: "flex", justifyContent: "flex-start", fontFamily: 'poppins', bottom: '0', marginBottom: { mobile: "0", tablet: "5%", desktop: "7%" } }}>
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <Box
                    component="img"
                    sx={{
                      width: "4vw"
                    }}
                    alt=""
                    src='../Assests/Guarantee.png' />
                  <Text sx={{ fontSize: { mobile: "0.5rem", tablet: "0.75rem", desktop: "1rem" } }}>Verified Doctors</Text>
                </Box>
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <Box
                    component="img"
                    sx={{

                      width: "4vw"
                    }}
                    alt=""
                    src='../Assests/Note.png' />


                  <Text sx={{ fontSize: { mobile: "0.5rem", tablet: "0.75rem", desktop: "1rem" } }}>Digital Prescriptions</Text>

                </Box>
              </Box>
            </CardContent>

            {/* image part */}
            <CardImage >
              {/* <Box component="img" src='../Assests/Vector-6.svg'alt="background" sx={{position:'absolute',right:'%',bottom:'0',width:{mobile: "40vw", tablet: "40vw", desktop: "50vw"}, height:'100%'}}/>
  <Box component="img" src='../Assests/image 26.png' alt="image" sx={{width:{mobile: "40vw", tablet: "35vw", desktop: "40vw"},position:'absolute',bottom:'0',right:'0'}} /> */}
              <Box
                component="img"
                sx={{
                  height: {mobile:'60%',tablet:'100%'},
                  width: '100%',
                  objectFit: 'contain',
                  position: 'absolute', bottom: '0', right: '0'
                }}
                alt=""
                src='../Assests/image 26.svg' />
            </CardImage>


          </CardContainer>
        </Content>
      </ThemeProvider>
    </>
  )
}

export default TalkSection