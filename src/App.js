import './App.css';
import Chat from './Chat';
import Sidebar from './Sidebar';
import Pusher from "pusher-js";
import { useEffect, useState } from 'react';
import axios from './axios';

function App() {
  const [username, setUsername] = useState('')
  useEffect(() => {
    setUsername(prompt('Please enter your name'));
  }, []) 

  const [messages, setMessages]= useState([]); 
  useEffect(()=>{
      axios.get('/messages/sync').then((response) =>{
        setMessages(response.data)
      })
  },[])
  useEffect(() => {
    var pusher = new Pusher('fbea830eb5fa8b8ee57d', {
      cluster: 'ap2'
    }); 
console.log(messages)
    var channel = pusher.subscribe('messages');
    channel.bind('inserted', (newMessage) => {
      // alert(JSON.stringify(newMessage));
      setMessages([...messages,newMessage])
    });
   return ()=>{
      channel.unbind_all();
      channel.unsubscribe();
    };
  },[messages]);
  return (
    <div className="app">
      <div className="app_body">

      {/* {sidebar} */}
      <Sidebar />
      {/* {chat window} */}
      <Chat messages={messages} name={username} />
      </div>
    </div>
  );
}

export default App;
