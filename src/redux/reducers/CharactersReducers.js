import { FETCH_CHARACTERS_START, 
        FETCH_CHARACTERS_SUCCESS, 
        FETCH_CHARACTERS_FAIL,
        FETCH_ONE_CHAR_SUCCESS,
        } from '../actions/types';

const INITIAL_STATE = {
    allCharacters: null,
    isFetching: false,
    errorMessage: undefined,
    oneCharacter: null
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case FETCH_CHARACTERS_START:
            return { ...state, isFetching: true };
        case FETCH_CHARACTERS_SUCCESS:
            return { ...state, isFetching: false, allCharacters: action.payload };
        case FETCH_CHARACTERS_FAIL:
            return { ...state, isFetching: false, errorMessage: action.payload };
        case FETCH_ONE_CHAR_SUCCESS:
            return { ...state, isFetching: false, oneCharacter: action.payload };
        default:
            return state;
    }
};