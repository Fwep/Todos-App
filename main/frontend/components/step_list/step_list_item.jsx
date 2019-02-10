import React, {Component} from 'react';
import merge from 'lodash/merge'

class StepListItem extends Component {
  constructor(props) {
    super(props);

    this.toggleStep = this.toggleStep.bind(this);
    this.deleteStep = this.deleteStep.bind(this);
  }

  toggleStep(e) {
    e.preventDefault();
    const toggledStep = merge(
      {},
      this.props.step,
      { done: !this.props.step.done }
    )
    
    this.props.receiveStep(toggledStep);
  }

  deleteStep() {
    this.props.removeStep(this.props.step);
  }
  
  render() {
    const {step, step: {done}} = this.props;
    return (
      <div>
        <h2>{this.props.title}</h2>
        <h2>{this.props.body}</h2>
        <button onClick={this.deleteStep}>Delete Step</button>
        <button onClick={this.toggleStep}>{done ? "Undo" : "Done"}</button>
      </div>
    );
  }
}

export default StepListItem;