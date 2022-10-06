import GroupAddIcon from '@mui/icons-material/GroupAdd';
import SettingsIcon from '@mui/icons-material/Settings';
import VideoLabelIcon from '@mui/icons-material/VideoLabel';
import { Box, Typography } from '@mui/material';
import Stack from '@mui/material/Stack';
import Step from '@mui/material/Step';
import StepConnector, { stepConnectorClasses } from '@mui/material/StepConnector';
import StepLabel from '@mui/material/StepLabel';
import Stepper from '@mui/material/Stepper';
import { styled, ThemeProvider } from '@mui/material/styles';
import PropTypes from 'prop-types';
import React from 'react';
import { theme } from '../Styles';
import Grid from '@mui/material/Unstable_Grid2';

const ColorlibConnector = styled(StepConnector)(({ theme }) => ({
  [`&.${stepConnectorClasses.alternativeLabel}`]: {
    top: 22,
  },
  [`&.${stepConnectorClasses.active}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      backgroundImage:
        " #2E58FFDE",
    },
  },
  [`&.${stepConnectorClasses.completed}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      backgroundImage:
        " #2E58FFDE",
    },
  },
  [`& .${stepConnectorClasses.line}`]: {
    marginTop: '15px',
    height: 3,
    border: 0,
    backgroundColor:
      theme.palette.mode === 'dark' ? theme.palette.grey[800] : " #D9D9D9"
    ,
    borderRadius: 1,
  },
}));

const ColorlibStepIconRoot = styled('div')(({ theme, ownerState }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? theme.palette.grey[700] : " #2E58FFDE",
  zIndex: 1,
  color: '#fff',
  width: 80,
  height: 80,
  display: 'flex',
  borderRadius: '50%',
  justifyContent: 'center',
  alignItems: 'center',
  ...(ownerState.active && {
    backgroundImage:
      " #2E58FFDE",


  }),
  ...(ownerState.completed && {
    backgroundImage:
      " #2E58FFDE",
  }),
}));

function ColorlibStepIcon(props) {
  const { active, completed, className } = props;

  const icons = {
    1: <SettingsIcon sx={{ height: '50px', width: '50px' }} />,
    2: <GroupAddIcon sx={{ height: '50px', width: '50px' }} />,
    3: <VideoLabelIcon sx={{ height: '50px', width: '50px' }} />,
  };
  return (
    <ColorlibStepIconRoot ownerState={{ completed, active }} className={className}>
      {icons[String(props.icon)]}
    </ColorlibStepIconRoot>
  );
}

ColorlibStepIcon.propTypes = {
  /**
   * Whether this step is active.
   * @default false
   */
  active: PropTypes.bool,
  className: PropTypes.string,
  /**
   * Mark the step as completed. Is passed to child components.
   * @default false
   */
  completed: PropTypes.bool,
  /**
   * The label displayed in the step icon.
   */
  icon: PropTypes.node,
};

const steps = ['Select a speciality or symptom', 'Chat/Video call with a verified doctor', 'Get a digital prescription '];
function Working() {

  return (
    <>
      <ThemeProvider theme={theme}>
        <Box sx={{ textAlign: "center", marginTop: "30px", marginBottom: "30px" }}>
          <Typography sx={{ paddingBottom: "30px", fontFamily: 'Poppins', fontSize: { desktop: "65px", mobile: "25px", tablet: "50px" }, fontWeight: "Bolder" }} >How It Works</Typography>
          <Stack sx={{ width: '100%' }} spacing={4}>
            <Stepper alternativeLabel activeStep={3} connector={<ColorlibConnector />}>
              {steps.map((label) => (
                <Step key={label}>
                  <StepLabel StepIconComponent={ColorlibStepIcon}>{label}</StepLabel>
                </Step>
              ))}
            </Stepper>
          </Stack>
        </Box>
        <Box>
          <Typography sx={{ fontSize: { desktop: "65px", mobile: "25px", tablet: "50px" }, margin: 'auto', fontWeight: '1000', fontFamily: 'poppins', textAlign: 'center', marginBottom: '3%', marginTop: '5%' }} >
            Testimonials
          </Typography>
        </Box>
        <Box component="div" sx={{ position: 'relative', width: '100%', height: '100%', margin: 'auto', alignItems: 'center' }}>
          <Box sx={{ backgroundColor: '#FFF0E3', margin: 'auto', width: '70%', alignItems: 'center', textAlign: 'center', position: 'relative' }}>
            <img src="../Assests//paw print.svg" alt="" style={{ position: 'absolute', top: '0', left: '8%', width: '5vw' }} />
            <img src="../Assests//paw print.svg" alt="" style={{ position: 'absolute', top: '10%', left: '0', width: '5vw' }} />
            <Grid container spacing={1} sx={{ padding: '5%' }}>
              <Grid item mobile={5} sx={{ textAlign: 'center', margin: 'auto' }}>
                <Box component="div" sx={{ alignItems: 'center', margin: 'auto', border: '1px solid #F8A01B', padding: '10%', borderRadius: '20px', posiiton: 'relative' }}>
                  <Box component="img" src="../Assests//Ellipse 28.svg" alt="" sx={{ width: { mobile: '30%' } }} />
                  <Typography sx={{ fontSize: { mobile: '0.5rem', tablet: '0.75rem', desktop: '1rem', fontWeight: '1000' } }}>
                    Sabrina Smith
                  </Typography>
                  <br />
                  <Typography sx={{ fontSize: { mobile: '0.5rem', tablet: '0.75rem', desktop: '0.75rem', fontWeight: '800' } }}>
                    Pet name:Annie
                  </Typography>
                  <Typography sx={{ fontSize: { mobile: '0.5rem', tablet: '0.75rem', desktop: '0.75rem', fontWeight: '800' } }}>
                    Breed name:Labrador Retriever
                  </Typography>
                  <br />
                  <Typography sx={{ fontSize: { mobile: '0.5rem', tablet: '0.75rem', desktop: '0.75rem', fontWeight: '800' } }}>
                    Grooming and Vet Care
                  </Typography>
                </Box>
              </Grid>
              <Grid item mobile={7} sx={{ textAlign: 'center' }}>
                <Typography sx={{ fontSize: { mobile: '0.5rem', tablet: '0.75rem', desktop: '1rem' }, fontWeight: 'bolder', fontFamily: 'poppins', padding: '20px', }} >
                  It was a very good experience
                </Typography>
                <Typography sx={{ fontSize: { mobile: '0.40rem', tablet: '0.75rem', desktop: '1rem' } }} >
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </Typography>
              </Grid>
            </Grid>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Box component="img" src="../Assests//Group 7.svg" alt="background" sx={{ width: { mobile: '40vw' } }} />
          </Box>
        </Box>
        <Box sx={{ marginTop: '5%' }}>
          <img src='../Assests//Add a heading.gif' alt="heading gif" style={{ height: '100%', width: '100%', objectFit: 'contain' }} />
        </Box>
      </ThemeProvider>
    </>
  )
}

export default Working