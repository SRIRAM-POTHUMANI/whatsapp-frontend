import { Menu, MenuItem, Fade } from "@material-ui/core";
import { MoreVert } from "@material-ui/icons";
import React from "react";
import './Chat.css'

export default function ChatMenu() {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
     const ClearChat= {}
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
  
    const handleClose = () => {
      setAnchorEl(null);
    };
  
    return (
      <div>
        <MoreVert aria-controls="fade-menu" aria-haspopup="true" onClick={handleClick} className="emojis"/>
        <Menu
          id="fade-menu"
          anchorEl={anchorEl}
          keepMounted
          open={open}
          onClose={handleClose}
          TransitionComponent={Fade}
        >
          <MenuItem onClick={ClearChat}>Clear Chat</MenuItem>
          <MenuItem onClick={handleClose}>Logout</MenuItem>
        </Menu>
      </div>
    );
  }