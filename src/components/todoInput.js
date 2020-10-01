import * as React from 'react';
import toDoStyles from './todo.css';

export default function (props) {
  const [text, setText] = React.useState('');

  const onAddClick = () => {
    if (text.length > 0) {
      props.onAdd(text);
      setText('');
    }
  };

  const handleKeyDown = (event) => {
    // handling 'Enter' keydown events
    if (event.key === 'Enter') {
      if (text.length === 0) {
        setText('');
      } else if (event.shiftKey === false && text.length > 0) { 
        onAddClick();
      } else if (event.shiftKey === true) {
        setText(text);
      }
    }
  };

  const onChange = (event) => {
    // if the user presses enter at the begining it will not go to the next line
    if (text.length === 0 && event.target.value === '\n') {
      return;
    }
    setText(event.target.value);
  };

  return (
    <div className={`${toDoStyles.container} container`}>
      <div className="columns is-mobile">
        <div className="column is-four-fifths">
          <textarea
            className="input"
            value={text}
            placeholder="Text input"
            rows="5"
            onChange={onChange}
            onKeyDown={handleKeyDown}
          />
        </div>
        <div className="column">
          <button onClick={onAddClick} className={toDoStyles.btn}>+</button>
        </div>
      </div>
    </div>
  );
}
