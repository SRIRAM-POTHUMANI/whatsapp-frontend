import { Avatar, IconButton } from "@material-ui/core";
import { SearchOutlined, AttachFile,InsertEmoticon, MicNone } from "@material-ui/icons";
import axios from "./axios";
import React, { useState, useRef  } from "react";
import "./Chat.css";
import ChatMenu from "./menubutton";
function Chat({ messages, name, toName }) {
  const msgsender = "chat_reciever chat_message ";
  const msgreciever = "chat_message";
  const [input, setinput] = useState([]);
  const messagesEndRef = useRef(null)
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  // const [newmessages, setnewMessages]= useState([]); 
  // setnewMessages(messages);
    const sendMessage= async(e)=>{
      e.preventDefault();
        await axios.post('/messages/new',{
          message: input,
          name: name,
          toname: toName,
          timestamp: "justnow",
          recieved: true
        });
        setinput("");
        scrollToBottom()
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
          <h3> {toName}</h3>
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
      <div className="chat_body" ref={() => {    scrollToBottom() }}>
        {messages.map(msg => (
          // let isUser = (name === message.name); 
          <p className={(name === msg.name) ? msgsender : msgreciever}>
          <span className="chat_name">{msg.name}</span>
          {msg.message}
                    <span className="chat_timestamp">{msg.timestamp}</span>
        </p>
        ))}
              <div ref={messagesEndRef} />
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