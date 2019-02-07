import connect from 'react-redux';
import TodoDetailView from './todo_detail_view';

const mDP = dispatch => ({
  removeTodo: (todo) => dispatch(removeTodo(todo))
});

export default connect(null, mDP)(TodoDetailView)