/**
@file React index file
@author Amit Thakur <thakuramit3@hotmail.com>
@description Start point for the react app
**/

import React from 'react';
import ReactDOM from "react-dom/client";
import { 
  BrowserRouter,
  Routes,
  Route, } from "react-router-dom";
import { Provider } from 'react-redux';
import { store } from './app/store';
import App from './containers/Places';
import './index.css';

const root = ReactDOM.createRoot(
  document.getElementById("root")
);

root.render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
      </Routes>
    </BrowserRouter>
  </Provider>
);



