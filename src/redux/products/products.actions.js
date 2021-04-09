import ProductActionTypes from "./products.types";

export const setProducts = (products_array) => ({
    type : ProductActionTypes.SET_PRODUCTS,
    payload : products_array,
});

export const fetchProductsStart = () => ({
    type : ProductActionTypes.FETCH_PRODUCT_START,
});

export const fetchProductsSuccess = (productsArray) => ({
    type : ProductActionTypes.FETCH_PRODUCT_SUCCESS,
    payload : productsArray,
});

export const fetchProductsFailure = (errorMessage) => ({
    type : ProductActionTypes.FETCH_PRODUCT_FAILURE,
    payload : errorMessage
});

export const fetchProductsStartAsync = () => {
    return dispatch => {
        dispatch(fetchProductsStart());
        fetch('https://shopbridge.herokuapp.com/')
            .then(resp => resp.json())
            .then(new_product_list => dispatch(fetchProductsSuccess(new_product_list)))
            .catch(error => dispatch(fetchProductsFailure(error.message)));
    }
}