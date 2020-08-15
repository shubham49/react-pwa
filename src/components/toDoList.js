import React from 'react';
import toDoStyles from './todo.css';

export default function ({ toDoItems }) {
    return (
        <div className={`${toDoStyles.container} container`}>
            {toDoItems.map(item => (
                <div className={toDoStyles.todoItem}>{item}</div>
            ))}
        </div>
    );
}