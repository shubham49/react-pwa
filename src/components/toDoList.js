import React from 'react';
import toDoStyles from './todo.css';
import ToDoItem from './todoItem';

export default function ({ toDoItems, onDelete }) {
  return (
    <div className={`${toDoStyles.container} container`}>
      {toDoItems.map(items => (
        <ToDoItem items={items} onDelete={onDelete} />
      ))}
    </div>
  );
}
