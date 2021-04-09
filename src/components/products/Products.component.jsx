import React, {useEffect} from 'react';

import { connect } from 'react-redux'
import { fetchProductsStartAsync } from '../../redux/products/products.actions'
import ProductItem from '../product-item/ProductItem.component';

const Products = ({fetchProductsFromBackend, products}) => {
    useEffect(() => {
        fetchProductsFromBackend();
    }, [fetchProductsFromBackend]);

    return (
        <div className='row'>
            {
                products.map((product, id) => (
                    <ProductItem key={id} product={product} />
                ))
            }
        </div>
    );
}

const mapStateToProps = (state) => ({
    products : state.products_list.products
});

const mapDispatchToProps = dispatch => ({
    fetchProductsFromBackend : products => dispatch(fetchProductsStartAsync())
})

export default connect(mapStateToProps,mapDispatchToProps)(Products);
