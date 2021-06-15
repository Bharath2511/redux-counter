import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {createStore,applyMiddleware,compose} from 'redux'
import {Provider} from 'react-redux'; 
import thunk from 'redux-thunk';
import allReducer from './reducers'

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(allReducer, composeEnhancer(applyMiddleware(thunk)))


// const myStore = createStore(
//   allReducer, /* preloadedState, */compose(applyMiddleware(thunk)),
// window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// );


// STORE -> A GLOBALIZE STATE

//ACTION -> INCREMENT,DECREMENT IT is a function that returns an object

//DISPATCH -> DISPATCHES DATA TO REDUCER

//REDUCER -> BASED ON THE ACTION CHANGES THE STATE

ReactDOM.render(
  <React.StrictMode>
  <Provider store={store}>
    <App />
  </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
