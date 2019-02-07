import React from 'react';
import merge from 'lodash/merge';

class TodoListItem extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = this.props.todo;
    this.toggleTodo = this.toggleTodo.bind(this);   
  }
  
  toggleTodo(e) {
    e.preventDefault();
    const toggledTodo = merge(
      {},
      this.props.todo,
      { done: !this.props.todo.done}
    )

    this.props.receiveTodo(toggledTodo);
  }

  render() {
    const {removeTodo, todo} = this.props;
    const { done } = todo; 
    return (
      <li>
        <h3>{this.props.todo.title}</h3>
        <button onClick={() => removeTodo(todo)}>Delete</button>
        <button onClick={this.toggleTodo}>{done ? 'Undo' : 'Done'}</button>
      </li>
    );
  }
}

export default TodoListItem;