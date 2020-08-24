import { REQUEST_RELATED_VEHICULES_START, REQUEST_RELATED_VEHICULES_SUCCESS, REQUEST_RELATED_VEHICULES_FAILED} from '../types';

const INITIAL_STATE = {
    items: null,
    isPending: false,
    errorMessage: ''
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case REQUEST_RELATED_VEHICULES_START:
            return { ...state, isPending: true };
        case REQUEST_RELATED_VEHICULES_SUCCESS:
            return { ...state, isPending: false, items: action.payload };
        case REQUEST_RELATED_VEHICULES_FAILED:
            return { ...state, isPending: false, errorMessage: action.payload };
        default:
            return state;
    };
};