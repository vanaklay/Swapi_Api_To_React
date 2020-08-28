import { REQUEST_RELATED_STARSHIPS_START, REQUEST_RELATED_STARSHIPS_SUCCESS, REQUEST_RELATED_STARSHIPS_FAILED} from '../types';

import { fetchStart, fetchSuccess, fetchFailed, createItems } from '../../utils/useFetchDataFromSwapi';

export const requestStarships = (relatedItems) => {
    return async dispatch => {
        dispatch(fetchStart(REQUEST_RELATED_STARSHIPS_START));
        createItems(relatedItems)
        .then(data => dispatch(fetchSuccess(REQUEST_RELATED_STARSHIPS_SUCCESS, data)))
        .catch(error => dispatch(fetchFailed(REQUEST_RELATED_STARSHIPS_FAILED, error.message)));
    }
};