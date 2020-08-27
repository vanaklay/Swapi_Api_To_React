import { FILMS_START, FILMS_SUCCESS, FILMS_FAILED, ALL_FILMS_START, ALL_FILMS_SUCCESS, ALL_FILMS_FAILED } from '../types';

import { fetchDataFromSwapi, fetchFailed, fetchSuccess, fetchStart } from '../../utils/useFetchDataFromSwapi';

export const requestOneFilm = (idFilm) => {
    return dispatch => {
        dispatch(fetchStart(FILMS_START));
        fetchDataFromSwapi(`https://swapi.dev/api/films/${idFilm}/`)
        .then(data => dispatch(fetchSuccess(FILMS_SUCCESS, data)))
        .catch(error => dispatch(fetchFailed(FILMS_FAILED, error.message)));
    }
};

export const requestAllFilms = () => {
    return dispatch => {
        dispatch(fetchStart(ALL_FILMS_START));
        fetchDataFromSwapi(`https://swapi.dev/api/films/`)
        .then(data => dispatch(fetchSuccess(ALL_FILMS_SUCCESS, data)))
        .catch(error => dispatch(fetchFailed(ALL_FILMS_FAILED, error.message)));
    }
};