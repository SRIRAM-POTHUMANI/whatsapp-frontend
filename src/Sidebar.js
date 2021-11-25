import React from 'react'
import './Sidebar.css';
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import {IconButton,Avatar} from '@material-ui/core';
import ChatIcon from '@material-ui/icons/Chat';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import SearchOutlined from '@material-ui/icons/SearchOutlined'
import SidebarChat from './SidebarChat';
function Sidebar() {
    return (
        <div className="sidebar">
          <div className="sidebar_header">
          <Avatar src="https://english.ntvtelugu.com/wp-content/uploads/2021/05/vijay-thalapathy-keerthy-suresh-telugu-film.jpeg"/>
            <div className="sidebar_headerright">
              <IconButton><DonutLargeIcon /></IconButton>
              <IconButton><ChatIcon /></IconButton>
              <IconButton><MoreVertIcon /></IconButton>

            </div>
          </div>
          <div className="sidebar_search">
          <div className="sidebar_searchcontainer">
            <SearchOutlined />
            <input placeholder="search or seart a new chat" type="text" />
            </div>
          </div>
          <div className="sidebar_chats">
            <SidebarChat />
            <SidebarChat />
            <SidebarChat />
            <SidebarChat />
          </div>
        </div>
    )
}

export default Sidebar
