import { createStore } from 'redux';
import rootReducer from '../reducers/root_reducer';

const configureStore = () => {
  const initialState = localStorage.state ? JSON.parse(localStorage.state) : {}
  const store = createStore(rootReducer, initialState);

  store.subscribe(() => {
  let state = JSON.stringify(store.getState());
  localStorage.state = state;
  })

  return store;
}

export default configureStore;