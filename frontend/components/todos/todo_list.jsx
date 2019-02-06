import React from 'react';
import TodoListItem from './todo_list_item';
import TodoForm from './todo_form';

const TodoList = ({todos, receiveTodo}) => {
  const todoItems = todos.map(todo => {
      return <TodoListItem 
      key={`todo-list-item${todo.id}`} 
      todo={todo} />
    });

  return (
    <ul>
      {todoItems}
    </ul>
  );  
};

export default TodoList;