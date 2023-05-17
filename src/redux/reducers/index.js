import {combineReducers} from 'redux';
import walletReducer from './wallet';


const allReducers = combineReducers({
    walletAdd: walletReducer,
});

export default allReducers;