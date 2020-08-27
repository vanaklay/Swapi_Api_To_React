import { FILMS_START, FILMS_SUCCESS, FILMS_FAILED, ALL_FILMS_START, ALL_FILMS_SUCCESS, ALL_FILMS_FAILED } from '../types';

const INITIAL_STATE = {
    isPending: false,
    one: null,
    oneError: '',
    isAllPending: false,
    all: null,
    allError: '',
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case FILMS_START:
            return { ...state, isPending: true };
        case FILMS_SUCCESS:
            return { ...state, isPending: false, one: action.payload };
        case FILMS_FAILED:
            return { ...state, isPending: false, oneError: action.payload };
        case ALL_FILMS_START:
            return { ...state, isAllPending: true };
        case ALL_FILMS_SUCCESS:
            return { ...state, isAllPending: false, all: action.payload };
        case ALL_FILMS_FAILED: 
            return { ...state, isAllPending: false, allError: action.payload };
        default:
            return state;
    }
};