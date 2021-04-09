import ProductActionTypes from "./products.types"

const INITIAL_STATE = {
    products : [],
    isFetching : false,
    errorMessage : undefined,
}

export const productsReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case ProductActionTypes.SET_PRODUCTS:
            return {
                ...state,
                products : action.payload
            }
        case ProductActionTypes.FETCH_PRODUCT_START:
            return {
                ...state,
                isFetching : true
            }
        case ProductActionTypes.FETCH_PRODUCT_SUCCESS:
            return {
                ...state,
                products : action.payload,
                isFetching : false,
            }
        case ProductActionTypes.FETCH_PRODUCT_FAILURE:
            return {
                ...state,
                isFetching : false,
                errorMessage : action.payload,
            }
        default:
            return state
    }
}