import React from 'react';

class StepForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      body: '',
      done: false,
      todo_id: this.props.todoId
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
    this.props.receiveStep(Object.assign({},
      { id: new Date().getTime() },
      this.state)).then(this.clearInput());
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
            placeholder="Buy a computer"
            value={this.state.title}
            onChange={this.handleChange('title')}
          />
        </label>

        <label>Body:
          <textarea
            placeholder="Probably going to be a painful 12 weeks of bootcamp"
            value={this.state.body}
            onChange={this.handleChange('body')}
          />
        </label>
        <input type="submit" value="Create Step!" />
      </form>
    );
  }
};

export default StepForm;