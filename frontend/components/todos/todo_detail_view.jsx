import React from 'react';
import StepListContainer from '../step_list/step_list_container';

class TodoDetailView extends React.Component {
  constructor(props) {
    super(props);

    this.deleteTodo = this.deleteTodo.bind(this);
  }

  deleteTodo() {
    this.props.removeTodo(this.props.todo);
  }
  
  render() {
    return (
      <div>
        <h2>{this.props.body}</h2>
        <StepListContainer todo_id={this.props.todo.id}/>
        <button onClick={this.deleteTodo}>Delete Todo</button>
      </div>
    );
  }
}

export default TodoDetailView;