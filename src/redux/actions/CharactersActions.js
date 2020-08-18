import { FETCH_CHARACTERS_START, 
        FETCH_CHARACTERS_SUCCESS, 
        FETCH_CHARACTERS_FAIL,
        FETCH_ONE_CHAR_SUCCESS,
     } from './types';

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

const fetchDataFromSwapi = async (page = 1) => {
    const res = await fetch(`https://swapi.dev/api/people/?page=${page}`);
    if ( res.status === 404 ) {
        throw new Error('error 404');
    }
    const resJson = await res.json();
    return resJson.results;
};


export const fetchAllCharacters = (page) => {
    return dispatch => {
        dispatch(fetchCharactersStart);
        fetchDataFromSwapi(page).then(data => {
            dispatch(fetchAllCharactersSuccess(data));
        }).catch(error => dispatch(fetchCharactersFail(error.message)));
    }
}

// Fetch one character from SWAPI 
export const fetchOneCharacterSuccess = (character) => ({
    type: FETCH_ONE_CHAR_SUCCESS,
    payload: character
});

const fetchCharacterFromSwapi = async (i) => {
        const res = await fetch(`https://swapi.dev/api/people/${i}/`);
        if ( res.status === 404 ) {
            throw new Error('error 404');
        }
        const resJson = await res.json();
        return resJson;
};

export const fetchOneCharacter = (i) => {
    return dispatch => {
        dispatch(fetchCharactersStart);
        fetchCharacterFromSwapi(i).then(data => {
            dispatch(fetchOneCharacterSuccess(data));
        }).catch(error => dispatch(fetchCharactersFail(error.message)));
    }
}