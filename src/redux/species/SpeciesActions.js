import { REQUEST_SPECIE_START, REQUEST_SPECIE_SUCCESS, REQUEST_SPECIE_FAILED, 
    REQUEST_ALL_SPECIES_START, REQUEST_ALL_SPECIES_SUCCESS, REQUEST_ALL_SPECIES_FAILED
} from '../types';

import { fetchDataFromSwapi, fetchFailed, fetchSuccess, fetchStart } from '../../utils/useFetchDataFromSwapi';

export const requestOneSpecie = (id) => {
    return dispatch => {
        dispatch(fetchStart(REQUEST_SPECIE_START));
        fetchDataFromSwapi(`https://swapi.dev/api/species/${id}/`)
        .then(data => dispatch(fetchSuccess(REQUEST_SPECIE_SUCCESS, data)))
        .catch(error => dispatch(fetchFailed(REQUEST_SPECIE_FAILED, error.message)));
    }
};

export const requestAllSpecies = (page) => {
    return dispatch => {
        dispatch(fetchStart(REQUEST_ALL_SPECIES_START));
        fetchDataFromSwapi(`https://swapi.dev/api/species/?page=${page}`)
        .then(data => {
            dispatch(fetchSuccess(REQUEST_ALL_SPECIES_SUCCESS, data));
        }).catch(error => dispatch(fetchFailed(REQUEST_ALL_SPECIES_FAILED, error.message)));
    }
};