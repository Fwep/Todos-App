import React from 'react';
import StepListItemContainer from './step_list_item_container';
import StepForm from './step_form';

class StepList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const stepItems = this.props.steps.map(step => {
      return <StepListItemContainer 
       step={step} />
    });

    return (
      <div>
        <ul>
          {stepItems.map((stepItem, idx) => {
            return <li key={idx}>{stepItem}</li>
          })}
        </ul>
        <StepForm receiveStep={this.props.receiveStep} todoId={this.props.todo_id}/>
      </div>
    );
  }
}

export default StepList;