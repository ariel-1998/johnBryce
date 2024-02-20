import './App.css'
import io from 'socket.io-client';
import { useEffect, useRef, useState } from 'react';

const socket = io('http://localhost:3000');

function App() {
  const [messages, setMessages] = useState<{name: string, message:string}[]>([]);
  const messageRef = useRef<HTMLInputElement>(null);
  const nameRef = useRef<HTMLInputElement>(null);


 function connect() {
  socket.connect();
    socket.on('message', (data) => {
      messages.push(data)
      setMessages([...messages])
    });

 }

  function send() {
    debugger

    let messageInp = messageRef?.current;
    let nameInp = nameRef?.current;
    if (messageInp && nameInp) {
      socket.emit('message', { name: nameInp.value, message: messageInp.value })
      messageInp.value = '';
      nameInp.value = ''
      messageInp.focus();
    }
  }

  return (
    <div className="App">
      <button onClick={connect}>connect</button>
      <label>message</label>
      <input ref={messageRef} type="text" />
      <br />
      <label>name</label>
      <input ref={nameRef} type="text" />
      <br />
      <button onClick={send}>send</button>
      <br />
      {messages.map(msg => (
        <p> {msg.name+ ': |' +  msg.message } </p>
      ))}
    </div>
  )
}

export default App
