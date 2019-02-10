import {connect} from 'react-redux';
import TodoDetailView from './todo_detail_view';
import {removeTodo} from '../../actions/todo_actions';

const mSP = (state, ownProps) => ({
  todo: ownProps.todo,
  body: ownProps.todoBody
});

const mDP = dispatch => ({
  removeTodo: (todo) => dispatch(removeTodo(todo)),
});

export default connect(mSP, mDP)(TodoDetailView);