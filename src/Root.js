import React from 'react';
import { Provider } from 'react-redux';
import storeInit from 'configStore.js';



export default props => {
  return (
    <Provider store={storeInit(props.initialState)}>
      {props.children}
    </Provider>
  );
}
