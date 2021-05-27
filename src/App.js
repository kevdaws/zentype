import Text from './Text';
import { useState } from 'react';

const App = () => {
    
    const initialState = {
        text: 'Test',
        userInput: ''
    }
    const [state, setState] = useState(initialState);

    const onRestart = () => {
        setState(initialState);
    }

    const onInputChange = (event) => {
        setState({
            userInput: event.target.value
        })
    }
    
    return (
    
    <div>
        
        <Text />
        
        <textarea
            value={state.userInput}
            onChange={onInputChange}
            placeholder="Start typing..."
        ></textarea>
    
        <button onClick={onRestart}>Restart</button>

    </div>

    );
}


export default App;