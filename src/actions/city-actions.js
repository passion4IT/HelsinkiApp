/**
@file Redux action
@author Amit Thakur <thakuramit3@hotmail.com>
@description list of actions for fetching places from openapi
**/

import axios from 'axios';

import { HELSINKI_PLACES_ENDPOINT } from '../constants/endpoints';

export const REQUEST_HELSINKI_PLACES = 'REQUEST_HELSNKI_PLACES';
export const HELSINKI_PLACES_SUCCESS = 'HELSINKI_PLACES_SUCCESS';


/**
 * @description trigger loading=true before API call.
 */
function requestHelsinkiPlacese() {
	return {
		type: REQUEST_HELSINKI_PLACES,
	};
}

/**
 * @param {object} places
 * @description get API response from open api for places call.
 */
function receiveHelsinkiPlaces(places) {
	return {
		type: HELSINKI_PLACES_SUCCESS,
		places,
	}
}

/**
 * @description get places via API call and dispatch response for reducer
 */
export function getPlacesOfHelsinki() {
    return function(dispatch) {
        dispatch(requestHelsinkiPlacese())
        return axios.get(`${HELSINKI_PLACES_ENDPOINT}`)
            .then(function(response) {
                return response.data
            })
            .then(function(response) {
                dispatch(receiveHelsinkiPlaces(response.data))
            })
    }
}

