import { Box, Typography } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';

// import React from 'react';

import { ThemeProvider } from '@mui/system';
import { theme } from './Styles';

// //Feed Your Dog Section

// const Feed = () => {


//   return (
//     <>


//       <ThemeProvider theme={theme}>
//         <Box sx={{ height: "100%", width: "100%" }} Id="Feed_Your_Dog">

//           {/* heading  */}
//           <Typography sx={{
//             textAlign: "center", fontSize: '4em', color: "#AA2D29", fontFamily: 'Poppins', fontWeight: "bolder",
//             display: {
//               mobile: 'none',
//               tablet: "block",
//               desktop: "block"
//             }
//           }}>Feed Your Dog</Typography>


//           {/* Container */}

//           <Box container sx={{
//             height: '100%', display: 'flex', width: "100%",

//             marginTop: '10vh', marginBottom: "5vh", fontFamily: 'Poppins',
//             flexDirection: {
//               mobile: "column",
//               tablet: "column",
//               laptop: "row",
//               desktop: "row"
//             },
//             alignItems: {
//               mobile: "center",
//               tablet: "center",
//               laptop: "flex-start",
//               desktop: "flex-start"

//             },
//             justifyContent: {
//               tablet: 'space-between',
//               mobile: "center"
//             }
//           }}>

//             {/*image box   */}

//             <Box sx={{
//               flex: 1, display: "flex", justifyContent: "center",

//               alignItems: "center"
//             }}>

//               {/* image box (left) 1*/}

//               <Box sx={{
//                 marginRight: "5%", display: "flex",
//                 justifyContent: {
//                   desktop: "center",
//                   tablet: 'center',
//                   mobile: "center"
//                 }, alignItems: {
//                   mobile: "center",
//                   tablet: 'center',
//                   desktop: "center"

//                 }, marginLeft: "5%"
//               }}>

//                 {/* image */}
//                 <Box
//                   component="img"
//                   sx={{

//                     height: {
//                       desktop: "30vh", tablet: "20vh",
//                       laptop: "25vh", mobile: "17vh"
//                     },
//                     width: { mobile: "20vw", tablet: "19vw", laptop: "15vw", desktop: "15vw" },
//                   }}
//                   alt=""
//                   src="../Assests//Rectangle 47.jpg"
//                 />
//               </Box>

//               {/* image box 2 */}

//               <Box sx={{
//                 display: 'flex', flexDirection: {
//                   mobile: "row",
//                   tablet: "row",
//                   laptop: "column",
//                   desktop: "column"
//                 }, justifyContent: {
//                   desktop: "space-between",
//                   tablet: "space-around",
//                   mobile: "space-around"
//                 }, alignItems: {
//                   mobile: "center",
//                   desktop: "flex-start",
//                   tablet: "center"
//                 }
//               }} >

//                 {/* image 2 */}
//                 <Box
//                   component="img"
//                   sx={{

//                     height: { desktop: "auto", tablet: "20vh", mobile: "17vh" },
//                     width: { mobile: "25vw", tablet: "19vw", laptop: "18vw", desktop: "17vw" },
//                     padding: "10px", objectFit: "content"
//                   }}

//                   src="../Assests//Rectangle 46.jpg"
//                 />

//                 {/* image 3 */}
//                 <Box
//                   component="img"
//                   sx={{

//                     height: {
//                       desktop: "auto", tablet: "20vh",
//                       laptop: "23vh",
//                       mobile: "17vh"
//                     },
//                     width: { mobile: "23vw", tablet: "19vw", laptop: "16vw", desktop: "16vw" },
//                     padding: "10px"
//                   }}

//                   src="../Assests//Rectangle 48.jpg"
//                 />



//               </Box>
//             </Box>


//             {/* Content container */}
//             <Box sx={{
//               flex: 1, display: "flex", flexDirection: "column",
//               alignItems: {
//                 desktop: "flex-start",
//                 laptop: "flex-start",
//                 tablet: "center",
//                 mobile: "center"
//               }
//             }}>

//               {/* title */}

//               <Typography sx={{
//                 fontSize: {
//                   desktop: "2rem",
//                   tablet: "1.75rem",
//                   mobile: "1.5rem"
//                 },
//                 marginTop: { mobile: "10%" }, fontFamily: "Poppins",
//                 fontWeight: "Bolder",
//                 marginBottom: { laptop: "5%", tablet: "4%", mobile: "3%" }
//               }}>
//                 Nurture and nourish
//               </Typography>

