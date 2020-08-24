export const fetchDataFromSwapi = async (url) => {
    const res = await fetch(url);
    if(res.status === 404) {
        throw new Error('error 404');
    } else {
        return res.json();
    }
};

export const fetchStart = (type) => ({
    type: type
});

export const fetchSuccess = (type, payload) => ({
    type: type,
    payload: payload
});

export const fetchFailed = (type, payload) => ({
    type: type,
    payload: payload
});

export const createItems = async (item, numbers) => {
    const asyncItems = await Promise.all(numbers.map(async num => {
        return await fetchDataFromSwapi(`https://swapi.dev/api/${item}/${num}/`);
    } ));
    return asyncItems;
}