import { REQUEST_RELATED_MOVIES_START, REQUEST_RELATED_MOVIES_SUCCESS, REQUEST_RELATED_MOVIES_FAILED} from '../types';


import { fetchStart, fetchSuccess, fetchFailed, createItems } from '../../utils/useFetchDataFromSwapi';

export const requestMovies = (relatedItems) => {
    
    return async dispatch => {
        dispatch(fetchStart(REQUEST_RELATED_MOVIES_START));
        createItems(relatedItems)
        .then(data => dispatch(fetchSuccess(REQUEST_RELATED_MOVIES_SUCCESS, data)))
        .catch(error => dispatch(fetchFailed(REQUEST_RELATED_MOVIES_FAILED, error.message)));
    }
};