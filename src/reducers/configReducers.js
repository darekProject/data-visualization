import {combineReducers} from 'redux';
import nasaReducers from './reducers.js'

const rootReducer = combineReducers({
    nasa: nasaReducers
});

export default rootReducer;