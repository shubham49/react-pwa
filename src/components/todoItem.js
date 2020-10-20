import * as React from 'react';
import toDoStyles from './todo.css';

export default function (props) {
  const items = props.items.split('\n');
  const [isCompleted, setCompleted] = React.useState(false);

  const onChange = (e) =>
    setCompleted(e.target.checked);

  return (
    <div className={`${toDoStyles.todoItem} columns is-mobile`}>
      <div className="column is-one-fifth">
        <input type="checkbox"
          onChange={onChange}
        />
      </div>
      <div className="column">
        {items.map(item => (
          <div>
            <span className={toDoStyles.item}>
              {isCompleted && <del>{item}</del>}
              {!isCompleted && item}
            </span>
          </div>
        ))}
      </div>
      <div className="column">
        <a href="javascript:void()" onClick={() => props.onDelete(props.items)}>Delete</a>
      </div>
    </div>
  );
}
