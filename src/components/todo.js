import * as React from 'react';
import ToDoInput from './todoInput';
import TodoList from './toDoList';

export default function () {

    const [toDoItems, setItems] = React.useState([]);
    const onAdd = (toDo) => setItems([...toDoItems, toDo]);
    const onCheck = (toDo) => {
        const newTodo = toDoItems.map((item) => 
            item.id === toDo.id ? { ...item, complete: !item.complete } : item
        )

        setItems([ ...newTodo ])
    }

    return (
        <>
            <TodoList toDoItems={toDoItems} onCheck={onCheck} />
            <ToDoInput onAdd={onAdd} />
        </>
    );
}