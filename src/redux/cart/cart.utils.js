const checkIfItemAlreadyinArray = (array, newItem) => {
    let flag = false;
    array.forEach(item => {
        if(item.id === newItem.id) {
            flag = true;
        }
    })
    return flag;
}

export const addCartItem = (cartItems, newItem) => {
    if(!checkIfItemAlreadyinArray(cartItems, newItem)) {
        return [
            ...cartItems,
            {...newItem, quantity: 1},
        ];
    } else {
        return cartItems.map(item => {
            if(item.id === newItem.id) {
                return {
                    ...item,
                    quantity: item.quantity+1,
                }
            }
            return item
        })
    }
}

export const removeCartItem = (cartItems, item) => {
    if(item.quantity === 1) {
        console.log(item)
        return cartItems.filter(cartItem => cartItem.id !== item.id)
    } else {
        return cartItems.map(cartItem => {
            if(cartItem.id === item.id) {
                return {
                    ...item,
                    quantity: item.quantity-1,
                }
            }
            return cartItem
        })
    }
}
