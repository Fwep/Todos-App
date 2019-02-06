import React from 'react';

class TodoListItem extends React.Component {
  constructor(props) {
    super(props);
    
  }
  
  render() {
    const {removeTodo, todo} = this.props;
    console.log
    return (
      <li>
        <h3>{this.props.todo.title}</h3>
        <button onClick={() => removeTodo(todo)}>Delete</button>
        <button onClick={() => receiveTodo(todo)}>Done</button>
      </li>
    );
  }
}

export default TodoListItem;