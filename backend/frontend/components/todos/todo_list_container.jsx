import { connect } from 'react-redux';
import TodoList from './todo_list';
import { allTodos } from '../../reducers/selectors';
import {fetchTodos, receiveTodo, removeTodo, createTodo} from '../../actions/todo_actions';

const mSP = state => ({
  todos: allTodos(state)
});

const mDP = dispatch => ({
  createTodo: (todo) => dispatch(createTodo(todo)),
  fetchTodos: () => dispatch(fetchTodos()),
  receiveTodo: (todo) => dispatch(receiveTodo(todo)),
  removeTodo: (todo) => dispatch(removeTodo(todo))
});

export default connect(mSP, mDP)(TodoList);