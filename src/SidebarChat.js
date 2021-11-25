import { Avatar } from '@material-ui/core'
import './SidebarChat.css';
import React from 'react'

function SidebarChat() {
    return (
        <div className="sidebarChat">
            <Avatar />
            <div className="sidebarChat_info">
                <h2>Room Name</h2>
                <p>Last Message</p>
            </div>
        </div>
    )
}

export default SidebarChat
