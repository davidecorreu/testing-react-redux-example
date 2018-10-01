import { createStore, applyMiddleware } from 'redux';
import reducers from 'reducers';
// import reduxPromise from 'redux-promise';
import async from 'middlewares/async';


export default (initialState = {}) => {
  return createStore(
    reducers,
    initialState,
    // applyMiddleware(reduxPromise)
    applyMiddleware(async)
  );
};
