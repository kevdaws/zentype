
import './App.css';
import { useState, useCallback, useEffect } from 'react';

function App() {
  
  const [word, updateWord] = useState('');

  useEffect(() => {
    randomWords();
  }, []);
  
  const randomWords = async () => {
    const res = await fetch("https://random-word-api.herokuapp.com/word?number=10")
    const words = await res.json();
    updateWord(words);
  }
  
  const newInput = useCallback((event) => {
    updateWord(event.target.value);
    console.log(event.target.value);
  }, [word]);
  
  return (
    
    <div className="App">
    
    <div className="Header">
      <h1>Welcome to ZenType</h1>
    </div>

    <div className="body">
      <input value={word} onChange="newInput"></input>
      <p>{word}</p>
    </div>
    
    </div>
  );
}

export default App;
