import React from 'react';
import toDoStyles from './todo.css';
import ToDoItem from './todoItem';

export default function ({ toDoItems }) {
  return (
    <div className={`${toDoStyles.container} container`}>
      {toDoItems.map(items => (
        <ToDoItem items={items} />
      ))}
    </div>
  );
}
