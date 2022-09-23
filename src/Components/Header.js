import {
  useMediaQuery,
  useTheme
} from "@mui/material";
import React, { useState } from "react";
import Navbar from "./NavBar";

// Navbar

const Header = () => {
  // const [value, setValue] = useState();
  const theme = useTheme();
  console.log(theme);
  const isMatch = useMediaQuery(theme.breakpoints.down("lg"));
  console.log(isMatch);

  //Page links
  // const pages2 = [
  //   { title: "About Us", href: "/AboutUs" },
  //   { title: "Teams", href: "/Teams" },
  //   { title: "Testimonial", href: "/" },
  //   { title: "Feed Your Dog", href: "/#Feed_Your_Dog" },
  //   { title: "Groom Your Dog", href: "/#Groom_Your_Dog" },
  //   { title: "Join Us", href: "/TalkSection" },


  // ]
  return (
    <Navbar />
    // <React.Fragment>
    //   <AppBar sx={{ background: "white",position:'static' }}>
    //     <Toolbar>

    //       {/* navbar logo */}

    //     <Box display="flex" >
    //     <Link to="/">
    //     <img src="../Assests/logo 1.png" style={{height:"50px",marginTop:'15px'}}/> 
    //     </Link>

    // </Box>

    //     {/* navbar logo */}

    //     {/* Navbar links */}
    //       {isMatch ? (
    //         <>

    //           <DrawerComp />
    //         </>
    //       ) : (
    //         <>
    //            <Box sx={{alignItems:'center', width:"900px",marginLeft:'20px',display:'flex',justifyContent:'space-around',fontFamily:"poppins"}} >
    //             {pages2.map((page,index) => (
    //             <Button sx={{color:"white"}} key={index}>
    //             <a style={{textDecoration:'none',color:'black'}} href={`${page.href}`}>{page.title}</a>
    //             </Button>
    //           ))} 
    //           </Box>
    //           <Box display="flex">

    //     <Button variant="outlined" 
    //     sx={{
    //       fontSize:'10px',
    //      fontWeight:'bold',
    //      color:"black", 
    //      width:'120px', 
    //      marginRight:'30px' , 
    //      border:"1px solid black",marginLeft:'auto',fontFamily:"poppins"}}>
    //       Consult a Vet
    //       </Button>
    // </Box>


    //     {/* Navbar links */}
    //         </>
    //       )}
    //     </Toolbar>
    //   </AppBar>
    // </React.Fragment>
  );
};

export default Header;
