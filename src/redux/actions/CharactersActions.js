import { FETCH_CHARACTERS_START, 
        FETCH_CHARACTERS_SUCCESS, 
        FETCH_CHARACTERS_FAIL,
        FETCH_ONE_CHAR_SUCCESS,
     } from './types';

import { fetchDataFromSwapi } from '../../utils/useFetchDataFromSwapi';

// Fetch all characters
export const fetchCharactersStart = () => ({
    type: FETCH_CHARACTERS_START
});

export const fetchAllCharactersSuccess = (characters) => ({
    type: FETCH_CHARACTERS_SUCCESS,
    payload: characters
});

export const fetchCharactersFail = (errorMessage) => ({
    type: FETCH_CHARACTERS_FAIL,
    payload: errorMessage
});

export const fetchAllCharacters = (page) => {
    return dispatch => {
        dispatch(fetchCharactersStart());
        fetchDataFromSwapi(`https://swapi.dev/api/people/?page=${page}`)
        .then(data => {
            dispatch(fetchAllCharactersSuccess(data.results));
        }).catch(error => dispatch(fetchCharactersFail(error.message)));
    }
}

// Fetch one character from SWAPI 
export const fetchOneCharacterSuccess = (character) => ({
    type: FETCH_ONE_CHAR_SUCCESS,
    payload: character
});

export const fetchOneCharacter = (i) => {
    return dispatch => {
        dispatch(fetchCharactersStart());
        fetchDataFromSwapi(`https://swapi.dev/api/people/${i}/`)
        .then(data => {
            dispatch(fetchOneCharacterSuccess(data));
        }).catch(error => dispatch(fetchCharactersFail(error.message)));
    }
}