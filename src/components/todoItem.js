import * as React from 'react';
import toDoStyles from './todo.css';

export default function (props) {
  const items = props.items.split('\n');
  const [isCompleted, setCompleted] = React.useState(false);

  const onChange = (e) => 
    setCompleted(e.target.checked);

  return (
    <div className={toDoStyles.todoItem}>
      {items.map(item => (
        <div>
          <input type="checkbox"
            onChange={onChange}          
          />
          <span className={toDoStyles.item}>
          {isCompleted && <del>{item}</del>}
          {!isCompleted && item}
          </span>
        </div>
      ))}
    </div>
  );
}
