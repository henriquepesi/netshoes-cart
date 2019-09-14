import { combineReducers } from 'redux';

import toggleCart from './toggleCart/reducer';
import cart from './cart/reducer';


export default combineReducers({
  toggleCart,
  cart
});
