/**
@file Redux store configuration
@author Amit Thakur <thakuramit3@hotmail.com>
@description store configuration for the app
**/

import { configureStore } from '@reduxjs/toolkit';
import CityReducer from '../reducers/index';

export const store = configureStore({
  reducer: {
    places: CityReducer,
  },
});
