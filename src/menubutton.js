import { Menu, MenuItem, Fade } from "@material-ui/core";
import { MoreVert } from "@material-ui/icons";
import axios from "./axios";
import React, { useState } from "react";

export default function ChatMenu() {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
  const ClearChat= () => {
    axios.delete('/messages/delete').then((response) =>{
        setUsername(prompt('Chat Cleared...!'));
    })
  }
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
  
    const handleClose = () => {
      setAnchorEl(null);
    };
  
    return (
      <div>
        <MoreVert aria-controls="fade-menu" aria-haspopup="true" onClick={handleClick}/>
        <Menu
          id="fade-menu"
          anchorEl={anchorEl}
          keepMounted
          open={open}
          onClose={handleClose}
          TransitionComponent={Fade}
        >
          <MenuItem onClick={ClearChat()}>Clear Chat</MenuItem>
          <MenuItem onClick={handleClose}>Logout</MenuItem>
        </Menu>
      </div>
    );
  }