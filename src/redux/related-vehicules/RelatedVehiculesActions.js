import {REQUEST_RELATED_VEHICULES_START, REQUEST_RELATED_VEHICULES_SUCCESS, REQUEST_RELATED_VEHICULES_FAILED } from '../types';

import { fetchStart, fetchSuccess, fetchFailed, createItems } from '../../utils/useFetchDataFromSwapi';

export const requestVehicles = (relatedItems) => {
    const item = (relatedItems[0].split('/')[4]);
    const numbers = relatedItems.map(item => item.split('/')[5]);

    return async dispatch => {
        dispatch(fetchStart(REQUEST_RELATED_VEHICULES_START));
        createItems(item, numbers)
        .then(data => dispatch(fetchSuccess(REQUEST_RELATED_VEHICULES_SUCCESS, data)))
        .catch(error => dispatch(fetchFailed(REQUEST_RELATED_VEHICULES_FAILED, error.message)));
    }
};