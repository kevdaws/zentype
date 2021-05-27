
import './Text.css';
import { useState, useEffect } from 'react';

const Text = (props) => {
  
  const [text, setText] = useState('');

  useEffect(() => {
    getText();
  }, []);
  
  const getText = async () => {
    const res = await fetch("https://random-word-api.herokuapp.com/word?number=10")
    const json = await res.json();
    let body = '';
    
    for (let i = 0; i < json.length; i++) {
      body += (json[i] + ' ');
    }
    setText(body);
  }
  
  
  
  return (
    
    <div className="Text">
      {
        text.split(' ').map((letter, index) => {
          console.log(letter);
          let color;
          if (index < props.userInput.length) {
            color = letter[index] === props.userInput[index] ? '#dfffa0' : '#fcbea4';
          }
          
          return <span key={index} style={{backgroundColor: color}}>{letter}</span>
        })
      }

    </div>
    
  );
}

export default Text;
