import { REQUEST_ONE_CHAR_START,
        REQUEST_ONE_CHAR_SUCCESS,
        REQUEST_ONE_CHAR_FAILED
 } from '../types';

 import { fetchDataFromSwapi, fetchStart, fetchSuccess, fetchFailed } from '../../utils/useFetchDataFromSwapi';

 export const requestOneCharacter = (i) => {
    return dispatch => {
        dispatch(fetchStart(REQUEST_ONE_CHAR_START));
        fetchDataFromSwapi(`https://swapi.dev/api/people/${i}/`)
        .then(data => dispatch(fetchSuccess(REQUEST_ONE_CHAR_SUCCESS, data)))
        .catch(error => dispatch(fetchFailed(REQUEST_ONE_CHAR_FAILED, error.message)));
    }
}