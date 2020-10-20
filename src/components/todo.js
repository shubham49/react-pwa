import * as React from 'react';
import ToDoInput from './todoInput';
import TodoList from './toDoList';

export default function () {
  const [toDoItems, setItems] = React.useState([]);
  const onAdd = toDoItem => setItems([...toDoItems, toDoItem]);

  const onDelete = item => {
    const items = [...toDoItems];
    items.splice(items.indexOf(item), 1);
    setItems([...items]);
  }

  return (
    <>
      <TodoList toDoItems={toDoItems} onDelete={onDelete} />
      <ToDoInput onAdd={onAdd} />
    </>
  );
}
