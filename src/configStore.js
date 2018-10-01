import { createStore, applyMiddleware } from 'redux';
import reducers from 'reducers';
import reduxPromise from 'redux-promise';


export default (initialState = {}) => {
  return createStore(
    reducers,
    initialState,
    applyMiddleware(reduxPromise)
    // applyMiddleware()
  );
};
