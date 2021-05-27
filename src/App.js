import Text from './Text';
import { useState, useEffect } from 'react';

const App = () => {
    
    const initialState = {
        text: 'Test',
        userInput: ''
    }
    
    const [userInput, setUserInput] = useState(initialState.userInput);
    const [text, setText] = useState('');

    const getText = async () => {
        const res = await fetch("https://random-word-api.herokuapp.com/word?number=10")
        const json = await res.json();
        let body = '';
        
        for (let i = 0; i < json.length; i++) {
          body += (json[i] + ' ');
        }
        setText(body);
      }

      useEffect(() => {
        getText();
      }, []);  
      

    const onRestart = () => {
        setUserInput(initialState.userInput);
    }

    const onInputChange = (event) => {
        setUserInput(event.target.value)
    }

    const onNew = () => {
        getText();
    }
    
    return (
    
    <div>
        
        <Text 
            userInput={userInput}
            getText={getText}
            text={text}
        />
        
        <textarea
            value={userInput}
            onChange={onInputChange}
            placeholder="Start typing..."
        ></textarea>
    
        <button onClick={onRestart}>Restart</button>
        <button onClick={onNew}>New Text</button>

    </div>

    );
}


export default App;