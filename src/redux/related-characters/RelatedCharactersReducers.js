import { REQUEST_EACH_FROM_LIST_START, REQUEST_EACH_FROM_LIST_SUCCESS, REQUEST_EACH_FROM_LIST_FAILED } from '../types';

const INITIAL_STATE = {
    arrayCharacters: null,
    isPending: false,
    errorMessage: ''
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case REQUEST_EACH_FROM_LIST_START:
            return { ...state, isPending: true };
        case REQUEST_EACH_FROM_LIST_SUCCESS:
            return { ...state, arrayCharacters: action.payload, isPending: false };
        case REQUEST_EACH_FROM_LIST_FAILED:
            return { ...state, isPending: false, errorMessage: action.payload };
        default:
            return state;
    }
};