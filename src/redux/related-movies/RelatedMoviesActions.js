import { REQUEST_RELATED_MOVIES_START, REQUEST_RELATED_MOVIES_SUCCESS, REQUEST_RELATED_MOVIES_FAILED} from '../types';


import { fetchDataFromSwapi, fetchStart, fetchSuccess, fetchFailed } from '../../utils/useFetchDataFromSwapi';

export const requestMovies = (relatedItems) => {
    const createItems = async () => {
        const item = (relatedItems[0].split('/')[4]);
        const numbers = relatedItems.map(item => item.split('/')[5]);

        const asyncItems = await Promise.all(numbers.map(async num => {
            return await fetchDataFromSwapi(`https://swapi.dev/api/${item}/${num}/`);
        } ));
        return asyncItems;
    }
    
    return async dispatch => {
        dispatch(fetchStart(REQUEST_RELATED_MOVIES_START));
        createItems()
        .then(data => dispatch(fetchSuccess(REQUEST_RELATED_MOVIES_SUCCESS, data)))
        .catch(error => dispatch(fetchFailed(REQUEST_RELATED_MOVIES_FAILED, error.message)));
    }
};