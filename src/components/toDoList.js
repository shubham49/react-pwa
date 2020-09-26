import React from 'react';
import toDoStyles from './todo.css';

export default function ({ toDoItems, onCheck }) {
    return (
        <div className={`${toDoStyles.container} container`}>
            {toDoItems.map((item, id) => (
                <div className={toDoStyles.todoItem} key={id}>
                    <input type="checkbox" className="checkbox" onChange={() => onCheck(item)} /> {" "}
                    {item.complete ? <del>{item.text}</del> : item.text}
                </div>
            ))}
        </div>
    );
}