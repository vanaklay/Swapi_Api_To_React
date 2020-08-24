import { PLANETS_START, PLANETS_SUCCESS, PLANETS_FAILED,
    ALL_PLANETS_START, ALL_PLANETS_SUCCESS, ALL_PLANETS_FAILED
} from '../types';

const INITIAL_STATE = {
    allPlanets: null,
    planet: null,
    isPending: false,
    isAllPending: false,
    errorMessage: '',
    allErrorMessage: ''
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case PLANETS_START:
            return { ...state, isPending: true };
        case PLANETS_SUCCESS:
            return { ...state, isPending: false ,planet: action.payload };
        case PLANETS_FAILED:
            return { ...state, isPending: false, errorMessage: action.payload };
        case ALL_PLANETS_START:
            return { ...state, isAllPending: true };
        case ALL_PLANETS_SUCCESS:
            return { ...state, isAllPending: false, allPlanets: action.payload };
        case ALL_PLANETS_FAILED:
            return { ...state, isAllPending: false, allErrorMessage: action.payload };
        default:
            return state;
    }
};