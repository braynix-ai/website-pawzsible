import { Box } from "@mui/material";
import { styled } from "@mui/system";



export const InfoContainer = styled(Box)(() => ({
  width: "100%",
  height: "100%",
  position: 'relative',
  top: '0',
  left: '0'
}));

export const CardContainer = styled(Box)(() => ({
  marginTop: "40px",

  display: "flex",
  justifyContent: "space-around"
}));

export const BarkContainer = styled(Box)(() => ({
  width: "100%",
  height: "100%",
  marginTop: '10%',
  position: 'relative'
}));

export const SupportContainer = styled(Box)(() => ({

}));

export const AddressContainer = styled(Box)(() => ({
  position: 'relative',
  marginLeft:'20px'
}))