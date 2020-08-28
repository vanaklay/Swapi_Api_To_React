import { REQUEST_RELATED_CHARACTERS_START, REQUEST_RELATED_CHARACTERS_SUCCESS, REQUEST_RELATED_CHARACTERS_FAILED } from '../types';

const INITIAL_STATE = {
    arrayCharacters: null,
    isPending: false,
    errorMessage: ''
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case REQUEST_RELATED_CHARACTERS_START:
            return { ...state, isPending: true };
        case REQUEST_RELATED_CHARACTERS_SUCCESS:
            return { ...state, arrayCharacters: action.payload, isPending: false };
        case REQUEST_RELATED_CHARACTERS_FAILED:
            return { ...state, isPending: false, errorMessage: action.payload };
        default:
            return state;
    }
};