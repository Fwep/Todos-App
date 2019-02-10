import React from 'react';
import TodoListItem from './todo_list_item';
import TodoForm from './todo_form';

class TodoList extends React.Component {
  constructor(props) {
    super(props);
  }
  
  componentDidMount() {
    console.log('Mounted');
    this.props.fetchTodos();
  }

  render() {
    const todoItems = this.props.todos.map(todo => {
    return <TodoListItem 
    key={`todo-list-item${todo.id}`} 
    todo={todo} 
    removeTodo={this.props.removeTodo}
    receiveTodo={this.props.receiveTodo}
    />
      });
  
    return (
      <div>
        <ul>
          {todoItems}
        </ul>
        <TodoForm 
          receiveTodo={this.props.receiveTodo} 
        />
      </div>
    );  
  }
};

export default TodoList;