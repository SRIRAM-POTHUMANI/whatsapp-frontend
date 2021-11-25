import { Avatar, IconButton } from "@material-ui/core";
import { SearchOutlined, AttachFile, MoreVert,InsertEmoticon, MicNone } from "@material-ui/icons";
import axios from "./axios";
import React, { useEffect, useState } from "react";
import "./Chat.css";

function Chat({ messages, name }) {
  const [input, setinput] = useState([]);
  const [findname, setfindname] = useState([])
  useEffect(()=>{
    axios.get('/messages/name').then((response) =>{
      setfindname(response.data)
    })
},[])
  const recieved = findname == null ? false : true;
    const sendMessage=(e)=>{
      e.preventDefault();
        axios.post('/messages/new',{
          message: input,
          name: name,
          timestamp: "justnow",
          recieved: recieved
        });
        setinput("");
    };
  return (
    <div className="chat">
      <div className="chat_header">
        <Avatar />
        <div className="chat_headerinfo">
          <h3> Room name</h3>
          <p>Last seen at ...</p>
        </div>
        <div className="chat_headerright">
          <IconButton>
            <SearchOutlined />
          </IconButton>
          <IconButton>
            <AttachFile />
          </IconButton>
          <IconButton>
            <MoreVert />
          </IconButton>
        </div>
      </div>
      <div className="chat_body">
        {messages.map(message => (
          <p className={`chat_message ${message.recieved && "chat_reciever"}`}>
          <span className="chat_name">{message.name}</span>
          {message.message}
                    <span className="chat_timestamp">{message.timestamp}</span>
        </p>
        ))}
      </div>
      <div className="chat_footer">
            <InsertEmoticon />
            <form>
                <input value={input} onChange={e=> setinput(e.target.value)} placeholder="Type a message" type="text" />
                <button onClick={sendMessage} type="submit"> send a message</button>
            </form>
            <MicNone/>
      </div>
    </div>
  );
}

export default Chat;
