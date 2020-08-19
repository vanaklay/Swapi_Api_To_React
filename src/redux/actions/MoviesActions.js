import {REQUEST_MOVIES_START, REQUEST_MOVIES_SUCCESS, REQUEST_MOVIES_FAILED } from '../types';

import { fetchDataFromSwapi, fetchStart, fetchSuccess, fetchFailed } from '../../utils/useFetchDataFromSwapi';

export const requestMovies = () => {
    return dispatch => {
        fetchStart(REQUEST_MOVIES_START);
        fetchDataFromSwapi('https://swapi.dev/api/films/')
        .then(data => {
            dispatch(fetchSuccess(REQUEST_MOVIES_SUCCESS, data.results));
        })
        .catch(error => {
            dispatch(fetchFailed(REQUEST_MOVIES_FAILED, error.message));
        })
    }
};