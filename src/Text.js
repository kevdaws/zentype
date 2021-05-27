
import './Text.css';

const Text = (props) => {

  return (
    
    <div className="Text">
      {
        props.text.split('').map((letter, index) => {
          let color;
          if (index < props.userInput.length) {
            color = letter === props.userInput[index] ? '#dfffa0' : '#fcbea4';
          }
          
          return <span key={index} style={{backgroundColor: color}}>{letter}</span>
        })
      }

    </div>
    
  );
}

export default Text;
