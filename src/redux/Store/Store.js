import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import rootReducer from '../Reducer/Reducer';

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);
store.subscribe(() => {
  console.log(store.getState());
});
export default store;
