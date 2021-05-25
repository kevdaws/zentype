
import './App.css';
import { useState, useCallback, useEffect } from 'react';

function App() {
  
  const [words, updateWords] = useState([]);

  useEffect(() => {
    randomWords();
  }, []);
  
  const randomWords = async () => {
    const res = await fetch("https://random-word-api.herokuapp.com/word?number=10")
    const json = await res.json();
    let body = [];
    for (let i = 0; i < json.length; i++) {
      body.push(json[i] + " ");
    }
    updateWords(body);
  }
  
  const newInput = useCallback((event) => {
    updateWords(event.target.value);
    console.log(event.target.value);
  }, [words]);
  
  return (
    
    <div className="App">
    
    <div className="Header">
      <h1>Welcome to ZenType</h1>
    </div>

    <div className="body">
      <input onChange="newInput"></input>
      <p>{words}</p>
    </div>
    
    </div>
  );
}

export default App;
