import CartActionType from "./cart.types";

export const AddItemToCart = (item) => ({
    type: CartActionType.ADD_CART_ITEM,
    payload: item,
})

export const RemoveItemFromCart = (item) => ({
    type: CartActionType.REMOVE_CART_ITEM,
    payload: item,
})
