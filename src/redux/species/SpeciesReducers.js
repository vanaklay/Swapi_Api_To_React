import { REQUEST_SPECIE_START, REQUEST_SPECIE_SUCCESS, REQUEST_SPECIE_FAILED, 
    REQUEST_ALL_SPECIES_START, REQUEST_ALL_SPECIES_SUCCESS, REQUEST_ALL_SPECIES_FAILED
} from '../types';

const INITIAL_STATE = {
    all: null,
    isPendingAll: false,
    errorMessageAll: '',
    one: null,
    isPendingOne: false,
    errorMessageOne: ''
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case REQUEST_SPECIE_START:
            return { ...state, isPendingOne: true };
        case REQUEST_SPECIE_SUCCESS:
            return { ...state, isPendingOne: false, one: action.payload };
        case REQUEST_SPECIE_FAILED:
            return { ...state, isPendingOne: false, errorMessageOne: action.payload };
        case REQUEST_ALL_SPECIES_START:
            return { ...state, isPendingAll: true };
        case REQUEST_ALL_SPECIES_SUCCESS:
            return { ...state, isPendingAll: false, all: action.payload };
        case REQUEST_ALL_SPECIES_FAILED:
            return { ...state, isPendingAll: false, errorMessageAll: action.payload };
        default:
            return state;
    }
};