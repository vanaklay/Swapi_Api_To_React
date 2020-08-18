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

const fetchDataFromSwapi = async (idx) => {
    const res = await fetch(`https://swapi.dev/api/people/${idx}/`);
    const resJson = await res.json();
    return {
        id: `${idx}-${Date.now()}`,
        imageUrl: `${idx}.jpg`,
        ...resJson
    }
};

const createAllCharactersArray = async (a, b) => {
    let allCharacters = [];
    for (let i = a; i < b; i++) {
        await fetchDataFromSwapi(i)
        .then(character => {
            if (!character.detail) {
                allCharacters.push(character)
            }
        });
    }
    return allCharacters;
};

export const fetchAllCharacters = (a, b) => {
    return dispatch => {
        dispatch(fetchCharactersStart);
        createAllCharactersArray(a, b).then(data => {
            dispatch(fetchAllCharactersSuccess(data));
        }).catch(error => dispatch(fetchCharactersFail(error)));
    }
}

// Fetch one character from SWAPI 
export const fetchOneCharacterSuccess = (character) => ({
    type: FETCH_ONE_CHAR_SUCCESS,
    payload: character
});

export const fetchOneCharacter = (idx) => {
    return dispatch => {
        dispatch(fetchCharactersStart);
        fetchDataFromSwapi(idx).then(data => {
            dispatch(fetchOneCharacterSuccess(data));
        }).catch(error => dispatch(fetchCharactersFail(error)));
    }
}