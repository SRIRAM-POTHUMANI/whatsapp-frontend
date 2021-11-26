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
  const pusher = new Pusher('fbea830eb5fa8b8ee57d', {
    cluster: 'ap2'
  }); 
  const [messages, setMessages]= useState([]); 

  const  sync = async ()=> {
    await axios.get('/messages/sync')
    .then((res)=>{
      console.log(res.data);
      setMessages(res.data)
    })
  }
  useEffect(() => {
   sync()
  },  [])
  
//pusher
  useEffect(() => {
    const channel = pusher.subscribe('messages');
    channel.bind('inserted', function(newMessage) {
      sync()
    });

    return ()=>{
          channel.unbind_all();
          channel.unsubscribe();
        };
   },  [messages])
  
  // useEffect(()=>{
  //     axios.get('/messages/sync').then((response) =>{
  //       setMessages(response.data)
  //     })
  // },[])
  // useEffect(() => {
    
  // console.log(messages)
  //   var channel = pusher.subscribe('messages');
  //   channel.bind('inserted', (newMessage) => {
  //     // alert(JSON.stringify(newMessage));
  //     setMessages([...messages,newMessage])
  //   });
  //  return ()=>{
  //     channel.unbind_all();
  //     channel.unsubscribe();
  //   };
  // },[messages]);
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
