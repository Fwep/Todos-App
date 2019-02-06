import React from 'react';

class TodoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      body: '',
      done: false
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.clearInput = this.clearInput.bind(this);
  }

  handleChange(property) {
   return e => this.setState({
      [property]: e.target.value
    })
  }

  handleSubmit(e) {
    e.preventDefault();
    const { receiveTodo } = this.props;
    receiveTodo(Object.assign({},
      {id: new Date().getTime()},
      this.state
      )).then(this.clearInput());
  }

  clearInput() {
    this.setState({
      title: '', body: ''
    });
  }

  
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>Title:
          <input 
            type="text"
            placeholder="Enter a task"
            value={this.state.title}
            onChange={this.handleChange('title')}
          />
        </label>

        <label>Body:
          <textarea
            placeholder="Enter a task"
            value={this.state.body}
            onChange={this.handleChange('body')}
          />
        </label>
        <input type="submit" value="Create a Todo"/>
      </form>
    );
  }
};

export default TodoForm;