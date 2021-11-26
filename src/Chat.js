import { Avatar, IconButton } from "@material-ui/core";
import { SearchOutlined, AttachFile,InsertEmoticon, MicNone } from "@material-ui/icons";
import axios from "./axios";
import React, { useState } from "react";
import "./Chat.css";
import ChatMenu from "./menubutton";
function Chat({ messages, name }) {
  const msgsender = "chat_reciever chat_message ";
  const msgreciever = "chat_message";
  const [input, setinput] = useState([]);
  // const [newmessages, setnewMessages]= useState([]); 
  // setnewMessages(messages);
    const sendMessage= async(e)=>{
      e.preventDefault();
        await axios.post('/messages/new',{
          message: input,
          name: name,
          timestamp: "justnow",
          recieved: true
        });
        setinput("");
        // await axios.get('/messages/sync').then((response) =>{
        //   setnewMessages(response.data)
        // })
    };
    // console.log(messages);
    // console.log(newmessages);

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
            <ChatMenu />
          </IconButton>
        </div>
      </div>
      <div className="chat_body">
        {messages.map(msg => (
          // let isUser = (name === message.name); 
          <p className={(name === msg.name) ? msgsender : msgreciever}>
          <span className="chat_name">{msg.name}</span>
          {msg.message}
                    <span className="chat_timestamp">{msg.timestamp}</span>
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
