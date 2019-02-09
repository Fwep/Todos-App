import React from 'react';
import merge from 'lodash/merge';
import TodoDetailViewContainer from './todo_detail_view_container';

class TodoListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = ({
      detail: false
    });

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
    const {todo, todo: { done }} = this.props;
    return (
      <li>
        <h3 onClick={() => this.setState({detail: !this.state.detail})}>{todo.title}</h3>
        <button onClick={this.toggleTodo}>{done ? 'Undo' : 'Done'}</button>
        {this.state.detail ? <TodoDetailViewContainer todo={todo} todoBody={todo.body}/> : <div></div>}
      </li>
    );
  }
}

export default TodoListItem;