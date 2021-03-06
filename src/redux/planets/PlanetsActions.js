import { PLANETS_START, PLANETS_SUCCESS, PLANETS_FAILED,
    ALL_PLANETS_START, ALL_PLANETS_SUCCESS, ALL_PLANETS_FAILED
 } from '../types';

import { fetchDataFromSwapi, fetchFailed, fetchSuccess, fetchStart } from '../../utils/useFetchDataFromSwapi';

export const requestPlanet = (idPlanet) => {
    return dispatch => {
        dispatch(fetchStart(PLANETS_START));
        fetchDataFromSwapi(`https://swapi.dev/api/planets/${idPlanet}/`)
        .then(data => dispatch(fetchSuccess(PLANETS_SUCCESS, data)))
        .catch(error => dispatch(fetchFailed(PLANETS_FAILED, error.message)));
    }
};

export const requestAllPlanetsPerPage = (page) => {
    return dispatch => {
        dispatch(fetchStart(ALL_PLANETS_START));
        fetchDataFromSwapi(`https://swapi.dev/api/planets/?page=${page}`)
        .then(data => dispatch(fetchSuccess(ALL_PLANETS_SUCCESS, data)))
        .catch(error => dispatch(fetchFailed(ALL_PLANETS_FAILED, error.message)));
    }
};