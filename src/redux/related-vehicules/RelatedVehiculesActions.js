import {REQUEST_RELATED_VEHICULES_START, REQUEST_RELATED_VEHICULES_SUCCESS, REQUEST_RELATED_VEHICULES_FAILED } from '../types';

import { fetchStart, fetchSuccess, fetchFailed, createItems } from '../../utils/useFetchDataFromSwapi';

export const requestVehicles = (relatedItems) => {

    return async dispatch => {
        dispatch(fetchStart(REQUEST_RELATED_VEHICULES_START));
        createItems(relatedItems)
        .then(data => dispatch(fetchSuccess(REQUEST_RELATED_VEHICULES_SUCCESS, data)))
        .catch(error => dispatch(fetchFailed(REQUEST_RELATED_VEHICULES_FAILED, error.message)));
    }
};