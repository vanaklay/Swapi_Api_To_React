import { REQUEST_RELATED_PLANETS_START, REQUEST_RELATED_PLANETS_SUCCESS, REQUEST_RELATED_PLANETS_FAILED } from '../types';

const INITIAL_STATE = {
    planets: null,
    isPending: false,
    errorMessage: ''
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case REQUEST_RELATED_PLANETS_START:
            return { ...state, isPending: true };
        case REQUEST_RELATED_PLANETS_SUCCESS:
            return { ...state, isPending: false, planets: action.payload };
        case REQUEST_RELATED_PLANETS_FAILED:
            return { ...state, isPending: false, errorMessage: action.payload };
        default:
            return state;
    };
};