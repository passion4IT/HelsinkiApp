/**
@file Redux reducer
@author Amit Thakur <thakuramit3@hotmail.com>
@description list of actions for fetching places from openapi
**/

import { combineReducers } from 'redux';

import { REQUEST_HELSINKI_PLACES, HELSINKI_PLACES_SUCCESS } from '../actions/city-actions';

/**
 * Default state for the reducer
 */
const defaultState = {
	loading: false,
	places: [],
};

/**
* @description Reducer function for the redux store
**/
function cityReducer(state = defaultState, action) {
	switch (action.type) {
		case REQUEST_HELSINKI_PLACES:
			return Object.assign({}, state, { loading: true });
		case HELSINKI_PLACES_SUCCESS:
			return Object.assign({}, state, { loading: false, places: action.places });
		default:
			return state;
	}
}

const CityReducer = combineReducers({
	cityReducer
});

export default CityReducer;