//               {/* content */}
// <Box sx={{ width: "55%", alignItems: "center" }}>
//   <Typography variant='subtitle' sx={{ fontSize: { desktop: "1rem", tablet: "0.75rem", mobile: "0.5rem" }, textAlign: "center" }}>
//     Lorem ipsum dolor sit amet, consectetur adipis cing elit, sed do eiusmod tempor incididunt ut l
//     abore et dolore magna aliqua. Ut enim ad minim v
//     eniam, quis nostrud exercitation uecat
//   </Typography>
// </Box>


//               <Typography variant='p' sx={{
//                 fontSize: { desktop: "1rem", tablet: "0.75rem", mobile: "10px" }, marginTop: '2%'
//               }}>
//                 Try out the amazing options!

//               </Typography>
//             </Box>
//           </Box>


//         </Box>

//       </ThemeProvider>

//     </>
//   )
// }

// export default Feed



const Feed = () => {

  return (
    <ThemeProvider theme={theme}>
      <Typography sx={{
        textAlign: "center", fontSize: { desktop: "4rem", tablet: "3rem", mobile: "2rem" }, color: "#AA2D29", fontFamily: 'Poppins', fontWeight: "bolder",
      }}>Feed Your Dog</Typography>
      <Grid container sx={{ marginTop: '50px' }}>
        <Grid item mobile={6} tablet={6} laptop={6} desktop={6} >
          <div style={{ position: 'relative', top: '0', left: '0' }}>
            <img src="../Assests//Vector-10.svg" alt="background" style={{ position: 'relative', top: '0', left: '0', width: '40vw' }} />
            <img src="../Assests//Rectangle 47.jpg" alt="first dog" style={{ position: 'absolute', top: '25%', left: '18%', width: '15vw' }} />
            <img src='../Assests//Rectangle 46.jpg' alt="second image" style={{ position: 'absolute', top: '0px', left: '50%', width: '20vw' }} />
            <img src='../Assests//Rectangle 48.jpg' alt="third image" style={{ position: 'absolute', top: '50%', left: '50%', width: '20vw' }} />
          </div>
        </Grid>
        <Grid item mobile={6} tablet={6} laptop={6} desktop={6}>
          <Box sx={{ display: "flex", flexDirection: "column", alignItems: "flex-start" }}>
            <Typography sx={{
              fontSize: { desktop: "3rem", tablet: "2.5rem", laptop: '3rem', mobile: "1rem" }, fontFamily: "Poppins",
              fontWeight: "1000",
              marginBottom: '5%'
            }}>
              Nurture and nourish
            </Typography>
            <Box sx={{ alignItems: "center", width: '85%' }}>
              <Typography variant='subtitle' sx={{ fontSize: { desktop: "2rem", tablet: "1rem", laptop: '1.5rem', mobile: "0.75rem" }, textAlign: "center" }}>
                Lorem ipsum dolor sit amet, consectetur adipis cing elit, sed do eiusmod tempor incididunt ut l
                abore et dolore magna aliqua. Ut enim ad minim v
                eniam, quis nostrud exercitation uecat
              </Typography>
            </Box>


            <Typography variant='p' sx={{
              fontSize: { desktop: "2rem", tablet: "1rem", laptop: '1.5rem', mobile: "0.75rem" }, marginTop: '8%'
            }}>
              Try out the amazing options!

            </Typography>
          </Box>
        </Grid>
        <Grid item mobile={6} tablet={6} laptop={6} desktop={6} sx={{ marginTop: '10%' }}>
          <Box sx={{ display: "flex", flexDirection: "column", alignItems: "flex-start", marginLeft: '10%' }}>
            <Typography sx={{
              fontSize: { desktop: "3rem", tablet: "2.5rem", laptop: '3rem', mobile: "1rem" }, fontFamily: "Poppins",
              fontWeight: "1000",
              marginBottom: '8%'
            }}>
              Food {"&"} Care
            </Typography>
            <Box sx={{ alignItems: "center", width: '85%' }} >
              <Typography variant='subtitle' sx={{ fontSize: { desktop: "2rem", tablet: "1rem", laptop: '1.5rem', mobile: "0.75rem" }, textAlign: "center" }}>
                Lorem ipsum dolor sit amet, consectetur adipis cing elit, sed do eiusmod tempor incididunt ut l
                abore et dolore magna aliqua. Ut enim ad minim v
                eniam, quis nostrud exercitation uecat
              </Typography>
            </Box>
          </Box>
        </Grid>
        <Grid mobile={6} tablet={6} laptop={6} desktop={6} sx={{ marginTop: '50px' }}>
          <div style={{ position: 'relative', top: '0', left: '0' }}>
            <img src="../Assests//Vector-5.svg" alt="background1" style={{ position: 'relative', top: '0', left: '20%', width: '35vw' }} />
            <img src="../Assests//Rectangle 169.svg" alt="first dog1" style={{ position: 'absolute', top: '10%', left: '10%', width: '18vw' }} />
            <img src='../Assests//Rectangle 170.svg' alt="second image1" style={{ position: 'absolute', top: '40%', left: '30%', width: '15vw' }} />
            <img src='../Assests//Rectangle 171.svg' alt="third image1" style={{ position: 'absolute', top: '20%', left: '50%', width: '15vw' }} />
          </div>
        </Grid>
        <Grid mobile={6} tablet={6} laptop={6} desktop={6} sx={{ marginTop: '50px' }}>
          <div style={{ position: 'relative', top: '0', left: '0' }}>
            <img src="../Assests//Vector-1.svg" alt="background2" style={{ position: 'relative', top: '0', left: '0', width: '35vw' }} />
            <img src="../Assests//Rectangle 166.svg" alt="first dog2" style={{ position: 'absolute', top: '10%', left: '10%', width: '20vw' }} />
            <img src='../Assests//Rectangle 167.svg' alt="second image2" style={{ position: 'absolute', top: '45%', left: '40%', width: '15vw' }} />
            <img src='../Assests//Rectangle 168.svg' alt="third image2" style={{ position: 'absolute', top: '22%', left: '50%', width: '15vw' }} />
          </div>
        </Grid>
        <Grid mobile={6} tablet={6} laptop={6} desktop={6} sx={{ marginTop: '50px' }}>
          <Box sx={{ display: "flex", flexDirection: "column", alignItems: "flex-start", justifyContent: 'center' }}>
            <Typography sx={{
              fontSize: { desktop: "3rem", tablet: "2.5rem", laptop: '3rem', mobile: "1rem" }, fontFamily: "Poppins",
              fontWeight: "1000",
              marginBottom: '5%'
            }}>
              Medicines {"&"} Health
            </Typography>
            <Box sx={{ alignItems: "center", width: '85%' }}>
              <Typography variant='subtitle' sx={{ fontSize: { desktop: "2rem", tablet: "1rem", laptop: '1.5rem', mobile: "0.75rem" }, textAlign: "center" }}>
                Lorem ipsum dolor sit amet, consectetur adipis cing elit, sed do eiusmod tempor incididunt ut l
                abore et dolore magna aliqua. Ut enim ad minim v
                eniam, quis nostrud exercitation uecat
              </Typography>
            </Box>
          </Box>
        </Grid>
        <Grid item mobile={6} tablet={6} laptop={6} desktop={6} sx={{ marginTop: '50px' }}>
          <Box sx={{ display: "flex", flexDirection: "column", alignItems: "flex-start", marginLeft: '10%' }}>
            <Typography sx={{
              fontSize: { desktop: "3rem", tablet: "2.5rem", laptop: '3rem', mobile: "1rem" }, fontFamily: "Poppins",
              fontWeight: "1000",
              marginBottom: '8%'
            }}>
              Pet Accessories
            </Typography>
            <Box sx={{ alignItems: "center", width: '85%' }}>
              <Typography variant='subtitle' sx={{ fontSize: { desktop: "2rem", tablet: "1rem", laptop: '1.5rem', mobile: "0.75rem" }, textAlign: "center" }}>
                Lorem ipsum dolor sit amet, consectetur adipis cing elit, sed do eiusmod tempor incididunt ut l
                abore et dolore magna aliqua. Ut enim ad minim v
                eniam, quis nostrud exercitation uecat
              </Typography>
            </Box>
          </Box>
        </Grid>
        <Grid item mobile={6} tablet={6} laptop={6} desktop={6} sx={{ marginTop: '50px' }}>
          <div style={{ position: 'relative', top: '0', left: '0' }}>
            <img src="../Assests//Vector-2.svg" alt="background3" style={{ position: 'relative', top: '0', left: '10%', width: '40vw' }} />
            <img src="../Assests//Rectangle 172.svg" alt="first dog3" style={{ position: 'absolute', top: '15%', left: '20%', width: '18vw' }} />
            <img src='../Assests//Rectangle 173.svg' alt="second image3" style={{ position: 'absolute', top: '50%', left: '45%', width: '15vw' }} />
            <img src='../Assests//Rectangle 174.svg' alt="third image3" style={{ position: 'absolute', top: '15%', left: '60%', width: '15vw' }} />
          </div>
        </Grid>

      </Grid>
    </ThemeProvider >

  )

}


export default Feed;