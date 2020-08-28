import { REQUEST_ONE_CHAR_START, REQUEST_ONE_CHAR_SUCCESS, REQUEST_ONE_CHAR_FAILED } from '../types';

const INITIAL_STATE = {
    character: null,
    isFetching: false,
    errorMessage: undefined,
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case REQUEST_ONE_CHAR_START:
            return { ...state, isFetching: true };
        case REQUEST_ONE_CHAR_SUCCESS:
            return { ...state, isFetching: false, character: action.payload };
        case REQUEST_ONE_CHAR_FAILED:
            return { ...state, isFetching: false, errorMessage: action.payload };
        default:
            return state;
    }
};