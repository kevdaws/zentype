
import './Text.css';
import { useState, useEffect } from 'react';

const Text = () => {
  
  const [text, setText] = useState([]);

  useEffect(() => {
    getText();
  }, []);
  
  const getText = async () => {
    const res = await fetch("https://random-word-api.herokuapp.com/word?number=10")
    const json = await res.json();
    setText(json);
  }
  
  return (
    
    <div className="Text">
      {
        text.map((letter, index) => {
          return <span key={index}>{letter}</span>
        })
      }

    </div>
    
  );
}

export default Text;
