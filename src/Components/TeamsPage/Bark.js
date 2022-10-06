import { Box, Container, ThemeProvider, Typography } from '@mui/material'
import React from 'react'
import { theme } from '../Styles'
import { AddressContainer, BarkContainer, SupportContainer } from './TeamStyle'
const Bark = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <BarkContainer>
          <Box
            component="img"
            sx={{
              position: 'absolute',
              top: '20%',
              right: '0',
              width: "25%",
              objectFit: 'contain'

            }}
            alt=""
            src="../Assests/Subtract2.svg"
          />
          {/* heading bark at us */}
          <Typography sx={{
            textAlign: "center", fontFamily: "Poppins",
            fontWeight: "bolder", fontSize: { mobile: "1.5rem", tablet: "2.5rem", desktop: "3rem" },
            color: "#001A80"
          }}>
            Bark At Us
          </Typography>

          {/* support query container */}
          <Container sx={{
            display: "flex", justifyContent: "space-around",
            paddingTop: "40px", paddingBottom: "40px"
          }}>
            <SupportContainer>

              {/* title */}
              <Typography component="div" sx={{ fontFamily: "Poppins", fontWeight: "1000", marginBottom: { desktop: "30px", tablet: "20px", mobile: "15px" }, fontSize: { mobile: "0.75rem", tablet: "1rem", desktop: "1.2rem" } }}>
                We would love to hear from you!
              </Typography>

              {/* mail id */}
              <Typography sx={{
                fontFamily: "Poppins",
                marginBottom: {
                  desktop: "30px",
                  tablet: "20px",
                  mobile: "10px"
                },
                fontSize: { mobile: "0.5rem", tablet: "0.75rem", desktop: "1.2rem" }
              }}>
                For support related queries write to: <br /><span style={{ color: 'blue' }}>support@xyz.com</span>
              </Typography>

              {/* mail id */}
              <Typography sx={{
                fontFamily: "Poppins", marginBottom: "20px",
                fontSize: { mobile: "0.5rem", tablet: "0.75rem", desktop: "1.2rem" }
              }}>
                For support related queries write to: <br /><span style={{ color: 'blue' }}>support@xyz.com</span>
              </Typography>

              {/* call details*/}
              <Typography sx={{ fontFamily: "Poppins", marginBottom: "20px", fontSize: { mobile: "0.5rem", tablet: "0.75rem", desktop: "1.2rem" } }}>
                or Call us on:
                <br />
                <b>+91 1234567890</b>
                <br />
                Monday to Friday: 9am to 7pm
                <br />
                Saturday: 10am-5pm
              </Typography>

            </SupportContainer>

            {/* address and map container */}

            <AddressContainer>
              <Typography sx={{ marginBottom: "10px", fontSize: { mobile: "0.5rem", tablet: "0.75rem", desktop: "1.2rem" }, fontWeight: '1000' }}>
                Office Address
              </Typography>
              {/* google map */}
              <Box
                component="img"
                sx={{
                  height: { desktop: "40vh", mobile: "20vh", tablet: "30vh" }
                }}
                alt=""
                src="../Assests/Mapimg.png"
              />

              {/* address */}
              <Box sx={{ width: "100px" }}>
                <Typography sx={{ fontSize: { mobile: "0.5rem", tablet: "0.75rem", desktop: "1.2rem" } }}>
                  Address:<br />xzxefefe......
                </Typography>
              </Box>
            </AddressContainer>
          </Container>
        </BarkContainer>
      </ThemeProvider>
    </>
  )
}

export default Bark