import {FETCH_APoD, FETCH_APoDByDate} from '../actions/actions';

export default function (state = {}, action) {
    switch (action.type) {
        case FETCH_APoD:
            return {
                ...state,
                data: action.payload.data
            };
        case FETCH_APoDByDate: {
            return {
                ...state,
                date: action.payload.data
            }
        }
        default:
            return state;
    }
}