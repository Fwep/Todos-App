import {
  RECEIVE_STEPS,
  RECEIVE_STEP,
  REMOVE_STEP
} from '../actions/step_actions';
import merge from 'lodash/merge';

const stepsReducer = (state = {}, action) => {
  Object.freeze(state);
  let nextState = {};
  
  switch(action.type) {
    case RECEIVE_STEPS:
      nextState = merge({}, state);
      action.steps.forEach(step => {
        nextState[step.id] = step;
      });
      return nextState;
    case RECEIVE_STEP:
      nextState[action.step.id] = action.step;
      return merge({}, state, nextState);
    case REMOVE_STEP:
      nextState = merge({}, state);
      delete nextState[action.step.id];
      return nextState;
    default:
      return state;
  }
};

export default stepsReducer;