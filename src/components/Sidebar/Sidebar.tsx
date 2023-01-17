import React from "react";
import { List, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import { Home, AccountCircle, People, Logout } from "@mui/icons-material"

import SidebarCSS from "./Sidebar.module.scss"
import { alpha, styled } from '@mui/material/styles';

const SidebarList = styled(List)(({ theme }) => ({
  position: "sticky",
  top: "0px",
  fontSize: "1.5rem"
}))


const Sidebar = () => {
  return (
    <SidebarList>
      <ListItem>
        <ListItemIcon> <Home /> </ListItemIcon>
        <div> Home </div>
      </ListItem>
      <ListItem>
        <ListItemIcon> <People /> </ListItemIcon>
        <div> Friends </div>
      </ListItem>
      <ListItem>
        <ListItemIcon> <AccountCircle /> </ListItemIcon>
        <div> MyPage </div>
      </ListItem>
      <ListItem>
        <ListItemIcon> <Logout /> </ListItemIcon>
        <div>Logout</div>
      </ListItem>
    </SidebarList>
  )
}

export default Sidebar