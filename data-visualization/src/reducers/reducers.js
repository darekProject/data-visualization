import {FETCH_APoD} from '../actions/actions';

export default function (state = {}, action) {
    switch (action.type) {
        case FETCH_APoD:
            return {
                ...state,
                data: action.payload.data
            };
        default:
            return state;
    }
}