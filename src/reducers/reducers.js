import {FETCH_APOD, FETCH_APODBYDATE} from '../actions/actions';

export default function (state = {}, action) {
    switch (action.type) {
        case FETCH_APOD:
            return {
                ...state,
                data: action.payload.data
            };
        case FETCH_APODBYDATE: {
            return {
                ...state,
                date: action.payload.data
            }
        }
        default:
            return state;
    }
}