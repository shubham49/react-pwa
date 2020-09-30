import * as React from 'react';
import toDoStyles from './todo.css';

export default function (props) {

    const [text, setText] = React.useState('');

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            onAddClick();
        }
    }

    const onChange = (event) =>
        setText(event.target.value);


    const onAddClick = () => {
        if(text){
            props.onAdd(text);
            setText('');
        }
    }

    return (
        <div className={`${toDoStyles.container} container`}>
            <div className="columns is-mobile">
                <div className="column is-four-fifths">
                    <input className="input" type="text"
                        value={text} placeholder="Text input"
                        onChange={onChange} onKeyDown={handleKeyDown} />
                </div>
                <div className="column">
                    <button onClick={onAddClick} className={toDoStyles.btn}
                    disabled={!text}
                    >+</button>
                </div>
            </div>
        </div>
    );
}