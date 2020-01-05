import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

const App: React.FC = () => {
  const [message, setMessage] = useState("DEFAULT MESSAGE");
  return (
    <div className="App">
      <p>Message: {message}</p>
      <button onClick={() => {
        fetch("/.netlify/functions/hello")
          .then(result => result.json())
          .then(obj => setMessage(obj.msg));
      }}>click me</button>
    </div>
  );
}

export default App;
