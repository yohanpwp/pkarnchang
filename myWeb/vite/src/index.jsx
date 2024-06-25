import React, { useReducer } from 'react'
import ReactDOM, { createRoot } from 'react-dom/client'
import Shop from '../components/Store/Shop.jsx';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { createStore } from 'redux'; 
import { ReducerType } from '@reduxjs/toolkit';
import { Provider,ReactReduxContext } from 'react-redux'
import reducers from './reducers'
import reduxThunk from "redux-thunk";


const store = createStore(reducers,{},applyMiddleware(reduxThunk));
// As of React 18
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <Provider store={store}>
    <Shop />
  </Provider>,
)