import { REQUEST_RELATED_CHARACTERS_START, REQUEST_RELATED_CHARACTERS_SUCCESS, REQUEST_RELATED_CHARACTERS_FAILED } from '../types';

import { fetchStart, fetchSuccess, fetchFailed, createItems } from '../../utils/useFetchDataFromSwapi';

export const requestArrayOfCharacters = (relatedItems) => {
    // relatedItems === array of characters's urls
    return dispatch => {
        dispatch(fetchStart(REQUEST_RELATED_CHARACTERS_START));
        createItems(relatedItems)
        .then(data => dispatch(fetchSuccess(REQUEST_RELATED_CHARACTERS_SUCCESS, data)))
        .catch(error => dispatch(fetchFailed(REQUEST_RELATED_CHARACTERS_FAILED, error.message)));
    }
};