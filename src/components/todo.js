import * as React from 'react';
import ToDoInput from './todoInput';
import TodoList from './toDoList';

export default function () {
  const [toDoItems, setItems] = React.useState([]);
  const onAdd = toDoItem => setItems([...toDoItems, toDoItem]);

  return (
    <>
      <TodoList toDoItems={toDoItems} />
      <ToDoInput onAdd={onAdd} />
    </>
  );
}
