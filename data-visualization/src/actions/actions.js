import axios from 'axios';

export const FETCH_APoD = 'fetch_APoD';

const URL = 'https://api.nasa.gov/planetary/apod';
const API_KEY = '?api_key=dcDlzhMEGtr70CFskTzcceI32zwCPnnWVNHMb0r4'


export function fetchAPoD() {
    const request = axios.get(`${URL}${API_KEY}`);
    return {type: FETCH_APoD, payload: request}
}