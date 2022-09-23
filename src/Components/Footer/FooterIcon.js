import {
  faFacebook, faInstagram,
  faPinterest, faTwitter
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Box } from '@mui/material';
import React from 'react';


const FooterIcon = () => {
  return (
    <Box sx={{
      display: "flex",
      justifyContent: "space-evenly",
      alignItems: "center",
      width: "100%",
      height: "100px",
      backgroundColor: "black",
      color: "white",
      marginBottom: "30px"
    }}>
      <FontAwesomeIcon icon={faFacebook} />

      <FontAwesomeIcon icon={faTwitter} />
      <FontAwesomeIcon icon={faFacebook} />
      <FontAwesomeIcon icon={faInstagram} />
      <FontAwesomeIcon icon={faPinterest} />

    </Box>
  )
}

export default FooterIcon