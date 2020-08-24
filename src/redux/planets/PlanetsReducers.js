import { PLANETS_START, PLANETS_SUCCESS, PLANETS_FAILED } from '../types';

const INITIAL_STATE = {
    allPlanets: null,
    planet: null,
    isPending: false,
    errorMessage: ''
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case PLANETS_START:
            return { ...state, isPending: true };
        case PLANETS_SUCCESS:
            return { ...state, isPending: false ,planet: action.payload };
        case PLANETS_FAILED:
            return { ...state, isPending: false, errorMessage: action.payload }
        default:
            return state;
    }
};