import * as React from 'react';
import toDoStyles from './todo.css';

export default function (props) {
  const items = props.items.split('\n');
  return (
    <div className={toDoStyles.todoItem}>
      {items.map(item => (
        <div>{item}</div>
      ))}
    </div>
  );
}
