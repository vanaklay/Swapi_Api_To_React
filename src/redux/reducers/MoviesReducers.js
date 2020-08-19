import { REQUEST_MOVIES_START, REQUEST_MOVIES_SUCCESS, REQUEST_MOVIES_FAILED} from '../types';

const INITIAL_STATE = {
    movies: null,
    isPending: false,
    errorMessage: ''
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case REQUEST_MOVIES_START:
            return { ...state, isPending: true };
        case REQUEST_MOVIES_SUCCESS:
            return { ...state, isPending: false, movies: action.payload };
        case REQUEST_MOVIES_FAILED:
            return { ...state, isPending: false, errorMessage: action.payload };
        default:
            return state;
    };
};