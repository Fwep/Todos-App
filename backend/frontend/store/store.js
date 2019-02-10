import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducers/root_reducer';
import thunk from '../middleware/thunk';

const configureStore = () => {
  const initialState = localStorage.state ? JSON.parse(localStorage.state) : {}
  const store = createStore(
    rootReducer, 
    initialState, 
    applyMiddleware(thunk));


  store.subscribe(() => {
  let state = JSON.stringify(store.getState());
  localStorage.state = state;
  })

  return store;
}

export default configureStore;