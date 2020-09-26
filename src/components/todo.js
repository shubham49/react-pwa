import * as React from 'react';
import ToDoInput from './todoInput';
import TodoList from './toDoList';

const STORAGE_KEY = '@react-pwa/todos';

const loadToDoItems = () => {
    const data = localStorage.getItem(STORAGE_KEY);
    if (!data) return [];
    return JSON.parse(data);
}

const saveTodoItems = toDoItems => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(toDoItems));
}

export default function () {
    const [toDoItems, setItems] = React.useState(loadToDoItems);

    React.useEffect(() => saveTodoItems(toDoItems), [toDoItems]);

    const onAdd = (text) => setItems([...toDoItems, text]);

    return (
        <>
            <TodoList toDoItems={toDoItems} />
            <ToDoInput onAdd={onAdd} />
        </>
    );
}
