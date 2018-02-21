import axios from 'axios';

export const FETCH_APOD = 'fetch_APoD';
export const FETCH_APODBYDATE = 'fetch_APoDByDate';

const URL = 'https://api.nasa.gov/planetary/apod';
const API_KEY = 'api_key=dcDlzhMEGtr70CFskTzcceI32zwCPnnWVNHMb0r4'

export const fetchAPoD = () => async dispatch => {
    const request = await  axios.get(`${URL}?${API_KEY}`);

    dispatch({type: FETCH_APOD, payload: request});
};

export const fetchAPoDByDate = (date) => async dispatch => {
    const request = await axios.get(`${URL}?date=${date}&${API_KEY}`);

    dispatch({type: FETCH_APODBYDATE, payload: request});
};