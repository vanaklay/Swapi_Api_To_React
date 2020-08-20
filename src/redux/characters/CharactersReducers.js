import { FETCH_CHARACTERS_START, 
        FETCH_CHARACTERS_SUCCESS, 
        FETCH_CHARACTERS_FAIL,
        } from '../types';

const INITIAL_STATE = {
    allCharacters: null,
    isFetching: false,
    errorMessage: undefined,
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case FETCH_CHARACTERS_START:
            return { ...state, isFetching: true };
        case FETCH_CHARACTERS_SUCCESS:
            return { ...state, isFetching: false, allCharacters: action.payload };
        case FETCH_CHARACTERS_FAIL:
            return { ...state, isFetching: false, errorMessage: action.payload };
        default:
            return state;
    }
};