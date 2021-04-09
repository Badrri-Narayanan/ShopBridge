import CartActionType from "./cart.types"
import { addCartItem, removeCartItem } from "./cart.utils"

const INITIAL_STATE = {
    cartItems : [],
}

const cartReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case CartActionType.ADD_CART_ITEM :
            return {
                ...state,
                cartItems : addCartItem(state.cartItems, action.payload),
            }
        case CartActionType.REMOVE_CART_ITEM :
            return {
                ...state,
                cartItems : removeCartItem(state.cartItems, action.payload),
            }
        default :
            return state
    }
}

export default cartReducer;