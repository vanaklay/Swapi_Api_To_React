import { FETCH_CHARACTERS_START, FETCH_CHARACTERS_SUCCESS, FETCH_CHARACTERS_FAIL } from './types';

// Fetch all characters
export const fetchAllCharactersStart = () => ({
    type: FETCH_CHARACTERS_START
});

export const fetchAllCharactersSuccess = (characters) => ({
    type: FETCH_CHARACTERS_SUCCESS,
    payload: characters
});

export const fetchAllCharactersFail = (errorMessage) => ({
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
        const character = await fetchDataFromSwapi(i);
        allCharacters.push(character);
    }
    return allCharacters;
};

export const fetchAllCharacters = (a, b) => {
    return dispatch => {
        dispatch(fetchAllCharactersStart);
        createAllCharactersArray(a, b).then(data => {
            dispatch(fetchAllCharactersSuccess(data));
        }).catch(error => dispatch(fetchAllCharactersFail(error)));
    }
}