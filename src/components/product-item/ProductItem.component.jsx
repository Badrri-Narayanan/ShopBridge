import React from 'react';
import {connect} from 'react-redux'

import formatCurrency from '../../util';
import {AddItemToCart} from '../../redux/cart/cart.actions'

const ProductItem = ({product, AddItemToCart}) => {
    return (
    <div className='col-md-4' key={product.id} sytle={{height: '900px', width: '550px'}}>
        <div className='thumbnail text-center'>
            <a href={`#${product.id}`} onClick={() => AddItemToCart(product)}>
                <img 
                    src={product.imgUrl}
                    alt={product.title}
                    style={{width: "500px", height: "250px"}}
                />
                <p style={{color: "lightyellow"}}>{product.title}</p>
            </a>
            <div>
                <p>Description</p>
                <p>{product.description}</p>
                <hr/>
                <b>{formatCurrency(product.price)}</b>
                <button 
                    className="btn btn-primary"
                    onClick={() => AddItemToCart(product)}
                >Add to Cart</button>
            </div>
        </div>
    </div>
    );
}

const mapDispatchToProps = dispatch => ({
    AddItemToCart : product => dispatch(AddItemToCart(product)),
})

export default connect(null,mapDispatchToProps)(ProductItem);