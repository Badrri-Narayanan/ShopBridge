import React from 'react'

import formatCurrency from '../../util'
import {connect} from 'react-redux';

import {RemoveItemFromCart} from '../../redux/cart/cart.actions'
import './Cart.styles.css'

const Cart = ({cartItems, RemoveItemFromCart}) => (
    <div className="alert alert-info">
        {
            (cartItems.length === 0)?
                "Cart is Empty"
                :
                <div>
                    You have {cartItems.length} products in the basket
                </div>
        }
        {
            cartItems.length > 0 &&
            <div>
                <ul>
                    {
                        cartItems.map(item =>
                            <li key = {`${item.id}`}>
                                <b>{item.title}</b>
                                    X {item.quantity} = {item.price * item.quantity}
                                <button 
                                    onClick={() => RemoveItemFromCart(item)}
                                    className='btn btn-danger'
                                >X</button>
                            </li>
                        )
                    }
                </ul>
                Total:
                {
                    formatCurrency(cartItems.reduce((a, c) => a + (c.price*c.quantity), 0))
                }
                <button 
                    className='btn btn-primary'
                    onClick={() => alert("Proceeding to Payment")}
                >Check Out</button>
            </div>
        }
    </div>
);

const mapStateToProps = (state) => ({
    cartItems: state.cart_items.cartItems,
})

const mapDispatchToProps = dispatch => ({
    RemoveItemFromCart : item => dispatch(RemoveItemFromCart(item)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Cart);