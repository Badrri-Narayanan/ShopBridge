import {combineReducers} from 'redux';
import cartReducer from './cart/cart.reducer';

import {productsReducer} from './products/products.reducer'

const rootReducer = combineReducers({
    products_list : productsReducer,
    cart_items : cartReducer,
})

export default rootReducer;