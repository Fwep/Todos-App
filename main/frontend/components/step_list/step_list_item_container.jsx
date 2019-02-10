import {connect} from 'react-redux';
import StepListItem from './step_list_item';
import {removeStep, receiveStep} from '../../actions/step_actions';

const mSP = (state, {step}) => ({
  step,
  id: step.id,
  title: step.title,
  body: step.body,
});

const mDP = dispatch => ({
  removeStep: (step) => dispatch(removeStep(step)),
  receiveStep: (step) => dispatch(receiveStep(step))
});

export default connect(mSP, mDP)(StepListItem);