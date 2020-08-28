import { REQUEST_RELATED_PLANETS_START, REQUEST_RELATED_PLANETS_SUCCESS, REQUEST_RELATED_PLANETS_FAILED } from '../types';

import { createItems, fetchStart, fetchSuccess, fetchFailed } from '../../utils/useFetchDataFromSwapi';

export const requestPlanetsArray = (relatedItems) => {
    return dispatch => {
        dispatch(fetchStart(REQUEST_RELATED_PLANETS_START));
        createItems(relatedItems)
        .then(data => dispatch(fetchSuccess(REQUEST_RELATED_PLANETS_SUCCESS, data)))
        .catch(error => dispatch(fetchFailed(REQUEST_RELATED_PLANETS_FAILED, error.message)));
    };
};