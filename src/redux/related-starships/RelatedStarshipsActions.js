import { REQUEST_RELATED_STARSHIPS_START, REQUEST_RELATED_STARSHIPS_SUCCESS, REQUEST_RELATED_STARSHIPS_FAILED} from '../types';

import { fetchStart, fetchSuccess, fetchFailed, createItems } from '../../utils/useFetchDataFromSwapi';

export const requestStarships = (relatedItems) => {
    const item = (relatedItems[0].split('/')[4]);
    const numbers = relatedItems.map(item => item.split('/')[5]);

    return async dispatch => {
        dispatch(fetchStart(REQUEST_RELATED_STARSHIPS_START));
        createItems(item, numbers)
        .then(data => dispatch(fetchSuccess(REQUEST_RELATED_STARSHIPS_SUCCESS, data)))
        .catch(error => dispatch(fetchFailed(REQUEST_RELATED_STARSHIPS_FAILED, error.message)));
    }
};