// index.js
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux'; // Import your Redux store
import rootReducer from './redux/reducers'; // Import your Redux reducer
import App from './App';

const store = createStore(rootReducer); // Create your Redux store

ReactDOM.render(
  <Provider store={store}> {/* Wrap your App with Provider */}
    <App />
  </Provider>,
  document.getElementById('root')
);
