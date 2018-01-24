import axios from 'axios';

export const FETCH_APoD = 'fetch_APoD';
export const FETCH_APoDByDate = 'fetch_APoDByDate';

const URL = 'https://api.nasa.gov/planetary/apod';
const API_KEY = 'api_key=dcDlzhMEGtr70CFskTzcceI32zwCPnnWVNHMb0r4'


// export function fetchAPoD() {
//     const request = axios.get(`${URL}?${API_KEY}`);
//     return {type: FETCH_APoD, payload: request}
// }

export const fetchAPoD = () => async dispatch => {
    const request = await  axios.get(`${URL}?${API_KEY}`);

    dispatch({type: FETCH_APoD, payload: request});
};

export const fetchAPoDByDate= (date) => async dispatch => {
    const request = await axios.get(`${URL}?date=${date}&${API_KEY}`);

    dispatch({type: FETCH_APoDByDate, payload: request});
};



// export function fetchAPoDByDate(date) {
//     const request = axios.get(`${URL}?date=${date}&${API_KEY}`);
//     console.log(request);
//     return {type: FETCH_APoDByDate, payload: request}
// }