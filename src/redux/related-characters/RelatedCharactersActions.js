import { REQUEST_EACH_FROM_LIST_START, REQUEST_EACH_FROM_LIST_SUCCESS, REQUEST_EACH_FROM_LIST_FAILED } from '../types';

import { fetchStart, fetchSuccess, fetchFailed, createItems } from '../../utils/useFetchDataFromSwapi';

export const requestArrayOfCharacters = (relatedItems) => {
    // relatedItems === array of characters's urls
    return dispatch => {
        dispatch(fetchStart(REQUEST_EACH_FROM_LIST_START));
        createItems(relatedItems)
        .then(data => dispatch(fetchSuccess(REQUEST_EACH_FROM_LIST_SUCCESS, data)))
        .catch(error => dispatch(fetchFailed(REQUEST_EACH_FROM_LIST_FAILED, error.message)));
    }
};