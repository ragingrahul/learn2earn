import {combineReducers} from 'redux';
import walletReducer from './wallet';
import cartReducer from './cart';


const allReducers = combineReducers({
    walletAdd: walletReducer,
    cart: cartReducer,
});

export default allReducers;