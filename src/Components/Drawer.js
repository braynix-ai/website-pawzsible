import React, { useState } from "react";
import {
  Drawer,
  IconButton,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";
const pages = ['AboutUs', 'Teams','Feed', 'Groom'];


//Drawer component

const DrawerComp = () => {
  const [openDrawer, setOpenDrawer] = useState(false);

  return (
    <React.Fragment>
      <Drawer
        anchor="top"
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
      >
        <List >
        {pages.map((page) => (
                <ListItemButton sx={{color:"Black",alignItems:'center'}} key={page}>
                 
                    <Link style={{textDecoration:'none',color:'black',}} to={`/${page}`}>{page}</Link>
                   
                 
                </ListItemButton>
        ))}
        </List>
      </Drawer>
      <IconButton
        sx={{ color: "black", marginLeft: "auto" }}
        onClick={() => setOpenDrawer(!openDrawer)}
      >
        <MenuIcon color="white" />
      </IconButton>
    </React.Fragment>
  );
};

export default DrawerComp;
