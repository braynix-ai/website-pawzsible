import {
  faFacebook, faInstagram,
  faPinterest, faTwitter, faYoutube
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Box, Grid } from '@mui/material';
import React from 'react';


const FooterIcon = () => {
  return (
    <Grid container style={{ backgroundColor: 'black' }}>
      <Grid item xs={3}>
        <Box sx={{ alignItems: 'center' }}>
          <hr
            style={{
              background: 'white',
              color: 'white',
              borderColor: 'white',
            }}
          />
        </Box>
      </Grid>
      <Grid item xs={6}>
        <Box sx={{
          display: "flex",
          justifyContent: "space-evenly",
          alignItems: "center",
          width: "100%",
          height: "100px",
          backgroundColor: "black",
          color: "white",
        }}>
          <FontAwesomeIcon icon={faFacebook} />
          <FontAwesomeIcon icon={faTwitter} />
          <FontAwesomeIcon icon={faYoutube} />
          <FontAwesomeIcon icon={faInstagram} />
          <FontAwesomeIcon icon={faPinterest} />

        </Box>
      </Grid>
      <Grid item xs={3}>
        <Box sx={{ alignItems: 'center' }}>
          <hr
            style={{
              background: 'white',
              color: 'white',
              borderColor: 'white',
            }}
          />
        </Box>
      </Grid>
    </Grid>

  )
}

export default FooterIcon