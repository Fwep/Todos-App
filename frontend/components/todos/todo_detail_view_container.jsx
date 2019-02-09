import {connect} from 'react-redux';
import TodoDetailView from './todo_detail_view';
import {removeTodo} from '../../actions/todo_actions';
import {receiveSteps} from '../../actions/step_actions';

const mSP = (state, ownProps) => ({
  body: ownProps.todoBody
});

const mDP = dispatch => ({
  removeTodo: (todo) => dispatch(removeTodo(todo)),
  receiveSteps: (steps) => dispatch(receiveSteps(steps))
});

export default connect(mSP, mDP)(TodoDetailView);