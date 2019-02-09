import React from 'react';

class TodoDetailView extends React.Component {
  render() {
    return (
      <h2>{this.props.body}</h2>
    );
  }
}

export default TodoDetailView;